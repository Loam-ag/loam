'use client';

import FormSection from '@/components/form/FormSection';
import AiAvatar from '@/components/icons/AiAvatar';
import CopyIcon from '@/components/icons/CopyIcon';
import EditIcon from '@/components/icons/EditIcon';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useChat } from 'ai/react';
import { FormEvent, useEffect, useState } from 'react';

export default function PddSection({ params }: { params: { id: string } }) {
  const supabase = createClientComponentClient();
  const [aiOutput, setAiOutput] = useState('');
  const [sectionPrompt, setSectionPrompt] = useState('');
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
        should_render: any;
      }[]
    | undefined
  >(undefined);

  useEffect(() => {
    const getFormFields = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession();
      const { data: aiOutput } = await supabase
        .from('form_ai_outputs')
        .select('output_value')
        .eq('subsection_id', params.id)
        .eq('user_id', session?.user.id);
      setAiOutput(
        aiOutput && aiOutput.length !== 0 ? aiOutput[0].output_value : ''
      );
      const { data: sectionPrompt } = await supabase
        .from('form_subsections')
        .select(
          `
          prompt
        `
        )
        .eq('id', params.id)
        .limit(1)
        .single();
      setSectionPrompt(sectionPrompt?.prompt);
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
              field_conditional_value,
              external_field_conditional,
              external_field_conditional_value,
              external_bool
            `
        )
        .eq('subsection_id', params.id)
        .order('field_order');

      const { data: formResponsesData } = await supabase
        .from('form_responses')
        .select('field_id, response_value')
        .eq('user_id', session?.user.id)
        .eq('subsection_id', params.id);

      const fieldConditionalValues = formFieldsData
        ?.filter((field) => field.external_field_conditional !== null)
        .map((field) => field.external_field_conditional);

      const { data: prefillData } = await supabase
        .from('form_responses')
        .select('field_id, response_value')
        .eq('user_id', session?.user.id)
        .in('field_id', fieldConditionalValues || []);
      const combinedData = formFieldsData?.map((formField) => {
        const matchingResponse = formResponsesData?.find(
          (formResponse) => formResponse.field_id === formField.id
        );

        const responseValue = matchingResponse
          ? matchingResponse.response_value
          : '';

        const associatedResponseValue =
          formField.external_field_conditional === null
            ? null
            : prefillData?.find(
                (data) => data.field_id === formField.external_field_conditional
              )?.response_value;
        console.log(
          associatedResponseValue,
          formField.external_field_conditional_value
        );
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
          conditional_value: formField.field_conditional_value,
          should_render:
            associatedResponseValue === null
              ? true
              : (associatedResponseValue ===
                  formField.external_field_conditional_value) ===
                formField.external_bool
        };
      });
      setFields(combinedData);
    };
    getFormFields();
  }, []);

  const { messages, append } = useChat({
    body: {
      subsection_id: params.id,
      section_prompt: sectionPrompt
    }
  });

  const performUpsert = async (modifiedFields: any[]) => {
    try {
      const { data, error } = await supabase
        .from('form_responses')
        .upsert(modifiedFields);
      console.log(data, error);
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
        should_render,
        ...rest
      }) => {
        modifiedFields.push({ ...rest, response_value });
        concatenatedString = should_render
          ? concatenatedString + `${label}: ${response_value}, `
          : concatenatedString + '';
      }
    );
    performUpsert(modifiedFields);
    return concatenatedString;
  };

  const generateResponse = (userInput: string) => {
    append({
      content: userInput,
      role: 'user'
    });
  };

  const handleSectionSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userInput = saveProgress();
    generateResponse(userInput);
  };

  return (
    fields && (
      <div className="flex flex-row w-full gap-4">
        <div className="w-1/2 mx-auto mt-8 px-4">
          <form onSubmit={handleSectionSubmit}>
            {fields &&
              fields?.map((field, index) => (
                <FormSection
                  fields={fields}
                  setFields={setFields}
                  key={index}
                  fieldName={field.name}
                  fieldId={field.field_id}
                  type={field.type}
                  responseValue={field.response_value}
                  options={field.options}
                  conditional={field.conditional}
                  conditionalValue={field.conditional_value}
                  shouldRender={field.should_render}
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
        <div className="w-1/2 bg-loam_1 p-4 overflow-y-auto flex flex-row h-[90vh] px-4">
          {sectionPrompt ? (
            <>
              <div className="flex flex-col items-center gap-6 mt-4">
                <AiAvatar />
                <EditIcon />
                <CopyIcon />
              </div>
              <p className="ml-6 text-black mt-4 whitespace-pre-line">
                {messages.filter((m) => m.role === 'assistant').pop()
                  ?.content || aiOutput}
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    )
  );
}
