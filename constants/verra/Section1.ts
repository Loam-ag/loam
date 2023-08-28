import { SubsectionFieldParams } from './types';

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

export const VERRA_1_03: SubsectionFieldParams = {
  verra_1_03_eligibility: {
    defaultValue: '',
    label:
      'Describe and justify how the project is eligible under the scope of the VCS Program.',
    type: 'textarea'
  }
};

export const VERRA_1_04: SubsectionFieldParams = {
  verra_1_04_development: {
    defaultValue: '',
    label: 'Are you looking to list the project as “under development”?',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_1_04_devlocations: {
    defaultValue: '',
    label: 'Select which of the following applies to this project.',
    type: 'radio',
    options: [
      'The project includes a single location or installation only',
      'The project includes multiple locations or project activity instances, but is not being developed as a grouped project',
      'The project is a grouped project'
    ],
    conditionals: {
      verra_1_04_development: 'Yes'
    }
  },
  verra_1_04_nondevlocations: {
    defaultValue: '',
    label: 'Select which of the following applies to this project.',
    type: 'radio',
    options: [
      'Designed to include a single location or installation only',
      'Designed to include multiple locations or project activity instances'
    ],
    conditionals: {
      verra_1_04_development: 'No'
    }
  },
  verra_1_04_grouped: {
    defaultValue: '',
    label:
      'For grouped projects, provide additional information relevant to the design of the grouped project',
    type: 'textarea',
    externalConditionals: {
      verra_1_02_group: ['Yes', true]
    }
  }
};

export const VERRA_1_05: SubsectionFieldParams = {
  verra_1_05_contact: {
    label: 'Project Proponent',
    type: 'array',
    fields: [
      {
        fieldName: 'verra_1_05_contact_orgname',
        defaultValue: '',
        label: 'Organization name',
        type: 'text'
      },
      {
        fieldName: 'verra_1_05_contact_person',
        defaultValue: '',
        label: 'Contact person',
        type: 'text'
      },
      {
        fieldName: 'verra_1_05_contact_title',
        defaultValue: '',
        label: 'Title',
        type: 'text'
      },
      {
        fieldName: 'verra_1_05_contact_address',
        defaultValue: '',
        label: 'Address',
        type: 'text'
      },
      {
        fieldName: 'verra_1_05_contact_phone',
        defaultValue: '',
        label: 'Telephone',
        type: 'text'
      },
      {
        fieldName: 'verra_1_05_contact_email',
        defaultValue: '',
        label: 'Email',
        type: 'text'
      }
    ]
  }
};

export const VERRA_1_06: SubsectionFieldParams = {
  verra_1_06_entity: {
    label: 'Project Proponent',
    type: 'array',
    fields: [
      {
        fieldName: 'verra_1_06_entity_orgname',
        defaultValue: '',
        label: 'Organization name',
        type: 'text'
      },
      {
        fieldName: 'verra_1_06_entity_role',
        defaultValue: '',
        label: 'Role in the project',
        type: 'text'
      },
      {
        fieldName: 'verra_1_06_entity_contact',
        defaultValue: '',
        label: 'Contact person',
        type: 'text'
      },
      {
        fieldName: 'verra_1_06_entity_title',
        defaultValue: '',
        label: 'Title',
        type: 'text'
      },
      {
        fieldName: 'verra_1_06_entity_address',
        defaultValue: '',
        label: 'Address',
        type: 'text'
      },
      {
        fieldName: 'verra_1_06_entity_telephone',
        defaultValue: '',
        label: 'Telephone',
        type: 'text'
      },
      {
        fieldName: 'verra_1_06_entity_email',
        defaultValue: '',
        label: 'Email',
        type: 'text'
      }
    ]
  }
};

export const VERRA_1_07: SubsectionFieldParams = {
  verra_1_07_ownership: {
    defaultValue: '',
    label:
      'Provide evidence of project ownership, in accordance with the VCS Program specifications on project ownership.',
    type: 'textarea'
  }
};

export const VERRA_1_08: SubsectionFieldParams = {
  verra_1_08_start: {
    defaultValue: '',
    label: 'Start Date',
    type: 'date'
  },
  verra_1_08_reasoning: {
    defaultValue: '',
    label: 'Reasoning',
    type: 'textarea'
  }
};

export const VERRA_1_09: SubsectionFieldParams = {
  verra_1_09_length: {
    defaultValue: '',
    label: 'Project length in years',
    type: 'text'
  },
  verra_1_09_start: {
    defaultValue: '',
    label: 'Project start date',
    type: 'date',
    externalFieldPrefill: 'verra_1_08_start'
  },
  verra_1_09_end: {
    defaultValue: '',
    label: 'Project end date',
    type: 'date'
  }
};

export const VERRA_1_10: SubsectionFieldParams = {
  verra_1_10_emissions: {
    defaultValue: '',
    label:
      'The estimated annual GHG emission reductions/removals of the project are:',
    type: 'radio',
    options: [
      '<20,000 tCO2e/year',
      '20,000 – 100,000 tCO2e/year',
      '100,001 – 1,000,000 tCO2e/year',
      '>1,000,000 tCO2e/year'
    ],
    externalConditionals: {
      verra_1_04_development: ['Yes', true]
    }
  },
  verra_1_10_scale: {
    defaultValue: '',
    label:
      'The estimated annual GHG emission reductions/removals of the project are:',
    type: 'radio',
    options: [
      'Project (Less than or equal to 300,000 tonnes of CO2e per year)',
      'Large Project (Greater than 300,000 tonnes of CO2e per year)'
    ],
    externalConditionals: {
      verra_1_04_development: ['Yes', true]
    }
  },
  verra_1_10_reductions: {
    label: 'Project Proponent',
    type: 'array',
    fields: [
      {
        fieldName: 'verra_1_10_reductions_year',
        defaultValue: '',
        label: 'Year',
        type: 'text'
      },
      {
        fieldName: 'verra_1_10_reductions_estimate',
        defaultValue: '',
        label: 'Estimated GHG emission reductions or removals (tCO2e)',
        type: 'text'
      }
    ]
  }
};

export const VERRA_1_11: SubsectionFieldParams = {
  verra_1_11_activity: {
    defaultValue: '',
    label:
      'Describe the project activity or activities, including the technologies or measures employed.',
    type: 'textarea'
  },
  verra_1_11_emissions: {
    defaultValue: '',
    label:
      'Explain how these activities will achieve net GHG emission reductions or removals.',
    type: 'textarea'
  },
  verra_1_11_technologies: {
    defaultValue: '',
    label:
      'List and describe the main manufacturing/production technologies, systems, and equipment involved',
    type: 'textarea',
    externalConditionals: {
      verra_1_02_scope: [
        'Agriculture, forestry and other land use (AFOLU)',
        false
      ]
    }
  },
  verra_1_11_lifetime: {
    defaultValue: '',
    label:
      'Provide information about the age and average lifetime of the equipment.',
    type: 'textarea',
    externalConditionals: {
      verra_1_02_scope: [
        'Agriculture, forestry and other land use (AFOLU)',
        false
      ]
    }
  },
  verra_1_11_capacities: {
    defaultValue: '',
    label:
      'What is the existing and forecast installed capacities, load factors, and efficiencies?',
    type: 'textarea',
    externalConditionals: {
      verra_1_02_scope: [
        'Agriculture, forestry and other land use (AFOLU)',
        false
      ]
    }
  },
  verra_1_11_services: {
    defaultValue: '',
    label:
      'Describe the types and levels of services provided by the systems and equipment being modified/installed.',
    type: 'textarea',
    externalConditionals: {
      verra_1_02_scope: [
        'Agriculture, forestry and other land use (AFOLU)',
        false
      ]
    }
  },
  verra_1_11_equipment: {
    defaultValue: '',
    label:
      'How does this relate to other manufacturing/production equipment and systems outside the project boundary?',
    type: 'textarea',
    externalConditionals: {
      verra_1_02_scope: [
        'Agriculture, forestry and other land use (AFOLU)',
        false
      ]
    }
  },
  verra_1_11_baseline: {
    defaultValue: '',
    label:
      'How would the same types and levels of services provided by the project have been provided in the baseline scenario?',
    type: 'textarea',
    externalConditionals: {
      verra_1_02_scope: [
        'Agriculture, forestry and other land use (AFOLU)',
        false
      ]
    }
  },
  verra_1_11_facilities: {
    defaultValue: '',
    label:
      'Provide a list of facilities, systems, and equipment in operation under the existing scenario',
    type: 'textarea',
    externalConditionals: {
      verra_1_02_scope: [
        'Agriculture, forestry and other land use (AFOLU)',
        false
      ]
    }
  },
  verra_1_11_measures: {
    defaultValue: '',
    label:
      'List all measures and describe any conservation, management, or planting activities.',
    type: 'textarea',
    externalConditionals: {
      verra_1_02_scope: [
        'Agriculture, forestry and other land use (AFOLU)',
        true
      ]
    }
  },
  verra_1_11_orgs: {
    defaultValue: '',
    label:
      'Describe how various organizations, communities, and other entities are involved.',
    type: 'textarea',
    externalConditionals: {
      verra_1_02_scope: [
        'Agriculture, forestry and other land use (AFOLU)',
        true
      ]
    }
  },
  verra_1_11_redd: {
    defaultValue: '',
    label:
      'Is the project located within a jurisdiction covered by a jurisdictional REDD+ program?',
    type: 'radio',
    options: ['Yes', 'No'],
    externalConditionals: {
      verra_1_02_scope: [
        'Agriculture, forestry and other land use (AFOLU)',
        true
      ]
    }
  }
};

// Add OR vs AND conditionals for external
export const VERRA_1_12: SubsectionFieldParams = {
  verra_1_12_location: {
    defaultValue: '',
    label: 'Provide the project location and geographic boundaries.',
    type: 'text'
  },
  verra_1_12_coordinates: {
    defaultValue: '',
    label: 'Provide a set of geodetic coordinates.',
    type: 'text',
    externalConditionals: {
      verra_1_02_scope: [
        'Agriculture, forestry and other land use (AFOLU)',
        true
      ],
      verra_1_02_group: ['Yes', true]
    }
  }
};

export const VERRA_1_13: SubsectionFieldParams = {
  verra_1_13_conditions: {
    defaultValue: '',
    label: 'Describe the conditions existing prior to project initiation',
    type: 'textarea'
  },
  verra_1_13_emissions: {
    defaultValue: '',
    label:
      'Has the project been implemented to generate GHG emissions for the purpose of their subsequent reduction, removal, or destruction?',
    type: 'textarea'
  },
  verra_1_13_baseline: {
    defaultValue: '',
    label:
      'If the baseline scenario is the same as the conditions prior to project initiation, state that this is the case and refer to Section 3.4 (Baseline Scenario).',
    type: 'textarea'
  },
  verra_1_13_ecosystem: {
    defaultValue: '',
    label: 'Describe the ecosystem type (brief 1-2 sentences).',
    type: 'textarea',
    externalConditionals: {
      verra_1_02_scope: [
        'Agriculture, forestry and other land use (AFOLU)',
        true
      ]
    }
  },
  verra_1_13_land: {
    defaultValue: '',
    label:
      'Describe the current and historical land use of the project area (brief 2-4 sentences).',
    type: 'textarea'
  },
  verra_1_13_cleared: {
    defaultValue: '',
    label:
      'Has the land been cleared of native ecosystems within 10 years of the project start date?',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_1_13_explanation: {
    defaultValue: '',
    label:
      'Explain. Include the present and prior environmental conditions of the project area, including information on the climate, hydrology, topography, relevant historic conditions, soils, vegetation, and ecosystems',
    type: 'textarea',
    conditionals: {
      verra_1_13_cleared: 'Yes'
    }
  }
};

export const VERRA_1_14: SubsectionFieldParams = {
  verra_1_14_compliance: {
    defaultValue: '',
    label:
      'List and describe how the project complies with all relevant local, regional, and national laws, statutes, and regulatory frameworks',
    type: 'textarea'
  }
};

export const VERRA_1_15: SubsectionFieldParams = {
  verra_1_15_registered: {
    defaultValue: '',
    label:
      'Has the project been registered, or is seeking registration under any other GHG programs?',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_1_15_details: {
    defaultValue: '',
    label: 'Provide the registration number and details',
    type: 'textarea',
    conditionals: {
      verra_1_15_registered: 'Yes'
    }
  },
  verra_1_15_ghg: {
    defaultValue: '',
    label: 'Has the project been rejected by any other GHG programs?',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_1_15_vcs: {
    defaultValue: '',
    label:
      'Provide the relevant information, including the reason(s) for the rejection and justification of eligibility under the VCS Program.',
    type: 'textarea',
    conditionals: {
      verra_1_15_ghg: 'Yes'
    }
  }
};

export const VERRA_1_16: SubsectionFieldParams = {
  verra_1_16_emissions: {
    defaultValue: '',
    label:
      'Does the project reduce GHG emissions from activities included in an emissions trading program or any other mechanism that includes GHG allowance trading?',
    type: 'radio',
    options: ['Yes', 'No'],
    externalConditionals: {
      verra_1_04_development: ['Yes', true]
    }
  },
  verra_1_16_name: {
    defaultValue: '',
    label:
      'Provide the name of the emissions trading program or other mechanism that allows GHG allowance trading.',
    type: 'textarea',
    conditionals: {
      verra_1_16_emissions: 'Yes'
    }
  },
  verra_1_16_reduction: {
    defaultValue: '',
    label:
      'Indicate whether the project reduces GHG emissions from activities that are included in an emissions trading program or any other mechanism that includes GHG allowance trading, and include details about any such programs or mechanisms.',
    type: 'textarea',
    conditionals: {
      verra_1_16_emissions: 'No'
    }
  },
  verra_1_16_credit: {
    defaultValue: '',
    label:
      'Has the project sought or received another form of GHG-related credit, including renewable energy certificates?',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_1_16_altcredit: {
    defaultValue: '',
    label:
      'Provide the name of the other program(s) under which the project has sought or received another form of GHG-related credit.',
    type: 'radio',
    options: ['Yes', 'No'],
    conditionals: {
      verra_1_16_credit: 'Yes'
    }
  },
  verra_1_16_eligibility: {
    defaultValue: '',
    label:
      'List all other programs under which the project is eligible to participate (to create another form of GHG-related environmental credit).',
    type: 'textarea'
  },
  verra_1_16_statement: {
    defaultValue: '',
    label:
      'Have the owner(s) or retailer(s) of the impacted goods and services posted a public statement saying, “VCUs may be issued for the greenhouse gas emission reductions and removals associated with [organization name(s)] [name of good or service]” since the project’s start date?',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_1_16_statement_explanation: {
    defaultValue: '',
    label: 'Explain your response.',
    type: 'textarea'
  },
  verra_1_16_proponent: {
    defaultValue: '',
    label:
      'Has the project proponent posted a public statement saying, “VCUs may be issued for the greenhouse gas emission reductions and removals associated with [name of good or service][describe the region or location, including organization name(s), where practicable]”?',
    type: 'textarea'
  },
  verra_1_16_proponent_explanation: {
    defaultValue: '',
    label: 'Explain your response.',
    type: 'textarea'
  },
  verra_1_16_notified: {
    defaultValue: '',
    label:
      'Have the producer(s) or retailer(s) of the impacted good or service been notified of the project and the potential risk of Scope 3 emissions double claiming via email?',
    type: 'textarea'
  },
  verra_1_16_notified_explanation: {
    defaultValue: '',
    label: 'Explain your response.',
    type: 'textarea'
  },
  verra_1_16_activities: {
    defaultValue: '',
    label:
      'Provide a summary description of project activities that result in sustainable development (SD) contributions.',
    type: 'textarea'
  },
  verra_1_16_contributions: {
    defaultValue: '',
    label:
      'Explain how project activities will result in expected SD contributions.',
    type: 'textarea'
  },
  verra_1_16_priorities: {
    defaultValue: '',
    label:
      'Describe how the project contributes to achieving any nationally stated sustainable development priorities, including any provisions for monitoring and reporting same.',
    type: 'textarea'
  }
};

export const VERRA_1_17: SubsectionFieldParams = {
  verra_1_17_leakage: {
    defaultValue: '',
    label:
      'Leakage Management: Describe the leakage management plan and implementation of leakage and risk mitigation measures',
    type: 'textarea'
  },
  verra_1_17_sensitive: {
    defaultValue: '',
    label:
      'Commercially Sensitive Information: Indicate whether any commercially sensitive information has been excluded from the public version of the project description and briefly describe the items to which such information pertains',
    type: 'textarea'
  },
  verra_1_17_further: {
    defaultValue: '',
    label: '',
    type: 'textarea'
  }
};

export const SECTION_1_VERRA_FIELDS: Record<string, SubsectionFieldParams> = {
  verra_1_01: VERRA_1_01,
  verra_1_02: VERRA_1_02,
  verra_1_03: VERRA_1_03,
  verra_1_04: VERRA_1_04,
  verra_1_05: VERRA_1_05,
  verra_1_06: VERRA_1_06,
  verra_1_07: VERRA_1_07,
  verra_1_08: VERRA_1_08,
  verra_1_09: VERRA_1_09,
  verra_1_10: VERRA_1_10,
  verra_1_11: VERRA_1_11,
  verra_1_12: VERRA_1_12,
  verra_1_13: VERRA_1_13,
  verra_1_14: VERRA_1_14,
  verra_1_15: VERRA_1_15,
  verra_1_16: VERRA_1_16,
  verra_1_17: VERRA_1_17
};
