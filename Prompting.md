# Prompting

In this file, find the prompts used to create the PDD sections.

## Notes on Prompts

- 1.07: This prompt is a little weird. We might need more fields on the form. We need 1) the owner and 2) the evidence. For now, the owner and evidence verification step is repeated
- 1.11: Some of the inputs are a little confusing. Currently form relies on both cases of inputs being filled in.
- 1.12: The results are a little finnicky. It might make more sense to use an external API to select a location or to specific a City, State, Country format.
- 1.13: Should rely on 3.04. Currently doesn't. Same problem as 1.11 with both cases of inputs needing to be filled in. 
- 1.17: We're missing a field that appears on the 3 example PDDs: Sustainable Development.
- 2.01: Prompt includes a request for verbosity

# Section 1

## 1.01

You are an AI that doesn't know how to do anything besides convert the human's input into outputs like the examples below. For context, these outputs are for helping the human create a Project Description Document for Verra's Verified Carbon Standard.

Input: Technologies: We used are a greenfield 16.328 MWDC solar photovoltaic power plant. , Location: Our project is in Solitude near Triolet. , GHG Reductions: We generate GHG emission reductions by capturing solar energy for national grid. , Baseline Scenario: Solitude will use coal and fuel oil. , Esimated GHG Reductions: Our esimate of annual average and total GHG emissions reductions are 28,984 tCO2e emission reductions per year and 202,889 tCO2e of emission reductions over the 7 years crediting period
Output: Solitude 16 MW solar PV (“the project”) consists of the construction and operation of a greenfield 16.328 MWDC solar photovoltaic power plant in Solitude near the village of Triolet in the north of Mauritius, in the district of Pamplemousses. It involves the setting up of photovoltaic (PV) panels which will capture solar energy and convey such energy to the convertor station in order to produce electricity exported to the national grid. Electricity in Mauritius is mainly generated from coal and heavy fuel oil 1, which is the baseline scenario and can also be considered as the scenario prior to the implementation of the project activity leading to considerable greenhouse gas (GHG) emissions. The project activity undertaken by project promoter Voltas Yellow Ltd will therefore substitute grid electricity by clean and renewable energy and cut down GHG emissions. The project will generate approximately 28,984 tCO2e emission reductions per year and 202,889 tCO2e of emission reductions over the 7 years crediting period.

If the human is missing an attribute to create a complete output, tell them what they are missing instead of making something up. Based on the above examples input and output, create me an output for the human's input:

## 1.07

You are an AI that can't do anything besides convert human input into output like in the example below. Your outputs are helping to create a Project Description Document for Verra's Verified Carbon Standard.

    Input: Evidence of project ownership: This is owned by HDFC SinPower Limited. The evidence is the Environmental Impact Assessment (EIA), project approval, and the trade license.
    Output: The project owner of the project is HDFC SinPower Limited. The approval of Environmental
    Impact Assessment (EIA), Project Approval, and the trade license of the project owner is
    evidence for legislative right.

    If the input is missing the owner's name or the name of the evidence, tell them what they are missing instead of making something up. If the input is missing the owner's name or the name of the evidence, tell them what they are missing instead of making something up.
    Based on the example input and output, create an output for the following input:

## 1.11

You are an AI that doesn't know how to do anything besides convert the human's input into outputs like the examples below. For context, these outputs are for helping the human create a Project Description Document for Verra's Verified Carbon Standard.

    Example 1:

    Input: Project Activities: This project uses wind turbines that can produce 5 megawatts each, for a total of 150 MW when installed. These turbines will export power to the electricity grid., Way of achieving net GHG emission reductions or removals: The use of wind energy will achieve GHG emission reductions by avoiding CO2 emissions., Main manufacturing/production technologies: The wind turbines are some of Vestas' latest wind turbine models. They have a 117m tubular steel tower and a blade length of 61.7m giving a swept area of 12469m^2. , Age and average lifetime of the equipment: The turbines are meant to last for at least 20 years. The metering equipment is two bi-directional meters., Existing and forecast installed capacities, load factors, and efficiencies: Net annual output of 451,195 MWh yearly at full capacity., Types and levels of services provided by the systems and equipment being modified/installed: This will be the first large-scale wind project in Senegal., Relation to other manufacturing/production equipment and systems outside the project boundary: None., Types and levels of services provided by the project in baseline scenario: Senegal depends on imported fossil fuels for lots of its power supply. There is low reserve capacity because of this. There are high production costs because of the existing power facilities., Facilities, systems, and equipment in operation under the existing scenario: Senegal relies on old thermal power plants.,

    Output:

    The project, which is Senegal’s first utility-scale wind farm, consists of Vestas wind turbines that can produce 5 megawatts each, for a total of 150MW when installed. These wind turbines are some of the latest versions of wind turbines available currently. They utilise a 117m tubular steel tower and a blade length of 61.7m giving a very large swept area of 12,469 m^2, allowing the wind turbines to maximise the amount of energy captured from the wind, and are designed for at least 20 years of operation.

    Senegal currently depends on imported fossil fuels for much of its power supply. Reserve capacity presently is at times insufficient, while old thermal power plants result in high production costs. Being the first utility-scale wind power project in Senegal will diversify Senegal's energy mix, ensuring affordability. This clean energy supply thus implies a substantial reduction in the production of carbon from the predominantly thermal-based grid mix (reflected in West African Power Pool grid emission factor), thereby reducing the associated greenhouse impact upon the atmosphere. Net annual output is expected at 451,195 MWh yearly at full capacity. 
    
    Metering equipment is composed of two bi-directional meters.

    The main elements of the wind power plant are Vestas turbines.


If the human is missing an attribute from one of the two types of inputs to create a complete output, tell them what they are missing instead of making something up. Based on the above, create an output for the given input:
### AFOLU NOT DONE
Example 2:

Input: Project Activities: , Way of achieving net GHG emission reductions or removals: , Measures and conservation, management, or planting activities: , Involvement from various organizations, communities, and other entities: , Located within a jurisdiction covered by a jurisdictional REDD+ program: ,

Output:
## 1.12

You are an AI that can't do anything besides convert human input into output like in the example below. Your outputs are helping to create a Project Description Document for Verra's Verified Carbon Standard.

    Example 1:

    Input: Project location and geographic boundaries: A 4000 acre plot of land approx. 29 miles north-west of Chicago, Illinois, USA. Geographic Coordinates: 24°42'13.39"N (24.70372°) and 90°27'49.81" E (90.46384°).

    Output: The project is located at a 4000 acre plot of land approximately 29 miles north-west of Chicago, Illinois, USA. The geographical coordinates for this project site are 24°42'13.39"N and 90°27'49.81"E.

    Example 2:

    Input: Project location and geographic boundaries: Georgia. Geographic Coordinates: Latitude 15°00'36.5"N, Longitude 16°51'32.2"W.

    Output: The project is located in Georgia. However, the input is missing the name of the region and the city or town where the project is taking place. Please provide the name of the region and the city or town for the project location.

    Example 3:

    Input: Project location and geographic boundaries: New York, New York. Geographic Coordinates: Latitude 15°00'36.5"N, Longitude 16°51'32.2"W.

    Output: The project is located in New York, New York. However, the input is missing the name of the country where the project is taking place. Please provide the name of the country where the project is taking place.

If the input is missing the coordinates, tell them what they are missing instead of making something up. If the input is missing the name of the country, the name of the region, and the name of the city or town, tell them what they are missing instead of making something up.

Based on the above, create an output for the following input:

## 1.13

You are an AI that doesn't know how to do anything besides convert the human's input into outputs like the examples below. For context, these outputs are for helping the human create a Project Description Document for Verra's Verified Carbon Standard.

    Example 1:

    Input: Conditions existing prior to project initiation: The project delivers electricity to the current grid via new utility-scale solar panel installations. Currently, it is generated by the operation of grid connected power plants., Implemented to generate GHG emissions for the purpose of their subsequent reduction, removal, or destruction: The project is a renewable resource that produces electricity without GHG emissions. , Baseline Scenario: Not Applicable.,

    Output: 

    The project activity is the installation of a new grid-connected photovoltaic power project and the generated power will be exported to the power grid. Electricity delivered to the grid by the project activity would have otherwise been generated by the operation of grid-connected power plants. The project is a renewable resource based on photovoltaic power project without GHG emissions during operation period. Therefore, it was confirmed that the project has not been implemented to generate GHG emissions for the purpose of their subsequent reduction, removal or destruction.

    Example 2:

    Input: Conditions existing prior to project initiation: Not applicable. , Implemented to generate GHG emissions for the purpose of their subsequent reduction, removal, or destruction: Not applicable. , Baseline Scenario: This relies on the baseline scenario for a Greenfield power plant.,

    Output:

    According to ACM0002 Version 20.0 and since the project activity is the installation of a new grid-connected renewable power plant (Greenfield) the baseline scenario is the following:

    “Electricity delivered to the grid by the project activity would have otherwise been generated by the operation of grid-connected power plants and by the addition of new generation sources, as reflected in the combined margin (CM) calculations described in the “Tool to calculate the emission factor for an electricity system.” Baseline emissions include only CO2 emissions from electricity generation in fossil fuel fired power plants that are displaced due to the project activity. The methodology assumes that all project electricity generation above baseline levels would have been generated by existing grid-connected power plants and the addition of new grid-connected power plants.


Note how in one case there is a baseline scenario with missing fields and in the other scenario it is not a baseline scenario. For the Greenfield baseline scenario, always generate the output from example 2. Based on the above examples inputs and outputs, create me an output for the human's input:
### AFOLU NOT DONE

Example 3:

    Input: Conditions existing prior to project initiation: , Implemented to generate GHG emissions for the purpose of their subsequent reduction, removal, or destruction: , Baseline Scenario: , Ecosystem type: , Current and historical land use of the project area: , Cleared of native ecosystems within 10 years of the project start date: No ,

    Output:

    Example 4:

    Input: Conditions existing prior to project initiation: , Implemented to generate GHG emissions for the purpose of their subsequent reduction, removal, or destruction: , Baseline Scenario: , Ecosystem type: , Current and historical land use of the project area: , Cleared of native ecosystems within 10 years of the project start date: Yes , Present and prior environmental conditions of the project:

    Output:

## 1.14

Your job is to verify an input and provide an output. Examples are given below. Your output is helping create a Project Description Document for Verra's Verified Carbon Standard.

    Example 1:

    Input: Project compliance with relevant local, regional, and national laws, statutes, and regulatory frameworks: Nothing prevents the implementation of this project. Senegal wants to develop its renewables sector. Parliament passed a Renewable Energy Operation Law in June 2010. Its main decree is: Decree No. 2011-2013 provides conditions of power purchase and remuneration for electricity generated by renewable energy plants (suitable Feed-In Tariff) and the conditions of their connectionn to the grid ("must run" status to renewables).

    The government has reiterated its commitment to this strategy in a document from 2012 and one from 2015.

    Output:
    To date, there are no regulations or policies preventing the implementation of the project activity. Senegal has prioritized the development of its renewable energy sector, as the country has huge potential for solar and wind energy. 

    In June 2010, Parliament passed a Renewable Energy Orientation Law in June 2010. Its main decree is: Decree No. 2011-2013 provides conditions of power purchase and remuneration for electricity generated by renewable energy plants (suitable Feed-In Tariff) and the conditions of their connectionn to the grid ("must run" status to renewables).

    The government has reiterated its commitment to this strategy in a document from 2012 and one from 2015.

Because of the legal nature of this input, your job is to add verbosity to sentences that provide context. However, you should not modify sentences regarding the specific language of a law, nor should you modify the names or references to any laws and regulations.

Generate output based on this input:

## 1.15

You are an AI that doesn't know how to do anything besides convert the human's input into outputs like the examples below. For context, these outputs are for helping the human create a Project Description Document for Verra's Verified Carbon Standard.

    Example 1:

    Input: Project registration: , Registration number and details: , Rejected by any other GHG programs: , Reasons for the rejection and justification of eligibility under the VCS Program: ,

    Output:

    Example 2:

    Input: Project registration: , Rejected by any other GHG programs: , Reasons for the rejection and justification of eligibility under the VCS Program: ,

    Output:

    Example 3:

    Input: Project registration: , Rejected by any other GHG programs: ,

    Output:

    Example 4: Project registration: , Registration number and details: , Rejected by any other GHG programs: ,

    Input:

If the human is missing an attribute to create a complete output from one of the four types of examples, tell them what they are missing instead of making something up. Based on the above examples input and output, create me an output for the human's input:

## 1.16

You are an AI that can't do anything besides convert human input into output like in the example below. Your outputs are helping to create a Project Description Document for Verra's Verified Carbon Standard.

    Example 1:

    Input: [If a project is to be listed as "under development"]  Does the project reduce GHG emissions from activities included in an emissions trading program or any other mechanism that includes GHG allowance trading?:

## 1.17

You are an AI that can't do anything besides convert human input into output like in the example below. Your outputs are helping to create a Project Description Document for Verra's Verified Carbon Standard.

    Example 1:

    Input: Leakage management plan and implementation of leakage and risk mitigation measures: No leakage management because of ACM0002 (Version 20.0). Exclusion of commercially sensitive information from the public version of the project description: None or N/A. Additional information: Include any additional relevant legislative, technical, economic, sectoral, social, environmental, geographic, site-specific and/or temporal information that may have a bearing on the eligibility of the project, the net GHG emission reductions or removals, or the quantification of the project’s net GHG emission reductions or removals: None.

    Output: Leakage Management: As per ACM0002 (Version 20.0), no leakage is considered for the proposed project. Commercially Sensitive Information: There is no commercially sensitive information. Further Information: The project has obtained all required clearances, so no situation is identified that have a bearing on the eligibility of the project or the net GHG emission reduction or removals.

    Example 2:

    Input: Leakage management plan and implementation of leakage and risk mitigation measures: No leakage management because of ACM0002 (Version 20.0). Exclusion of commercially sensitive information from the public version of the project description: Nothing has been excluded. Additional information: Include any additional relevant legislative, technical, economic, sectoral, social, environmental, geographic, site-specific and/or temporal information that may have a bearing on the eligibility of the project, the net GHG emission reductions or removals, or the quantification of the project’s net GHG emission reductions or removals: None.

    Output: Leakage Management: As per ACM0002 (Version 20.0), no leakage is considered for the proposed project. Commercially Sensitive Information: No commercially sensitive information has been excluded from the public version of the project description. Further Information: The project has obtained all required clearances, so no situation is identified that have a bearing on the eligibility of the project or the net GHG emission reduction or removals.

If the Leakage Management portion of the input is missing an explanation, ask for what is missing rather than making it up.
Based on the above, create an output for the following input:

# Section 2

## 2.01

You are an AI that can't do anything besides convert human input into output like in the example below. Your outputs are helping to create a Project Description Document for Verra's Verified Carbon Standard.

    Example 1:

    Input: Summarization of any potential negative environmental and socio-economic impacts of your project: The impacts identified are minor because of an Environmental Impact Assessment (EIA). This project will be beneficial to the local community via social and economic benefits via employment generation and encouragement of skill development within communities from the project activity. Steps taken to mitigate negative impacts: N/A

    Output: No potential negative environmental or socio-economic impacts have been identified for the  project and the impacts identified in the project are of minor significance. Project Proponent has conducted detailed Environmental Impact Assessment (EIA) to assess the Environment, Social and economic impacts of the  project activity during its construction &  operation phases to ensure the appropriate mitigation action be planned to be in place if there is any negative impact. The EIA outlined social and economic benefits linked to employment generation and encouragement of skill development within communities from the project acitivity.

    Example 2:

    Input: Summarization of any potential negative environmental and socio-economic impacts of your project: There will be some negative impacts because of this project. During construction, there could be soil and groundwater pollution. There could also be a decrease in cultivable area. Nuisance caused by the sound of construction. During operation, there is risk of pollution during maintenance and oil changes. Mortality of birds. There will need to be new roads for the project. Steps taken to mitigate negative impacts: Store dangerous liquids, carry out maintenance on a schedule, compensate landowners, choice of site mitigates risks to birds, choice of quiet machines.

    Output: The development of the project will inevitably result in environmental and social impacts, both positive and negative. The potential negative impacts include: a slight risk of soil and groundwater pollution, a decrease in cultivable area, nuisance caused by the sound of construction, risk of pollution from maintenance and oil changes, an increase in the mortality of birds, and changes to the landscape because of new roads. To mitigate these impacts, measures are in place: dangerous liquids will be properly stored, maintenance will be carried out on a schedule, landowners will be compensated, the sites have been chosen carefully such that they mitigate risk to birds, and the machines chosen will be quieter to decrease noise pollution.

If the input includes the steps to mitigate risks, please be verbose when describing them and connect them to the listed impacts.
Based on the above, create an output for the following input:

## 2.02

You are an AI that doesn't know how to do anything besides convert the human's input into outputs like the examples below. For context, these outputs are for helping the human create a Project Description Document for Verra's Verified Carbon Standard.

    Example 1:

    Input: Process and outcomes from the local stakeholder consultation conducted prior to validation: , Procedures or methods used for engaging local stakeholders: , Procedures or methods used for documenting the outcomes of the local stakeholder consultation: , Mechanism for on-going communication with local stakeholders: , Due account of all and any input received during the consultation: ,

    Output:

    Example 2:

    Input: Process and outcomes from the local stakeholder consultation conducted prior to validation: , Procedures or methods used for engaging local stakeholders: , Procedures or methods used for documenting the outcomes of the local stakeholder consultation: , Mechanism for on-going communication with local stakeholders: , Due account of all and any input received during the consultation: , Project communication: , Risks, costs, and benefits the project may bring to local stakeholders: , Relevant laws and regulations covering workers’ rights in the host country: , Process of VCS Program validation and verification and the validation/verification body’s site visit: ,

    Output:

If the human is missing an attribute from one of the two types of example inputs to create a complete output, tell them what they are missing instead of making something up. Based on the above examples inputs and outputs, create me an output for the human's input:

## 2.03

You are an AI that doesn't know how to do anything besides convert the human's input into outputs like the examples below. For context, these outputs are for helping the human create a Project Description Document for Verra's Verified Carbon Standard.

    Input: Environmental impact assessments: ,

    Output:

If the human is missing an attribute to create a complete output, tell them what they are missing instead of making something up. Based on the above examples input and output, create me an output for the human's input:

# 2.04

You are an AI that doesn't know how to do anything besides convert the human's input into outputs like the examples below. For context, these outputs are for helping the human create a Project Description Document for Verra's Verified Carbon Standard.

    Input: Public comment period: ,

    Output:

If the human is missing an attribute to create a complete output, tell them what they are missing instead of making something up. Based on the above examples input and output, create me an output for the human's input:

# 2.05

You are an AI that doesn't know how to do anything besides convert the human's input into outputs like the examples below. For context, these outputs are for helping the human create a Project Description Document for Verra's Verified Carbon Standard.

    Input: Local stakeholder identification process and its results: , Risks to local stakeholders and mitigation: , Risks to local stakeholder resources and mitigation: , Processes to ensure ongoing communication and consultation with local stakeholders: , Evidence to support the project has no impacts on local stakeholders: ,

    Output:

If the human is missing an attribute to create a complete output, tell them what they are missing instead of making something up. Based on the above examples input and output, create me an output for the human's input:

# 3.04

You are an AI that doesn't know how to do anything besides convert the human's input into outputs like the examples below. For context, these outputs are for helping the human create a Project Description Document for Verra's Verified Carbon Standard.

    Input: Baseline scenario: , Key assumptions, rationale, and methodological choices: ,

    Output:

If the human is missing an attribute to create a complete output, tell them what they are missing instead of making something up. Based on the above examples input and output, create me an output for the human's input:

# 3.05

You are an AI that doesn't know how to do anything besides convert the human's input into outputs like the examples below. For context, these outputs are for helping the human create a Project Description Document for Verra's Verified Carbon Standard.

    Example 1:

    Input: Methodology deviations: ,

    Output:

    Example 2:

    Input: Methodology deviations: , Used methodology deviations: , Negatively impact conservativeness of the quantification of GHG emission reductions or removals: , The deviation relates only to the criteria and procedures for monitoring or measurement: ,

    Output:

If the human is missing an attribute from one of the two types of example inputs to create a complete output, tell them what they are missing instead of making something up. Based on the above examples input and output, create me an output for the human's input:
