'use client';

import { useFieldArray } from 'react-hook-form';

type FieldArrayProps = {
  control: any;
  fieldName: string;
};

export default function FieldArray({ control, fieldName }: FieldArrayProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: fieldName
  });
}
