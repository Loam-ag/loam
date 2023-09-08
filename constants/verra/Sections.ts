export type Subsection = {
  id: string;
  number: string;
  name: string;
  hasAiOutput?: boolean;
};

export type Section = {
  id: string;
  number: string;
  name: string;
  subsections: Subsection[];
  hrefValue?: string;
};

export const VERRA_SECTIONS: Section[] = [
  {
    id: 'verra_0',
    number: '0.',
    name: 'Get Started',
    subsections: [],
    hrefValue: '/pdd-gen/verra_0_01'
  },
  {
    id: 'verra_1',
    number: '1.',
    name: 'Project Details',
    subsections: [
      {
        id: 'verra_1_01',
        number: '1.01',
        name: 'Summary Description of the Project',
        hasAiOutput: true
      },
      {
        id: 'verra_1_02',
        number: '1.02',
        name: 'Sectoral Scope and Project Type'
      },
      {
        id: 'verra_1_03',
        number: '1.03',
        name: 'Project Eligibility',
        hasAiOutput: true
      },
      {
        id: 'verra_1_04',
        number: '1.04',
        name: 'Project Design',
        hasAiOutput: true
      },
      {
        id: 'verra_1_05',
        number: '1.05',
        name: 'Project Proponent'
      },
      {
        id: 'verra_1_06',
        number: '1.06',
        name: 'Other Entities Involved in the Project'
      },
      {
        id: 'verra_1_07',
        number: '1.07',
        name: 'Project Ownership',
        hasAiOutput: true
      },
      {
        id: 'verra_1_08',
        number: '1.08',
        name: 'Project Start Date'
      },
      {
        id: 'verra_1_09',
        number: '1.09',
        name: 'Project Credentialing Period'
      },
      {
        id: 'verra_1_10',
        number: '1.10',
        name: 'Project Scale and Estimated GHG Emission Reductions or Removals'
      },
      {
        id: 'verra_1_11',
        number: '1.11',
        name: 'Description of the Project Activity',
        hasAiOutput: true
      },
      {
        id: 'verra_1_12',
        number: '1.12',
        name: 'Project Location',
        hasAiOutput: true
      },
      {
        id: 'verra_1_13',
        number: '1.13',
        name: 'Conditions Prior to Project Initiation',
        hasAiOutput: true
      },
      {
        id: 'verra_1_14',
        number: '1.14',
        name: 'Compliance with Laws, Statutes and Other Regulatory Frameworks',
        hasAiOutput: true
      },
      {
        id: 'verra_1_15',
        number: '1.15',
        name: 'Participation under Other GHG Programs',
        hasAiOutput: true
      },
      {
        id: 'verra_1_16',
        number: '1.16',
        name: 'Other Forms of Credit',
        hasAiOutput: true
      },
      {
        id: 'verra_1_17',
        number: '1.17',
        name: 'Additional Information Relevant to the Project',
        hasAiOutput: true
      }
    ]
  },
  {
    id: 'verra_2',
    number: '2.',
    name: 'Safe Guards',
    subsections: [
      {
        id: 'verra_2_01',
        number: '2.01',
        name: 'No Net Harm',
        hasAiOutput: true
      },
      {
        id: 'verra_2_02',
        number: '2.02',
        name: 'Local Stakeholder Consultation',
        hasAiOutput: true
      },
      {
        id: 'verra_2_03',
        number: '2.03',
        name: 'Environmental Impact',
        hasAiOutput: true
      },
      {
        id: 'verra_2_04',
        number: '2.04',
        name: 'Public Comments',
        hasAiOutput: true
      },
      {
        id: 'verra_2_05',
        number: '2.05',
        name: 'AFOLU-Specific Safeguards',
        hasAiOutput: true
      }
    ]
  },
  {
    id: 'verra_3',
    number: '3.',
    name: 'Application of Methodology',
    subsections: [
      {
        id: 'verra_3_01',
        number: '3.01',
        name: 'Title and Reference of Methodology'
      },
      {
        id: 'verra_3_02',
        number: '3.02',
        name: 'Applicability of Methodology',
        hasAiOutput: true
      },
      {
        id: 'verra_3_03',
        number: '3.03',
        name: 'Project Boundary'
      },
      {
        id: 'verra_3_04',
        number: '3.04',
        name: 'Baseline Scenario',
        hasAiOutput: true
      },
      {
        id: 'verra_3_05',
        number: '3.05',
        name: 'Additionality',
        hasAiOutput: true
      },
      {
        id: 'verra_3_06',
        number: '3.06',
        name: 'Methodology Deviations',
        hasAiOutput: true
      }
    ]
  },
  {
    id: 'verra_4',
    number: '4.',
    name: 'Quantification of GHG Emission Reductions and Removals',
    subsections: [
      {
        id: 'verra_4_01',
        number: '4.01',
        name: 'Baseline Emissions'
      },
      {
        id: 'verra_4_02',
        number: '4.02',
        name: 'Project Emissions'
      },
      {
        id: 'verra_4_03',
        number: '4.03',
        name: 'Leakage'
      },
      {
        id: 'verra_4_04',
        number: '4.04',
        name: 'Net GHG Emission Reductions and Removals'
      }
    ]
  },
  {
    id: 'verra_5',
    number: '5.',
    name: 'Monitoring',
    subsections: [
      {
        id: 'verra_5_01',
        number: '5.01',
        name: 'Data and Parameters Available at Validation'
      },
      {
        id: 'verra_5_02',
        number: '5.02',
        name: 'Data and Parameters Monitored'
      },
      {
        id: 'verra_5_03',
        number: '5.03',
        name: 'Monitoring Plan',
        hasAiOutput: true
      }
    ]
  },
  {
    id: 'verra_appendix',
    number: '',
    name: 'Appendix',
    subsections: [],
    hrefValue: '/pdd-gen/verra_appendix'
  }
];
