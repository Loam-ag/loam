'use client';

import FieldArray from '@/components/form/FieldArray';
import FormInput from '@/components/form/FormInput';
import AiAvatar from '@/components/icons/AiAvatar';
import CopyIcon from '@/components/icons/CopyIcon';
import EditIcon from '@/components/icons/EditIcon';
import TrashIcon from '@/components/icons/TrashIcon';
import { SECTIONS_VERRA_FIELDS } from '@/constants/verra/SectionFields';
import { VERRA_SECTIONS } from '@/constants/verra/Sections';
import {
  ArrayFields,
  Field,
  SubsectionFieldParams
} from '@/constants/verra/types';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useChat } from 'ai/react';
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
  params: { subsection: string };
}) {
  const supabase = createClientComponentClient();
  const [isCopied, setIsCopied] = useState(false);
  const [isDeletePressed, setIsDeletePressed] = useState(false);
  const sectionName = params.subsection.slice(0, -3);
  const hasAiOutput = VERRA_SECTIONS.find((section) =>
    section.id.includes(sectionName)
  )?.subsections.find((subsection) =>
    subsection.id.includes(params.subsection)
  )?.hasAiOutput;
  const [aiOutput, setAiOutput] = useState('');
  const [userId, setUserId] = useState('');
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
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
  const { messages, append } = useChat({
    body: {
      id: id,
      subsectionId: params.subsection,
      userId: userId,
      subsectionPrompt:
        "Based on the user's inputs, organize each field label and value in a professionally worded paragraph. Fix any grammar mistakes you find as well. To give context on what each field represented in the form, I will give the question associated with each field. After understanding the context of each field, convert the following user input represented as a json object into a professionally worded paragraph. If any user inputs don't make sense given the context of the field, identify the question they should reanswer with an appropriate response. For context, these outputs are for helping the human create a Project Description Document for Verra's Verified Carbon Standard:"
    }
  });
  useEffect(() => {
    if (isDeletePressed && messages.pop()?.role === 'assistant') {
      setIsDeletePressed(false);
    }
  }, [messages]);

  useEffect(() => {
    const getSavedResponses = async () => {
      const VerraSubsection = SECTIONS_VERRA_FIELDS[params.subsection];
      setFields(VerraSubsection);

      let savedFieldResponses: SubsectionFieldDefaultValues | null;

      const {
        data: { session }
      } = await supabase.auth.getSession();
      setUserId(session?.user.id || '');
      // Fetch the saved field response data from Supabase
      try {
        console.log(params.subsection, id, session?.user.id);
        const { data, error } = await supabase
          .from('verra_pdds')
          .select(params.subsection)
          .eq('id', id)
          .eq('user_id', session?.user.id)
          .single();
        console.log('data', data);
        if (error) {
          console.log(error);
          // throw new Error('Getting saved responses failed');
        }
        if (data) {
          const tempData: any = data;
          savedFieldResponses = tempData[params.subsection];
        }
      } catch (error) {
        console.error(error); // Handle any error that occurred
      }

      try {
        const { data, error } = await supabase
          .from('verra_pdds_ai_outputs')
          .select(params.subsection)
          .eq('id', id)
          .eq('user_id', session?.user.id)
          .single();
        if (error) {
          throw new Error('Getting saved responses failed');
        }
        if (data) {
          const tempData: any = data;
          setAiOutput(tempData[params.subsection]);
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
    try {
      const { data, error } = await supabase
        .from('verra_pdds')
        .upsert({
          id: id,
          user_id: userId,
          [params.subsection]: fieldValues,
          edited_at: new Date()
        })
        .select();
      if (error) {
        throw new Error('Upsert failed');
      }
    } catch (error) {
      console.error(error); // Handle any error that occurred
    }
  };

  const handleGenerate = async () => {
    const fieldValues = await handleSave();
    // support dynamic fields for AI
    let userInput =
      Object.keys(fieldValues)
        .map((key) => `${key}:${fields?.[key]?.label}\n`)
        .join('') + JSON.stringify(fieldValues);
    append({
      content: userInput,
      role: 'user'
    });
  };

  const handleSave = async () => {
    const fieldValues = getValues();
    await performUpsert(fieldValues);
    return fieldValues;
  };

  const deleteResponse = async () => {
    try {
      const { data: other, error: otherError } = await supabase
        .from('verra_pdds_ai_outputs')
        .upsert({
          id: id,
          user_id: userId,
          [params.subsection]: ''
        })
        .select();
      setIsDeletePressed(true);
    } catch (error) {
      console.error(error); // Handle any error that occurred
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      messages.filter((m) => m.role === 'assistant').pop()?.content || aiOutput
    );

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
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
                    key={fieldName}
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
                    key={fieldName}
                    register={register}
                    arrayFields={field}
                    control={control}
                    fieldName={fieldName}
                  />
                );
              }
            })}
            {hasAiOutput && (
              <div className="flex flex-row float-right gap-4">
                <button
                  className="bg-black text-white font-bold py-2 mt-8 px-4 rounded"
                  onClick={handleGenerate}
                >
                  Generate
                </button>
              </div>
            )}
          </form>
          <button
            onClick={handleSave}
            className="bg-black text-white font-bold py-2 mt-8 px-4 rounded float-right mr-4"
          >
            Save Progress
          </button>
        </div>
      )}
      {hasAiOutput ? (
        <div className="w-1/2 bg-loam_1 p-4 flex flex-row px-4 h-screen">
          <>
            <div className="flex flex-col items-center gap-6 mt-4">
              <AiAvatar />
              <EditIcon />
              <button onClick={handleCopy}>
                {isCopied ? <CopyIcon /> : <CopyIcon />}
              </button>
              <button onClick={deleteResponse}>
                <TrashIcon />
              </button>
            </div>
            <p className="ml-6 text-black mt-4 whitespace-pre-line">
              {isDeletePressed
                ? ''
                : messages.filter((m) => m.role === 'assistant').pop()
                    ?.content || aiOutput}
            </p>
          </>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
