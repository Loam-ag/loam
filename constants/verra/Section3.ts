import { SubsectionFieldParams } from './types';

// export const VERRA_3_01: SubsectionFieldParams = {
//   verra_3_01_title: {
//     defaultValue: '',
//     label:
//       'Provide the title, reference and version number of the methodology or methodologies applied to the project. Include also the title and version number of any tools applied by the project.',
//     type: 'textarea'
//   },
// };

export const VERRA_3_02: SubsectionFieldParams = {
  verra_3_02_clause1: {
    defaultValue: '',
    label:
      'Clase 1: This methodology is applicable to grid-connected renewable energy power generation project activities that:',
    type: 'radio',
    options: [
      'Install a Greenfield power plant',
      'Involve a capacity addition to (an) existing plant(s)',
      'Involve a retrofit of (an) existing operating plants/units',
      'Involve a rehabilitation of (an) existing plant(s)/unit(s)',
      'Involve a replacement of (an) existing plant(s)/unit(s)'
    ]
  },
  verra_3_02_clause2: {
    defaultValue: '',
    label:
      'Clase 1: This methodology is applicable to grid-connected renewable energy power generation project activities that:',
    type: 'radio',
    options: [
      'The project activity may include renewable energy power plant/unit of one of the following types: hydro power plant/unit with or without reservoir, wind power plant/unit, geothermal power plant/unit, solar power plant/unit, wave power plant/unit or tidal power plant/unit.',
      'In the case of capacity additions, retrofits, rehabilitations or replacements (except for wind, solar, wave or tidal power capacity addition projects the existing plant/unit started commercial operation prior to the start of a minimum historical reference period of five years, used for the calculation of baseline emissions and defined in the baseline emission section, and no capacity expansion, retrofit, or rehabilitation of the plant/unit has been undertaken between the start of this minimum historical reference period and the implementation of the project activity.',
      'N/A'
    ]
  },
  verra_3_02_hydro: {
    defaultValue: '',
    label: 'Is this a hydro power plant project?',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_3_02_clause3: {
    defaultValue: '',
    label:
      'Clause 3: In case of hydro power plants, select which one of the following conditions applies:',
    type: 'radio',
    options: ['Yes', 'No'],
    conditionals: { verra_3_02_hydro: 'Yes' }
  },
  verra_3_02_clause4: {
    defaultValue: '',
    label:
      'Demonstrate that water flow from upstream power plants/units spill directly to the downstream reservoir and that collectively constitute to the generation capacity of the integrated hydro power project. Provide an analysis of the water balance covering the water fed to power units, with all possible combinations of reservoirs and without the construction of reservoirs.',
    type: 'radio',
    options: ['Yes', 'No'],
    conditionals: { verra_3_02_hydro: 'Yes' }
  }
  // ADD CHECKBOX
  // verra_3_02_clause5: {
  //   defaultValue: [],
  //   label: 'Clause 5: Do any of the following apply to this project',
  //   type: 'checkbox',
  //   options: [
  //     'Project activities involve switching from fossil fuels to renewable energy sources at the site of the project activity',
  //     'Project activities involve biomass fired power plants/units',
  //     'N/A'
  //   ],
  // }
};

export const VERRA_3_03: SubsectionFieldParams = {
  verra_3_03_CO2_baseline: {
    defaultValue: '',
    label: 'CO2',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_3_03_CO2_baseline_justification: {
    defaultValue: '',
    label: 'Justification/Explanation',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_3_03_CH4_baseline: {
    defaultValue: '',
    label: 'CH4',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_3_03_CH4_baseline_justification: {
    defaultValue: '',
    label: 'Justification/Explanation',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_3_03_N2O_baseline: {
    defaultValue: '',
    label: 'N2O',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_3_03_N2O_baseline_justification: {
    defaultValue: '',
    label: 'Justification/Explanation',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_3_03_other_baseline: {
    defaultValue: '',
    label: 'Other',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_3_03_other_baseline_justification: {
    defaultValue: '',
    label: 'Justification/Explanation',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_3_03_CO2_project: {
    defaultValue: '',
    label: 'CO2',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_3_03_CO2_project_justification: {
    defaultValue: '',
    label: 'Justification/Explanation',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_3_03_CH4_project: {
    defaultValue: '',
    label: 'CH4',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_3_03_CH4_project_justification: {
    defaultValue: '',
    label: 'Justification/Explanation',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_3_03_N2O_project: {
    defaultValue: '',
    label: 'N2O',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_3_03_N2O_project_justification: {
    defaultValue: '',
    label: 'Justification/Explanation',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_3_03_other_project: {
    defaultValue: '',
    label: 'Other',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_3_03_other_project_justification: {
    defaultValue: '',
    label: 'Justification/Explanation',
    type: 'radio',
    options: ['Yes', 'No']
  }
};

export const VERRA_3_04: SubsectionFieldParams = {
  verra_3_04_baseline: {
    defaultValue: '',
    label:
      'Provide the title, reference and version number of the methodology or methodologies applied to the project. Include also the title and version number of any tools applied by the project.',
    type: 'radio',
    options: [
      'Baseline scenario for Greenfield power plant',
      'Baseline scenario for capacity addition to an existing renewable energy power plant or integration of a BESS to an existing solar photovoltaic or wind power plant/unit',
      'Baseline scenario for retrofit or rehabilitation or replacement of an existing power plant',
      'Baseline scenario for retrofit of an existing solar photovoltaic or wind power plant/unit'
    ]
  },
  verra_3_04_assumptions: {
    defaultValue: '',
    label:
      'Explain and justify key assumptions, rationale and methodological choices.',
    type: 'textarea'
  }
};

export const VERRA_3_05: SubsectionFieldParams = {
  verra_3_01_title: {
    defaultValue: '',
    label:
      'Provide the title, reference and version number of the methodology or methodologies applied to the project. Include also the title and version number of any tools applied by the project.',
    type: 'textarea'
  }
};

export const VERRA_3_06: SubsectionFieldParams = {
  verra_3_06_deviations: {
    defaultValue: '',
    label: 'The project did not apply any methodology deviations.',
    type: 'radio',
    options: ['True', 'False']
  },
  verra_3_06_description: {
    defaultValue: '',
    label:
      'Describe and justify any methodology deviations. Include evidence to demonstrate the following.',
    type: 'textarea',
    conditionals: { verra_3_06_deviations: 'False' }
  },
  verra_3_06_quantification: {
    defaultValue: '',
    label:
      'The deviation will not negatively impact the conservativeness of the quantification of GHG emission reductions or removals.',
    type: 'textarea',
    conditionals: { verra_3_06_deviations: 'False' }
  },
  verra_3_06_measurement: {
    defaultValue: '',
    label:
      'The deviation relates only to the criteria and procedures for monitoring or measurement, and does not relate to any other part of the methodology.',
    type: 'textarea',
    conditionals: { verra_3_06_deviations: 'False' }
  }
};

export const SECTION_3_VERRA_FIELDS: Record<string, SubsectionFieldParams> = {
  // verra_3_01: VERRA_3_01,
  verra_3_02: VERRA_3_02,
  verra_3_03: VERRA_3_03,
  verra_3_04: VERRA_3_04,
  verra_3_05: VERRA_3_05,
  verra_3_06: VERRA_3_06
};
