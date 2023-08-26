export type Field = {
  defaultValue: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'radio' | 'date' | 'fileUplaod';
  required?: boolean;
  readOnly?: boolean;
  options?: string[];
  conditionals?: Record<string, string>;
  externalConditionals?: Record<string, [string, boolean]>;
  externalFieldPrefill?: string;
};

export type ArrayInput = {
  label?: string;
  type: 'array';
  required?: boolean;
  conditionals?: Record<string, string>;
  externalConditionals?: Record<string, [string, boolean]>;
  fields: ArrayField[];
};

export type ArrayField = {
  fieldName: string;
  defaultValue: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'radio' | 'date' | 'fileUplaod';
  required?: boolean;
  readOnly?: boolean;
  options?: string[];
  externalFieldPrefill?: string;
};

export type SubsectionFieldParams = Record<string, Field>;
