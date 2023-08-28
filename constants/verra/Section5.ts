import { SubsectionFieldParams } from './types';

export const VERRA_5_01: SubsectionFieldParams = {
  verra_5_01_data: {
    label: 'Data/Parameter',
    type: 'array',
    fields: [
      {
        fieldName: 'verra_5_01_data_parameter',
        defaultValue: '',
        label: 'Data/Parameter',
        type: 'text'
      },
      {
        fieldName: 'verra_5_01_data_unit',
        defaultValue: '',
        label: 'Data unit',
        type: 'text'
      },
      {
        fieldName: 'verra_5_01_data_description',
        defaultValue: '',
        label: 'Description',
        type: 'text'
      },
      {
        fieldName: 'verra_5_01_data_source',
        defaultValue: '',
        label: 'Source of data',
        type: 'textarea'
      },
      {
        fieldName: 'verra_5_01_data_value',
        defaultValue: '',
        label: 'Value applied',
        type: 'text'
      },
      {
        fieldName: 'verra_5_01_data_justification',
        defaultValue: '',
        label:
          'Justification of choice of data or description of measurement methods and procedures applied',
        type: 'textarea'
      },
      {
        fieldName: 'verra_5_01_data_purpose',
        defaultValue: '',
        label: 'Purpose of Data',
        type: 'radio',
        options: [
          'Determination of baseline scenario (AFOLU projects only)',
          'Calculation of baseline emissions',
          'Calculation of project emissions',
          'Calculation of leakage'
        ]
      },
      {
        fieldName: 'verra_5_01_data_comments',
        defaultValue: '',
        label: 'Comments',
        type: 'textarea'
      }
    ]
  }
};

export const VERRA_5_02: SubsectionFieldParams = {
  verra_5_02_data: {
    label: 'Data/Parameter',
    type: 'array',
    fields: [
      {
        fieldName: 'verra_5_02_data_parameter',
        defaultValue: '',
        label: 'Data/Parameter',
        type: 'text'
      },
      {
        fieldName: 'verra_5_02_data_unit',
        defaultValue: '',
        label: 'Data unit',
        type: 'text'
      },
      {
        fieldName: 'verra_5_02_data_description',
        defaultValue: '',
        label: 'Description',
        type: 'text'
      },
      {
        fieldName: 'verra_5_02_data_source',
        defaultValue: '',
        label: 'Source of data',
        type: 'textarea'
      },
      {
        fieldName: 'verra_5_02_data_measurements',
        defaultValue: '',
        label:
          'Description of measurement methods and procedures to be applied',
        type: 'textarea'
      },
      {
        fieldName: 'verra_5_02_data_frequency',
        defaultValue: '',
        label: 'Frequency of monitoring/recording',
        type: 'textarea'
      },
      {
        fieldName: 'verra_5_02_data_value',
        defaultValue: '',
        label: 'Value applied',
        type: 'text'
      },
      {
        fieldName: 'verra_5_02_data_monitoring',
        defaultValue: '',
        label: 'Monitoring equipment',
        type: 'text'
      },
      {
        fieldName: 'verra_5_02_data_qa',
        defaultValue: '',
        label: 'QA/QC procedures to be applied',
        type: 'text'
      },
      {
        fieldName: 'verra_5_02_data_purpose',
        defaultValue: '',
        label: 'Purpose of Data',
        type: 'radio',
        options: [
          'Calculation of baseline emissions',
          'Calculation of project emissions',
          'Calculation of leakage'
        ]
      },
      {
        fieldName: 'verra_5_02_calculation',
        defaultValue: '',
        label: 'Calculation method',
        type: 'textarea'
      },
      {
        fieldName: 'verra_5_02_data_comments',
        defaultValue: '',
        label: 'Comments',
        type: 'textarea'
      }
    ]
  }
};

export const VERRA_5_03: SubsectionFieldParams = {
  verra_5_03_process: {
    defaultValue: '',
    label:
      'Describe the process and schedule for obtaining, recording, compiling and analyzing the monitored data and parameters set out in Section 5.2 (Data and Parameters Monitored) above.',
    type: 'textarea'
  },
  verra_5_03_management: {
    defaultValue: '',
    label:
      'Management Structure: Detail the responsibilities of monitoring team (Team member: responsibility)',
    type: 'textarea'
  },
  verra_5_03_monitoring_program: {
    defaultValue: '',
    label:
      'Monitoring Program and Equipment: Include the monitoring equipment installed that will ensure the implementation of the monitoring for the project',
    type: 'textarea'
  },
  verra_5_03_datacollection: {
    defaultValue: '',
    label: 'Data Collection',
    type: 'textarea'
  },
  verra_5_03_calibration: {
    defaultValue: '',
    label: 'Calibration of Meters & Meteringt',
    type: 'textarea'
  },
  verra_5_03_data_management: {
    defaultValue: '',
    label: 'Data Management System',
    type: 'textarea'
  },
  verra_5_03_monitoring: {
    defaultValue: '',
    label: 'Monitoring Report',
    type: 'textarea'
  },
  verra_5_03_quality: {
    defaultValue: '',
    label: 'Quality Assurance and Quality Control',
    type: 'textarea'
  },
  verra_5_03_training: {
    defaultValue: '',
    label: 'Training',
    type: 'textarea'
  }
};

export const SECTION_4_VERRA_FIELDS: Record<string, SubsectionFieldParams> = {
  verra_5_01: VERRA_5_01,
  verra_5_02: VERRA_5_02,
  verra_5_03: VERRA_5_03
};
