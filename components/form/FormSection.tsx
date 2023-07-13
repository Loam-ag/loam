'use client';

import { ChangeEvent, useEffect, useState } from 'react';

interface Option {
  name: string;
}

export interface FormFieldProps {
  fields: any;
  setFields: any;
  fieldName: string;
  fieldId: string;
  type: 'text' | 'textarea' | 'select' | 'radio';
  responseValue: string;
  options?: Option[];
  conditional: number | null;
  conditionalValue: string | null;
  shouldRender: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  fields,
  setFields,
  fieldName,
  fieldId,
  type,
  responseValue,
  options,
  conditional,
  conditionalValue,
  shouldRender
}) => {
  const [isFieldRendered, setIsFieldRendered] = useState(false);
  let inputField: JSX.Element = <></>;
  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const updatedArray = fields.map((obj: any) => {
      if (obj.field_id === fieldId) {
        return { ...obj, response_value: e.target.value }; // Update the name property of the matching object
      }
      return obj; // Return the original object for other objects in the array
    });

    setFields(updatedArray);
  };
  useEffect(() => {
    const shouldRenderField =
      conditional !== null
        ? fields[conditional].response_value === conditionalValue
        : true;
    setIsFieldRendered(shouldRender && shouldRenderField);

    // If field shouldn't be rendered, clear the user's input value for the now-hidden field
    if (!shouldRenderField && responseValue !== '') {
      const updatedArray = fields.map((obj: any) => {
        if (obj.field_id === fieldId) {
          return { ...obj, response_value: '' };
        }
        return obj;
      });

      setFields(updatedArray);
    }
  }, [fields]);

  switch (type) {
    case 'textarea':
      inputField = (
        <textarea
          className="w-full border border-gray-300 p-2 rounded-md resize-none text-black"
          name={fieldId}
          id={fieldId}
          rows={2}
          onChange={onChange}
          required={true}
          value={responseValue}
        />
      );
      break;
    case 'select':
      inputField = (
        <select
          className="w-full border rounded p-2 text-black"
          name={fieldId}
          id={fieldId}
          onChange={onChange}
          required={true}
          value={responseValue}
        >
          <option value="">-- Select an option --</option>
          {options?.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      );
      break;
    case 'radio':
      inputField = (
        <>
          {options?.map((option) => (
            <div key={option.name}>
              <input
                className="mr-2"
                type="radio"
                name={fieldId}
                value={option.name}
                id={fieldId}
                onChange={onChange}
                required={true}
                checked={responseValue === option.name}
              />
              <label className="text-black">{option.name}</label>
            </div>
          ))}
        </>
      );
      break;
    default:
      inputField = (
        <input
          className="w-full border rounded p-2 text-black"
          type="text"
          name={fieldId}
          id={fieldId}
          onChange={onChange}
          required={true}
          value={responseValue}
        />
      );
  }
  return (
    <>
      {isFieldRendered ? (
        <div className="mb-4 mr-4">
          <label className="block text-black mb-2 text-[16px]">
            {fieldName}
          </label>
          {inputField}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default FormField;
