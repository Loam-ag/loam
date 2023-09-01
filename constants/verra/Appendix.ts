import { SubsectionFieldParams } from './types';

export const VERRA_appendix: SubsectionFieldParams = {
  verra_appendix_01_comments: {
    defaultValue: '',
    label: 'Additional comments',
    type: 'textarea'
  }
};

export const APPENDIX_VERRA_FIELDS: Record<string, SubsectionFieldParams> = {
  verra_appendix: VERRA_appendix
};
