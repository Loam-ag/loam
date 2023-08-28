'use client';

import FieldArrayFormInput from './FieldArrayFormInput';
import { ArrayFields } from '@/constants/verra/types';
import { useEffect, useState } from 'react';
import {
  Control,
  FieldValues,
  useFieldArray,
  UseFormRegister
} from 'react-hook-form';

type FieldArrayProps = {
  register: UseFormRegister<FieldValues>;
  arrayFields: ArrayFields;
  control: Control<FieldValues, any>;
  fieldName: string;
};

export default function FieldArray({
  register,
  arrayFields,
  control,
  fieldName
}: FieldArrayProps) {
  const [defaultValues, setDefaultValues] = useState({});
  const { fields, append, remove } = useFieldArray({
    control,
    name: fieldName
  });

  useEffect(() => {
    const transformedObject = arrayFields.fields.reduce(
      (result: Record<string, string>, item) => {
        result[item.fieldName] = item.defaultValue;
        return result;
      },
      {}
    );
    setDefaultValues(transformedObject);
  }, []);
  return (
    <div className="mb-4 mr-4">
      <>
        {fields.map((field, index) => (
          <div key={index}>
            <label className="block text-black mb-4 text-[16px] font-semibold text-lg underline">
              {arrayFields.label} #{index + 1}
            </label>
            {Object.keys(field).map((arrayFieldName) => {
              const arrayFieldParams =
                arrayFieldName !== 'id'
                  ? arrayFields.fields.find(
                      (item) => item.fieldName === arrayFieldName
                    )
                  : undefined;
              return (
                arrayFieldParams !== undefined && (
                  <FieldArrayFormInput
                    key={arrayFieldName}
                    index={index}
                    register={register}
                    fieldName={fieldName}
                    arrayField={arrayFieldParams}
                  />
                )
              );
            })}
            {index > 0 && (
              <button
                onClick={() => remove(index)}
                className="bg-black text-white font-bold py-2 px-4 rounded mb-4"
              >
                Remove {arrayFields.label} #{index + 1}
              </button>
            )}
          </div>
        ))}
        <button
          onClick={() => append(defaultValues)}
          className="bg-black text-white font-bold py-2 px-4 rounded"
        >
          Add {arrayFields.label}
        </button>
      </>
    </div>
  );
}
