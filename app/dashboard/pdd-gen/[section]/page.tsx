'use client';

import FieldArray from '@/components/form/FieldArray';
import FormInput from '@/components/form/FormInput';
import AiAvatar from '@/components/icons/AiAvatar';
import CopyIcon from '@/components/icons/CopyIcon';
import EditIcon from '@/components/icons/EditIcon';
import TrashIcon from '@/components/icons/TrashIcon';
import { SECTIONS_VERRA_FIELDS } from '@/constants/verra/SectionFields';
import {
  ArrayFields,
  Field,
  SubsectionFieldParams
} from '@/constants/verra/types';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

export type SubsectionFieldDefaultValues = Record<
  string,
  string | string[] | Record<string, string | string[]>[]
>;

export default function PddSection({
  params
}: {
  params: { section: string };
}) {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const supabase = createClientComponentClient();
  const {
    register,
    unregister,
    handleSubmit,
    reset,
    getValues,
    watch,
    control,
    resetField
  } = useForm({});
  const watchFields = watch();
  const [fields, setFields] = useState<SubsectionFieldParams>();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);
  useEffect(() => {
    const getSavedResponses = async () => {
      const VerraSubsection = SECTIONS_VERRA_FIELDS[params.section];
      setFields(VerraSubsection);

      let savedFieldResponses: SubsectionFieldDefaultValues | null;

      const {
        data: { session }
      } = await supabase.auth.getSession();

      // Fetch the saved field response data from Supabase
      try {
        const { data, error } = await supabase
          .from('verra_pdds')
          .select(params.section)
          .eq('id', id)
          .eq('user_id', session?.user.id)
          .single();
        if (error) {
          throw new Error('Getting saved responses failed');
        }
        if (data) {
          const tempData: any = data;
          savedFieldResponses = tempData[params.section];
        }
      } catch (error) {
        console.error(error); // Handle any error that occurred
      }

      // Set the default values by checking if exists in DB. If not, then use hardcoded default value.
      const fieldDefaultValues: SubsectionFieldDefaultValues = Object.keys(
        VerraSubsection
      ).reduce((obj, key) => {
        if (VerraSubsection[key].type !== 'array') {
          if (savedFieldResponses && savedFieldResponses[key]) {
            obj[key] = savedFieldResponses[key];
          } else {
            const nonDynamicField = VerraSubsection[key] as Field;
            obj[key] = nonDynamicField.defaultValue;
          }
        } else {
          // modify to support possible changes to the dynamic form question list
          if (savedFieldResponses && savedFieldResponses[key]) {
            obj[key] = savedFieldResponses[key];
          } else {
            const arrayFields = VerraSubsection[key] as ArrayFields;
            obj[key] = [
              arrayFields.fields.reduce(
                (acc: Record<string, string | string[]>, field) => {
                  acc[field.fieldName] = field.defaultValue;
                  return acc;
                },
                {}
              )
            ];
          }
        }
        return obj;
      }, {} as SubsectionFieldDefaultValues);
      reset(fieldDefaultValues);
    };
    getSavedResponses();
  }, []);

  const performUpsert = async (fieldValues: FieldValues) => {
    const {
      data: { session }
    } = await supabase.auth.getSession();
    try {
      const { data, error } = await supabase
        .from('verra_pdds')
        .upsert({
          id: id,
          user_id: session?.user.id,
          [params.section]: fieldValues
        })
        .select();
      if (error) {
        throw new Error('Upsert failed');
      }
    } catch (error) {
      console.error(error); // Handle any error that occurred
    }
  };

  const handleSave = async () => {
    const fieldValues = getValues();
    console.log(fieldValues);
    await performUpsert(fieldValues);
  };

  return (
    <div className="flex flex-row w-full gap-4">
      {fields && (
        <div className="w-1/2 mx-auto mt-8 px-4 pb-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            {Object.keys(fields).map((fieldName) => {
              const field = fields[fieldName];
              if (field.type !== 'array') {
                return (
                  <FormInput
                    register={register}
                    unregister={unregister}
                    getValues={getValues}
                    watchFields={watchFields}
                    resetField={resetField}
                    field={field}
                    fieldName={fieldName}
                  />
                );
              } else {
                return (
                  <FieldArray
                    register={register}
                    arrayFields={field}
                    control={control}
                    fieldName={fieldName}
                  />
                );
              }
            })}
            <div className="flex flex-row float-right gap-4">
              <button className="bg-black text-white font-bold py-2 mt-8 px-4 rounded">
                Generate
              </button>
            </div>
          </form>
          <button
            onClick={handleSave}
            className="bg-black text-white font-bold py-2 mt-8 px-4 rounded float-right mr-4"
          >
            Save Progress
          </button>
        </div>
      )}
      <div className="w-1/2 bg-loam_1 p-4 overflow-y-auto flex flex-row h-[90vh] px-4">
        {true ? (
          <>
            <div className="flex flex-col items-center gap-6 mt-4">
              <AiAvatar />
              <EditIcon />
              <button>
                <CopyIcon />
              </button>
              <button>
                <TrashIcon />
              </button>
            </div>
            <p></p>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
