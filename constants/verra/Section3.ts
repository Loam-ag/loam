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
  verra_3_05_step0: {
    defaultValue: '',
    label: 'Step 0: Is the proposed project activity the first of its kind?',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_3_05_step1a: {
    defaultValue: '',
    label: 'Sub-step 1a: Define alternatives to the project activity',
    type: 'textarea',
    conditionals: {
      verra_3_05_step0: 'No'
    }
  },
  verra_3_05_step1b: {
    defaultValue: '',
    label:
      'Sub-step 1b: Identify realistic and credible alternative scenario(s) to the project activity that are in compliance with mandatory legislation and regulations taking into account the enforcement in the region or country and EB decisions on national and/or sectoral policies and regulations',
    type: 'textarea',
    conditionals: {
      verra_3_05_step0: 'No'
    }
  },
  verra_3_05_step2a: {
    defaultValue: '',
    label: 'Sub-step 2a: Determine appropriate analysis method',
    type: 'radio',
    options: [
      'Simple cost analysis',
      'Investment comparison analysis',
      'Benchmark analysis'
    ],
    conditionals: {
      verra_3_05_step0: 'No'
    }
  },
  verra_3_05_cdm: {
    defaultValue: '',
    label:
      'Sub-step 2b: Document the costs associated with the CDM project activity and the alternatives identified in Step 1 and demonstrate that there is at least one alternative which is less costly than the project activity',
    type: 'textarea',
    conditionals: {
      verra_3_05_step0: 'No',
      verra_3_05_step2a: 'Simple cost analysis'
    }
  },
  verra_3_05_indicator: {
    defaultValue: '',
    label:
      'Sub-step 2b: Identify the financial indicator, such as IRR, NPV, cost benefit ratio, or unit cost of service (e.g. levelized cost of electricity  production in $/kWh or levelized cost of delivered heat in $/GJ) most suitable for the project type and decision-making context',
    type: 'textarea',
    conditionals: {
      verra_3_05_step0: 'No',
      verra_3_05_step2a: 'Investment comparison analysis'
    }
  },
  verra_3_05_benchmark: {
    defaultValue: '',
    label:
      'Sub-step 2b: Identify the financial/economic indicator, such as IRR, most suitable for the project type and decision context.',
    type: 'textarea',
    conditionals: {
      verra_3_05_step0: 'No',
      verra_3_05_step2a: 'Benchmark analysis'
    }
  },
  verra_3_05_step2c: {
    defaultValue: '',
    label:
      'Sub-step 2c: Calculation and comparison of financial indicators (only applicable to Options II and III): Calculate the suitable financial indicator for the proposed CDM project activity and, in the case of Option II above, for the other alternatives. Include all relevant costs (including, for example, the investment cost, the operations and maintenance costs), and revenues (excluding CER revenues, but possibly including inter alia subsidies/fiscal incentives, ODA, etc., where applicable), and, as appropriate, non-market cost and benefits in the case of public investors if this is standard practice for the selection of public investments in the host country.',
    type: 'textarea',
    conditionals: {
      verra_3_05_step0: 'No'
    }
  },
  verra_3_05_step2d: {
    defaultValue: '',
    label:
      'Sub-step 2d: Sensitivity analysis (only applicable to Options II and III): Include a sensitivity analysis that shows whether the conclusion regarding the financial/economic attractiveness is robust to reasonable variations in the critical assumptions.',
    type: 'textarea',
    conditionals: {
      verra_3_05_step0: 'No'
    }
  },
  verra_3_05_step3a: {
    defaultValue: '',
    label:
      'Sub-step 3a: Identify barriers that would prevent the implementation of the proposed CDM project activity.',
    type: 'textarea',
    conditionals: {
      verra_3_05_step0: 'No'
    }
  },
  verra_3_05_step3b: {
    defaultValue: '',
    label:
      'Sub-step 3b: Show that the identified barriers would not prevent the implementation of at least one of the alternatives (except the proposed project activity).',
    type: 'textarea',
    conditionals: {
      verra_3_05_step0: 'No'
    }
  },
  verra_3_05_step4a: {
    defaultValue: '',
    label:
      'Sub-step 4a:The proposed CDM project activity(ies) applies measure(s) that are listed in the definitions section above.',
    type: 'textarea',
    conditionals: {
      verra_3_05_step0: 'No'
    }
  },
  verra_3_05_step4b: {
    defaultValue: '',
    label:
      'Sub-step 4b: The proposed CDM project activity(ies) does not apply any of the measures that are listed in the definitions section above.',
    type: 'textarea',
    conditionals: {
      verra_3_05_step0: 'No'
    }
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
