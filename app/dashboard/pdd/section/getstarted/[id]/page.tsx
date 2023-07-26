'use client';

import FormSection from '@/components/form/FormSection';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { FormEvent, useEffect, useState } from 'react';

export default function GetStarted({ params }: { params: { id: string } }) {
  const supabase = createClientComponentClient();
  const [fields, setFields] = useState<
    | {
        field_id: any;
        user_id: any;
        response_value: any;
        subsection_id: any;
        label: any;
        name: any;
        type: any;
        options: any;
        conditional: any;
        conditional_value: any;
      }[]
    | undefined
  >(undefined);

  useEffect(() => {
    const getFormFields = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession();

      const { data: formFieldsData } = await supabase
        .from('form_fields')
        .select(
          `
              id,
              field_name,
              field_label,
              field_type,
              field_order,
              field_options,
              field_conditional,
              field_conditional_value
            `
        )
        .eq('subsection_id', params.id)
        .order('field_order');

      const { data: formResponsesData } = await supabase
        .from('form_responses')
        .select('field_id, response_value')
        .eq('user_id', session?.user.id)
        .eq('subsection_id', params.id);

      const combinedData = formFieldsData?.map((formField) => {
        const matchingResponse = formResponsesData?.find(
          (formResponse) => formResponse.field_id === formField.id
        );

        const responseValue = matchingResponse
          ? matchingResponse.response_value
          : '';

        return {
          field_id: formField.id,
          user_id: session?.user.id,
          response_value: responseValue,
          subsection_id: params.id,
          label: formField.field_label,
          name: formField.field_name,
          type: formField.field_type,
          options: formField.field_options,
          conditional: formField.field_conditional,
          conditional_value: formField.field_conditional_value
        };
      });
      setFields(combinedData);
    };
    getFormFields();
  }, []);

  const performUpsert = async (modifiedFields: any[]) => {
    try {
      const { data, error } = await supabase
        .from('form_responses')
        .upsert(modifiedFields);
      if (error) {
        throw new Error('Upsert failed');
      }
    } catch (error) {
      console.error(error); // Handle any error that occurred
    }
  };

  const saveProgress = () => {
    let modifiedFields:
      | {
          field_id: any;
          user_id: any;
          response_value: any;
          subsection_id: any;
        }[] = [];
    let concatenatedString = '';

    fields?.forEach(
      ({
        name,
        type,
        label,
        response_value,
        options,
        conditional,
        conditional_value,
        ...rest
      }) => {
        modifiedFields.push({ ...rest, response_value });
        concatenatedString += `${label}: ${response_value}, `;
      }
    );
    performUpsert(modifiedFields);
    return concatenatedString;
  };

  const handleSectionSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userInput = saveProgress();
  };
  return (
    fields && (
      <div className="flex flex-col w-full items-center mt-8">
        <div className="flex flex-row">
          <div className="flex flex-col items-center">
            <p className="text-black bg-loam_4 py-2 px-4 rounded-md">1</p>
            <p className="text-black mt-4 text-sm">Basic Information</p>
          </div>
          <hr
            className="w-36 mx-auto my-4 bg-loam_4 border-0 "
            style={{ height: '2px' }}
          />
          <div className="flex flex-col items-center">
            <p className="text-black bg-loam_4 py-2 px-4 rounded-md">2</p>
            <p className="text-black mt-4 text-sm">Material Preparation</p>
          </div>
          <hr
            className="w-36 mx-auto my-4 bg-loam_4 border-0 "
            style={{ height: '2px' }}
          />
          <div className="flex flex-col items-center">
            <p className="text-black bg-loam_4 py-2 px-4 rounded-md">3</p>
            <p className="text-black mt-4 text-sm">Review & Start</p>
          </div>
        </div>
        <p className="text-black mt-6">
          LOAM wants to get to know first in order to better assist you with the
          steps coming next.
        </p>
        <div className="w-3/5 mx-auto mt-10 px-4">
          <form onSubmit={handleSectionSubmit}>
            {fields &&
              fields?.map((field, index) => (
                <FormSection
                  fields={fields}
                  setFields={setFields}
                  key={index}
                  currIndex={index}
                  fieldName={field.name}
                  fieldId={field.field_id}
                  type={field.type}
                  responseValue={field.response_value}
                  options={field.options}
                  conditional={field.conditional}
                  conditionalValue={field.conditional_value}
                  shouldRender={true}
                  readOnly={false}
                />
              ))}
            <div className="flex flex-row float-right gap-4">
              <button
                type="submit"
                className="bg-black text-white font-bold py-2 mt-8 px-4 rounded"
              >
                Generate
              </button>
            </div>
          </form>
          <button
            onClick={saveProgress}
            className="bg-black text-white font-bold py-2 mt-8 px-4 rounded float-right mr-4"
          >
            Save Progress
          </button>
        </div>
      </div>
    )
  );
}
