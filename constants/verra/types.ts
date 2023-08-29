export type Field = {
  defaultValue: string | string[];
  label: string;
  type:
    | 'text'
    | 'textarea'
    | 'select'
    | 'radio'
    | 'date'
    | 'fileUplaod'
    | 'checkbox';
  required?: boolean;
  readOnly?: boolean;
  options?: string[];
  conditionals?: Record<string, string>;
  externalConditionals?: Record<string, [string, boolean]>;
  externalFieldPrefill?: string;
};

export type ArrayFields = {
  type: 'array';
  label?: string;
  conditionals?: Record<string, string>;
  externalConditionals?: Record<string, [string, boolean]>;
  fields: ArrayField[];
};

export type ArrayField = {
  defaultValue: string | string[];
  fieldName: string;
  label: string;
  type:
    | 'text'
    | 'textarea'
    | 'select'
    | 'radio'
    | 'date'
    | 'fileUplaod'
    | 'checkbox';
  required?: boolean;
  readOnly?: boolean;
  options?: string[];
  externalFieldPrefill?: string;
};

export type SubsectionFieldParams = Record<string, Field | ArrayFields>;
