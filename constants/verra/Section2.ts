import { SubsectionFieldParams } from './types';

export const VERRA_2_01: SubsectionFieldParams = {
  verra_2_01_negative: {
    defaultValue: '',
    label:
      'Summarize any potential negative environmental and socio-economic impacts of your project.',
    type: 'textarea'
  },
  verra_2_01_steps: {
    defaultValue: '',
    label: 'Describe the steps taken to mitigate them.',
    type: 'textarea'
  }
};

export const VERRA_2_02: SubsectionFieldParams = {
  verra_2_02_process: {
    defaultValue: '',
    label:
      'Describe the process for, and the outcomes from, the local stakeholder consultation conducted prior to validation.',
    type: 'textarea'
  },
  verra_2_02_engagement: {
    defaultValue: '',
    label:
      'Detail the procedures or methods used for engaging local stakeholders (e.g., dates of announcements or meetings, periods during which input was sought).',
    type: 'textarea'
  },
  verra_2_02_documentation: {
    defaultValue: '',
    label:
      'Describe the procedures or methods used for documenting the outcomes of the local stakeholder consultation.',
    type: 'textarea'
  },
  verra_2_02_communication: {
    defaultValue: '',
    label:
      'Explain the mechanism for on-going communication with local stakeholders.',
    type: 'textarea'
  },
  verra_2_02_updates: {
    defaultValue: '',
    label:
      'Explain how due account of all and any input received during the consultation has been taken. Include details on any updates to the project design or justify why updates are not appropriate.',
    type: 'textarea'
  },
  verra_2_02_monitoring: {
    defaultValue: '',
    label:
      'How has the project communicated or plans to communicate the project design and implementation, including the results of monitoring?',
    type: 'textarea',
    externalConditionals: {
      verra_1_02_scope: [
        'Agriculture, forestry and other land use (AFOLU)',
        true
      ]
    }
  },
  verra_2_02_risks: {
    defaultValue: '',
    label:
      'Explain the risks, costs, and benefits the project may bring to local stakeholders.',
    type: 'textarea',
    externalConditionals: {
      verra_1_02_scope: [
        'Agriculture, forestry and other land use (AFOLU)',
        true
      ]
    }
  },
  verra_2_02_rights: {
    defaultValue: '',
    label:
      'List all relevant laws and regulations covering workers’ rights in the host country.',
    type: 'textarea',
    externalConditionals: {
      verra_1_02_scope: [
        'Agriculture, forestry and other land use (AFOLU)',
        true
      ]
    }
  },
  verra_2_02_validation: {
    defaultValue: '',
    label:
      'Describe the process of VCS Program validation and verification and the validation/verification body’s site visit.',
    type: 'textarea',
    externalConditionals: {
      verra_1_02_scope: [
        'Agriculture, forestry and other land use (AFOLU)',
        true
      ]
    }
  }
};

export const VERRA_2_03: SubsectionFieldParams = {
  verra_2_03_negative: {
    defaultValue: '',
    label:
      'Summarize any potential negative environmental and socio-economic impacts of your project.',
    type: 'textarea'
  }
};

export const VERRA_2_04: SubsectionFieldParams = {
  verra_2_04_comments: {
    defaultValue: '',
    label:
      'Demonstrate how due account of all and any comments received during the public comment period has been taken. Include details on any updates to the project design or demonstrate the insignificance or irrelevance of comments.',
    type: 'textarea'
  }
};

export const VERRA_2_05: SubsectionFieldParams = {
  verra_2_05_identification: {
    defaultValue: '',
    label:
      'Describe the local stakeholder identification process and its results.',
    type: 'textarea'
  },
  verra_2_05_resources: {
    defaultValue: '',
    label:
      'Detail the risks to local stakeholders due to project implementation and how the project will mitigate such risks.',
    type: 'textarea'
  },
  verra_2_05_risks: {
    defaultValue: '',
    label:
      'Outline the risks to local stakeholder resources due to project implementation and how the project will mitigate such risks, including the plans to ensure the project will not impact local stakeholder’s property rights without the free, prior, and informed consent.',
    type: 'textarea'
  },
  verra_2_05_communication: {
    defaultValue: '',
    label:
      'Describe the processes to ensure ongoing communication and consultation with local stakeholders, including a grievance redress procedure to resolve any conflicts which may arise between the project proponent and local stakeholders.',
    type: 'textarea'
  },
  verra_2_05_stakeholders: {
    defaultValue: '',
    label:
      'If the project has no impacts on local stakeholders, provide evidence supporting this claim.',
    type: 'textarea'
  }
};

export const SECTION_2_VERRA_FIELDS: Record<string, SubsectionFieldParams> = {
  verra_2_01: VERRA_2_01,
  verra_2_02: VERRA_2_02,
  verra_2_03: VERRA_2_03,
  verra_2_04: VERRA_2_04,
  verra_2_05: VERRA_2_05
};
