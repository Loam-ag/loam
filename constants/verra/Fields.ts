export type Field = {
  defaultValue: string | Record<string, string>;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'radio' | 'date' | 'fileUplaod';
  required?: boolean;
  readOnly?: boolean;
  options?: string[];
  conditionals?: Record<string, string>;
  externalConditionals?: Record<string, any>;
  externalConditionalValues?: string[];
  externalBooleans?: boolean[];
  externalFieldPrefill?: string;
};

export type SubsectionFieldParams = Record<string, Field>;

export const VERRA_0 = {};

export const VERRA_1_01: SubsectionFieldParams = {
  verra_1_01_summary: {
    defaultValue: '',
    label:
      'Summary description of the technologies/measures to be implemented by the project.',
    type: 'textarea'
  },
  verra_1_01_location: {
    defaultValue: '',
    label: 'Location of the project.',
    type: 'textarea'
  },
  verra_1_01_emissions: {
    defaultValue: '',
    label:
      'Explanation of how the project is expected to generate GHG emission reductions or removals.',
    type: 'textarea'
  },
  verra_1_01_baseline: {
    defaultValue: '',
    label:
      'Brief description of the scenario existing prior to the implementation of the project.',
    type: 'textarea'
  },
  verra_1_01_estimate: {
    defaultValue: '',
    label:
      'Estimate of annual average and total GHG emission reductions and removals.',
    type: 'textarea'
  }
};

export const VERRA_1_02: SubsectionFieldParams = {
  verra_1_02_scope: {
    defaultValue: '',
    label:
      'Summary description of the technologies/measures to be implemented by the project.',
    type: 'select',
    options: [
      'Energy (renewable/non-renewable)',
      'Agriculture, forestry and other land use (AFOLU)'
    ]
  },
  verra_1_02_afolu: {
    defaultValue: '',
    label: 'Select the AFOLU project category',
    type: 'radio',
    options: [
      'Afforestation, Reforestation and Revegetation (ARR)',
      'Agricultural Land Management (ALM)',
      'Improved Forest Management (IFM)',
      'Reduced Emissions from Deforestation and Forest Degradation (REDD)',
      'Avoided Conversion of Grasslands and Shrublands (ACoGS)',
      'Wetlands Restoration and Conservation (WRC)'
    ],
    conditionals: {
      verra_1_02_scope: 'Agriculture, forestry and other land use (AFOLU)'
    }
  },
  verra_1_02_alm: {
    defaultValue: '',
    label: 'Select activity type',
    type: 'radio',
    options: [
      'Improved Cropland Management (ICM)',
      'Improved Grassland Management (IGM)',
      'Cropland and Grassland Land-use Conversions (CGLC)'
    ],
    conditionals: { verra_1_02_afolu: 'Agricultural Land Management (ALM)' }
  },
  verra_1_02_ifm: {
    defaultValue: '',
    label: 'Select activity type',
    type: 'radio',
    options: [
      'Reduced Impact Logging (RIL)',
      'Logged to Protected Forest (LtPF)',
      'Extended Rotation Age / Cutting Cycle (ERA)',
      'Low-Productive to High-Productive Forest (LtHP)'
    ],
    conditionals: { verra_1_02_afolu: 'Improved Forest Management (IFM)' }
  },
  verra_1_02_redd: {
    defaultValue: '',
    label: 'Select activity type',
    type: 'radio',
    options: [
      'Avoiding Planned Deforestation and/or Degradation (APDD)',
      'Avoiding Unplanned Deforestation and/or Degradation (AUDD)'
    ],
    conditionals: {
      verra_1_02_afolu:
        'Reduced Emissions from Deforestation and Forest Degradation (REDD)'
    }
  },
  verra_1_02_acogs: {
    defaultValue: '',
    label: 'Select activity type',
    type: 'radio',
    options: [
      'Avoiding Planned Conversion (APC)',
      'Avoiding Unplanned Conversion (AUC)'
    ],
    conditionals: {
      verra_1_02_afolu:
        'Avoided Conversion of Grasslands and Shrublands (ACoGS)'
    }
  },
  verra_1_02_wrc: {
    defaultValue: '',
    label: 'Select activity type',
    type: 'radio',
    options: [
      'Restoring Wetland Ecosystems (RWE)',
      'Conservation of Intact Wetlands (CIW)'
    ],
    conditionals: {
      verra_1_02_afolu: 'Wetlands Restoration and Conservation (WRC)'
    }
  },
  verra_1_02_activity: {
    defaultValue: '',
    label: 'Select activity type',
    type: 'select',
    options: ['ACM0002']
  },
  verra_1_02_group: {
    defaultValue: '',
    label: 'Is this a group project',
    type: 'select',
    options: ['Yes', 'No']
  }
};

export const VERRA_FIELDS: Record<string, SubsectionFieldParams> = {
  verra_1_01: VERRA_1_01,
  verra_1_02: VERRA_1_02
};
