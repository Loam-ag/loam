'use client';

import { ArrayField } from '@/constants/verra/types';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type FieldArrayFormInputProps = {
  index: number;
  register: UseFormRegister<FieldValues>;
  arrayField: ArrayField;
  fieldName: string;
};

export default function FieldArrayFormInput({
  index,
  register,
  arrayField,
  fieldName
}: FieldArrayFormInputProps) {
  let inputField: JSX.Element = <></>;
  const { label, type, required, readOnly, options, externalFieldPrefill } =
    arrayField;
  const registeredFieldName = `${fieldName}.${index}.${arrayField.fieldName}`;
  switch (type) {
    case 'textarea':
      inputField = (
        <textarea
          {...register(registeredFieldName, {
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
          {...register(registeredFieldName, {
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
                {...register(registeredFieldName, {
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
          {...register(registeredFieldName, {
            required: required === false ? false : true
          })}
          className="w-full border rounded p-2 text-black"
          type="date"
          readOnly={readOnly}
        />
      );
      break;
    default:
      inputField = (
        <input
          {...register(registeredFieldName, {
            required: required === false ? false : true
          })}
          className="w-full border rounded p-2 text-black"
          type="text"
          readOnly={readOnly}
        />
      );
  }
  return (
    <div className="mb-4 mr-4">
      <label className="block text-black mb-2 text-[16px]">{label}</label>
      {inputField}
    </div>
  );
}
