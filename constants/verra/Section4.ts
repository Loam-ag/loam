import { SubsectionFieldParams } from './types';

export const VERRA_4_01: SubsectionFieldParams = {
  verra_4_01_greenfield: {
    defaultValue: '',
    label:
      'Is the project activity an installation of a Greenfield power plant with or without a BESS?',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_4_01_EGfacility: {
    defaultValue: '',
    label:
      'Provide EGfacility,Y (quantity of ent electricity generation supplied by the project plant/unit to the grid in year y (MHh/yr))',
    type: 'text',
    conditionals: {
      verra_4_01_greenfield: 'Yes'
    }
  },
  verra_4_01_capacity: {
    defaultValue: '',
    label:
      'Is this project a Capacity addition to wind, solar, wave or tidal plant?',
    type: 'radio',
    options: ['Yes', 'No'],
    conditionals: {
      verra_4_01_greenfield: 'No'
    }
  },
  verra_4_01_EGpj: {
    defaultValue: '',
    label:
      'Provide EGPJ_Add,y (Quantity of net electricity generation supplied to the grid in year y by the project plant/unit that has been added under the project activity (MWh/yr)).',
    type: 'text',
    conditionals: {
      verra_4_01_capacity: 'Yes'
    }
  },
  verra_4_01_retrofit: {
    defaultValue: '',
    label:
      'Is this project a retrofit or rehabilitation or replacement of an existing renewable energy power plant?',
    type: 'radio',
    options: ['Yes', 'No'],
    conditionals: {
      verra_4_01_capacity: 'No'
    }
  },
  verra_4_01_EGfacility_y: {
    defaultValue: '',
    label:
      'EGfacility,y (Quantity of net electricity generation supplied by the project plants/units to the grid in year y (MWh/yr)):',
    type: 'text',
    conditionals: {
      verra_4_01_retrofit: 'Yes'
    }
  },
  verra_4_01_EGhistorical: {
    defaultValue: '',
    label:
      'EGhistorical (Annual average historical net electricity generation delivered to the grid by the existing renewable energy power plants/units that was operated at the project site prior to the implementation of the project activity (MWh/yr)):',
    type: 'text',
    conditionals: {
      verra_4_01_retrofit: 'Yes'
    }
  },
  verra_4_01_deviation: {
    defaultValue: '',
    label:
      'σhistorical (Standard deviation of the annual average historical net electricity generation delivered to the grid by the existing renewable energy power plants/units that was operated at the project site prior to the implementation of the project activity (MWh/yr))',
    type: 'text',
    conditionals: {
      verra_4_01_retrofit: 'Yes'
    }
  },
  verra_4_01_DATE: {
    defaultValue: '',
    label:
      'DATEbaselineRetrofit (Point in time when the existing equipment would need to be replaced in the absence of the project activity (date). This only applies to retrofit or replacement projects)',
    type: 'text',
    conditionals: {
      verra_4_01_retrofit: 'Yes'
    }
  },
  verra_4_01_EQPJy: {
    defaultValue: '',
    label: 'Provide EQPJ,y',
    type: 'text',
    conditionals: {
      verra_4_01_retrofit: 'No'
    }
  },
  verra_4_01_EFgrid: {
    defaultValue: '',
    label: 'Have you calculated EFgrid,CM,y already?',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_4_01_EFgrid_CM: {
    defaultValue: '',
    label: 'Provide EFgrid,CM,y',
    type: 'text',
    conditionals: {
      verra_4_01_EFgrid: 'Yes'
    }
  },
  verra_4_01_EFgrid_BM: {
    defaultValue: '',
    label:
      'EFgrid,BM,y (Build margin CO2 emission factor in year y (t CO2/MWh))',
    type: 'text',
    conditionals: {
      verra_4_01_EFgrid: 'No'
    }
  },
  verra_4_01_EFgrid_OM: {
    defaultValue: '',
    label:
      'EFgrid,OM,y (Operating margin CO2 emission factor in year y (t CO2/MWh))',
    type: 'text',
    conditionals: {
      verra_4_01_EFgrid: 'No'
    }
  },
  verra_4_01_windsolar: {
    defaultValue: '',
    label: 'Is your project either a wind or solar generation project?',
    type: 'radio',
    options: ['Yes', 'No']
  }
};

export const VERRA_4_02: SubsectionFieldParams = {
  verra_4_02_activities: {
    defaultValue: '',
    label:
      'Does the project belong to one of the renewable energy activities (sun, wind, geothermal, water, and biomass)?',
    type: 'radio',
    options: ['Yes', 'No']
  },
  verra_4_02_PE_y: {
    defaultValue: '',
    label:
      'Does the project belong to one of the renewable energy activities (sun, wind, geothermal, water, and biomass)?',
    type: 'text',
    conditionals: { verra_4_02_activities: 'No' }
  },
  verra_4_02_PE_gp: {
    defaultValue: '',
    label:
      'Does the project belong to one of the renewable energy activities (sun, wind, geothermal, water, and biomass)?',
    type: 'text',
    conditionals: { verra_4_02_activities: 'No' }
  },
  verra_4_02_PE_hp: {
    defaultValue: '',
    label:
      '𝑃𝐸𝐻𝑃,𝑦  (Project emissions from water reservoirs of hydro power plants in year y (tCO2e/yr))',
    type: 'text',
    conditionals: { verra_4_02_activities: 'No' }
  },
  verra_4_02_PE_BESS: {
    defaultValue: '',
    label:
      '𝑃𝐸𝐵𝐸𝑆𝑆,𝑦 (Project emissions from charging of a BESS using electricity from the grid or from fossil fuel electricity generators (t CO2e/yr))',
    type: 'text',
    conditionals: { verra_4_02_activities: 'No' }
  }
};

export const VERRA_4_03: SubsectionFieldParams = {};

export const VERRA_4_04: SubsectionFieldParams = {
  verra_4_04_estimates: {
    label: 'Estimates for Year',
    type: 'array',
    fields: [
      {
        fieldName: 'verra_4_04_estimates_year',
        defaultValue: '',
        label: 'Year',
        type: 'text'
      },
      {
        fieldName: 'verra_4_04_estimates_baseline',
        defaultValue: '',
        label: 'Estimated baseline emissions or removals (tCO2e)',
        type: 'text'
      },
      {
        fieldName: 'verra_4_04_estimates_project',
        defaultValue: '',
        label: 'Estimated project emissions or removals (tCO2e)',
        type: 'text'
      },
      {
        fieldName: 'verra_4_04_estimates_leakage',
        defaultValue: '',
        label: 'Estimated leakage emissions (tCO2e)',
        type: 'text'
      },
      {
        fieldName: 'verra_4_04_estimates_ghg',
        defaultValue: '',
        label: 'Estimated net GHG emission reductions or removals (tCO2e)',
        type: 'text'
      }
    ]
  }
};

export const SECTION_4_VERRA_FIELDS: Record<string, SubsectionFieldParams> = {
  verra_4_01: VERRA_4_01,
  verra_4_02: VERRA_4_02,
  verra_4_03: VERRA_4_03,
  verra_4_04: VERRA_4_04
};
