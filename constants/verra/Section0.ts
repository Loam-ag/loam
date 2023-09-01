import { SubsectionFieldParams } from './types';

export const VERRA_0_01: SubsectionFieldParams = {
  verra_0_01_title: {
    defaultValue: '',
    label: 'Name of project',
    type: 'text'
  },
  verra_0_01_version: {
    defaultValue: '',
    label: 'Version number',
    type: 'text'
  },
  verra_0_01_date: {
    defaultValue: '',
    label: 'Date of issuance',
    type: 'date'
  },
  verra_0_01_author: {
    defaultValue: '',
    label: 'Individual or entity that prepared this document',
    type: 'text'
  },
  verra_0_01_address: {
    defaultValue: '',
    label: 'Address',
    type: 'text'
  },
  verra_0_01_phone: {
    defaultValue: '',
    label: 'Phone number',
    type: 'text'
  },
  verra_0_01_email: {
    defaultValue: '',
    label: 'Email',
    type: 'text'
  },
  verra_0_01_website: {
    defaultValue: '',
    label: 'Website',
    type: 'text'
  }
};

export const SECTION_0_VERRA_FIELDS: Record<string, SubsectionFieldParams> = {
  verra_0_01: VERRA_0_01
};
