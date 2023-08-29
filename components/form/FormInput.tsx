'use client';

import { Field } from '@/constants/verra/types';
import { useEffect, useState } from 'react';
import {
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
  UseFormResetField,
  UseFormUnregister
} from 'react-hook-form';

type FormInputProps = {
  register: UseFormRegister<FieldValues>;
  unregister: UseFormUnregister<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  watchFields: any;
  resetField: UseFormResetField<FieldValues>;
  field: Field;
  fieldName: string;
};

export default function FormInput({
  register,
  unregister,
  getValues,
  watchFields,
  resetField,
  field,
  fieldName
}: FormInputProps) {
  let inputField: JSX.Element = <></>;
  const { label, type, required, readOnly, options, externalFieldPrefill } =
    field;
  const [isFieldRendered, setIsFieldRendered] = useState(false);
  const compareConditionals = (
    conditionalFields: Record<string, string> | undefined,
    watchedFields: Record<string, string>
  ) => {
    if (conditionalFields) {
      for (const key in conditionalFields) {
        if (conditionalFields[key] !== watchedFields[key]) {
          if (isFieldRendered) {
            resetField(fieldName);
          }
          return false;
        }
      }
    }
    return true;
  };
  useEffect(() => {
    setIsFieldRendered(compareConditionals(field.conditionals, watchFields));
  }, [watchFields]);

  switch (type) {
    case 'textarea':
      inputField = (
        <textarea
          {...register(fieldName, {
            required: required === false ? false : true
          })}
          className="w-full border border-gray-300 p-2 rounded-md resize-none text-black"
          rows={4}
          readOnly={readOnly}
        />
      );
      break;
    case 'select':
      inputField = (
        <select
          {...register(fieldName, {
            required: required === false ? false : true
          })}
          className="w-full border rounded p-2 text-black"
        >
          <option value="">-- Select an option --</option>
          {options?.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      );
      break;
    case 'radio':
      inputField = (
        <>
          {options?.map((option) => (
            <div key={option}>
              <input
                {...register(fieldName, {
                  required: required === false ? false : true
                })}
                className="mr-2"
                type="radio"
                value={option}
                readOnly={readOnly}
              />
              <label
                className="text-black whitespace-pre-line"
                style={{ listStyleType: 'disc', marginLeft: '1em' }}
              >
                {option}
              </label>
            </div>
          ))}
        </>
      );
      break;
    case 'date':
      inputField = (
        <input
          {...register(fieldName, {
            required: required === false ? false : true
          })}
          className="w-full border rounded p-2 text-black"
          type="date"
          readOnly={readOnly}
        />
      );
      break;
    case 'checkbox':
      inputField = (
        <>
          {options?.map((option) => (
            <div key={option}>
              <input
                {...register(fieldName, {
                  required: required === false ? false : true
                })}
                className="mr-2"
                type="checkbox"
                value={option}
                readOnly={readOnly}
              />
              <label
                className="text-black whitespace-pre-line"
                style={{ listStyleType: 'disc', marginLeft: '1em' }}
              >
                {option}
              </label>
            </div>
          ))}
        </>
      );
      break;
    default:
      inputField = (
        <input
          {...register(fieldName, {
            required: required === false ? false : true
          })}
          className="w-full border rounded p-2 text-black"
          type="text"
          readOnly={readOnly}
        />
      );
  }
  return (
    <>
      {isFieldRendered ? (
        <div className="mb-4 mr-4">
          <label className="block text-black mb-2 text-[16px]">{label}</label>
          {inputField}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
