'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Docxtemplater from 'docxtemplater';
import { saveAs } from 'file-saver';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';

export default function ExportButton() {
  const supabase = createClientComponentClient();
  const loadFile = (
    path: string,
    callback: (err: Error, data: string) => void
  ) => {
    PizZipUtils.getBinaryContent(path, callback);
  };
  const generateDocument = async () => {
    const {
      data: { session }
    } = await supabase.auth.getSession();
    const { data: aiData, error: aiDataError } = await supabase
      .from('form_ai_outputs')
      .select(
        `
          subsection_id, output_value
        `
      )
      .eq('user_id', session?.user.id);
    const { data: inputData, error: inputDataError } = await supabase
      .from('form_subsection_responses')
      .select(
        `
          responses, subsection_id
        `
      )
      .eq('user_id', session?.user.id);
    //
    const calculationsArray = [
      '4cfd89e7-5134-45d1-84d0-4c4f05f2d865',
      '2b9d77d5-0e78-43cd-b8e1-7c71f2af5c89'
    ];
    const calcObject = {
      '4cfd89e7-5134-45d1-84d0-4c4f05f2d865': '',
      '2b9d77d5-0e78-43cd-b8e1-7c71f2af5c89': ''
    };

    const subsectionIdsArray = [
      'd32fc445-4dc7-4361-9e63-126f70f89748',
      '3e1e7108-8a35-4a3d-9f5a-8c706baedf91',
      '42e2514a-6b18-4a03-8e43-d4d8ed5b8e35',
      '3b05c693-cf23-4f22-8645-2e4d968c6ebd',
      '5722e456-735d-4e4e-bd06-442f736a9fd4'
    ];

    const { matchingArray, calcArray, remainingArray } = inputData?.reduce(
      (acc: any, item) => {
        if (subsectionIdsArray.includes(item.subsection_id)) {
          acc.matchingArray.push(item);
        } else if (calculationsArray.includes(item.subsection_id)) {
          acc.calcArray.push(item);
        } else {
          acc.remainingArray.push(item);
        }
        return acc;
      },
      { matchingArray: [], calcArray: [], remainingArray: [] }
    );
    for (const i of calcArray) {
      if (i.subsection_id === '2b9d77d5-0e78-43cd-b8e1-7c71f2af5c89') {
        let sum4_2 = 0;
        for (const response of i.responses) {
          if (response.field_id === '1e5d8b14-c1ef-462f-a9f4-cbea9342af9a') {
            if (response.response_value === 'Yes') {
              calcObject['2b9d77d5-0e78-43cd-b8e1-7c71f2af5c89'] = '0';
              break;
            }
          } else {
            const convertedNumber = parseFloat(response.response_value);
            if (isNaN(convertedNumber)) {
              calcObject['2b9d77d5-0e78-43cd-b8e1-7c71f2af5c89'] =
                'ERROR INPUT(S) NOT A NUMBER';
              break;
            } else {
              sum4_2 += convertedNumber;
            }
          }
        }
        calcObject['2b9d77d5-0e78-43cd-b8e1-7c71f2af5c89'] = sum4_2.toString();
      } else if (i.subsection_id === '4cfd89e7-5134-45d1-84d0-4c4f05f2d865') {
        console.log(i);
        let EG_PJY = 0;
        let EF_grid_CM = 0;
        let EF_grid_BM = 0;
        let EF_grid_OM = 0;
        for (const response of i.responses) {
          if (
            response.field_id === '63df015c-f8c5-4902-8c3c-04810e4ebc1a' &&
            response.response_value !== ''
          ) {
            EG_PJY += parseFloat(response.response_value);
          } else if (
            response.field_id === 'b6de393b-9316-40aa-b307-8e50af662848' &&
            response.response_value !== ''
          ) {
            EG_PJY += parseFloat(response.response_value);
          } else if (
            response.field_id === '4cfd89e7-5134-45d1-84d0-4c4f05f2d865' &&
            response.response_value !== ''
          ) {
            EG_PJY += parseFloat(response.response_value);
          } else if (
            response.field_id === 'caddd283-41d0-4563-b8a4-52692afbbda9' &&
            response.response_value !== ''
          ) {
            EG_PJY += parseFloat(response.response_value);
          } else if (
            response.field_id === '71f3d4bb-7f3d-4fd1-a1bb-723b382de851' &&
            response.response_value !== ''
          ) {
            EG_PJY -= parseFloat(response.response_value);
          } else if (
            response.field_id === 'ccd52077-3917-47ec-810f-51ebb47ca364' &&
            response.response_value !== ''
          ) {
            EG_PJY += parseFloat(response.response_value);
          } else if (
            response.field_id === '045e8d7c-75fd-441a-8d56-cd19e4972caf' &&
            response.response_value !== ''
          ) {
            EF_grid_CM += parseFloat(response.response_value);
          } else if (
            response.field_id === '5afe63ac-3682-45ee-bf4f-02b973742313' &&
            response.response_value !== ''
          ) {
            EF_grid_BM += parseFloat(response.response_value);
          } else if (
            response.field_id === '3d8b7d0e-051f-47ca-a46f-28b30bbe0bb9' &&
            response.response_value !== ''
          ) {
            EF_grid_OM += parseFloat(response.response_value);
          } else if (
            response.field_id === 'ade28db5-6729-4d57-b826-992b4c9dad71' &&
            EF_grid_CM === 0
          ) {
            if (response.response_value === 'Yes') {
              EF_grid_CM = EF_grid_OM * 0.75 + EF_grid_BM * 0.25;
            } else if (response.response_value === 'No') {
              EF_grid_CM = EF_grid_OM * 0.5 + EF_grid_BM * 0.5;
            }
          }
        }
        console.log(EG_PJY, EF_grid_CM);
        calcObject['4cfd89e7-5134-45d1-84d0-4c4f05f2d865'] = (
          EG_PJY * EF_grid_CM
        ).toString();
      }
    }
    //
    const resultObject = matchingArray?.reduce(
      (
        acc: {
          [subsectionId: string]: { [fieldId: string]: string }[];
        },
        item: any
      ) => {
        const subsectionId = item.subsection_id;
        acc[subsectionId] = item.responses.reduce(
          (
            fieldObjAcc: { [fieldId: string]: string }[],
            response: { field_id: string; response_value: string }
          ) => {
            fieldObjAcc.push({ [response.field_id]: response.response_value });
            return fieldObjAcc;
          },
          []
        );
        return acc;
      },
      {}
    );

    //
    const outputObject: any = {};

    for (const key in resultObject) {
      const originalArray = resultObject[key];
      const newArray = [];
      let tempObj = {};

      for (const obj of originalArray) {
        const [key] = Object.keys(obj);
        if (tempObj.hasOwnProperty(key)) {
          newArray.push(tempObj);
          tempObj = {};
        }
        tempObj = { ...tempObj, ...obj };
      }

      newArray.push(tempObj);
      outputObject[key] = newArray;
    }
    //

    const aiDataObject = aiData?.reduce(
      (
        result: { [subsection_id: string]: string },
        item: {
          subsection_id: any;
          output_value: any;
        }
      ) => {
        result[item.subsection_id] = item.output_value;
        return result;
      },
      {}
    );
    const inputDataObject = remainingArray?.reduce(
      (acc: { [subsection_id: string]: string }, item: any) => {
        item.responses.forEach((response: any) => {
          acc[response.field_id] = response.response_value;
        });
        return acc;
      },
      {}
    );
    console.log(aiDataObject);
    console.log(inputDataObject);
    console.log(outputObject);
    console.log('calcObject', calcObject);
    const combinedData = {
      ...aiDataObject,
      ...inputDataObject,
      ...outputObject,
      ...calcObject
    };
    console.log(combinedData);

    loadFile('/template.docx', (error, content) => {
      if (error) {
        throw error;
      }
      var zip = new PizZip(content);
      var doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true
      });
      doc.setData(combinedData);
      try {
        // render the document (replace all tag occurences
        doc.render();
      } catch (error: any) {
        // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
        const replaceErrors = (key: any, value: any) => {
          if (value) {
            return Object.getOwnPropertyNames(value).reduce(
              (error: any, key: any) => {
                error[key] = value[key];
                return error;
              },
              {}
            );
          }
          return value;
        };
        console.log(JSON.stringify({ error: error }, replaceErrors));

        if (error.properties && error.properties.errors instanceof Array) {
          const errorMessages = error.properties.errors
            .map((error: any) => error.properties.explanation)
            .join('\n');
          console.log('errorMessages', errorMessages);
          // errorMessages is a humanly readable message looking like this :
          // 'The tag beginning with "foobar" is unopened'
        }
        throw error;
      }
      var out = doc.getZip().generate({
        type: 'blob',
        mimeType:
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      }); //Output the document using Data-URI
      saveAs(out, 'output.docx');
    });
  };
  return (
    <div>
      <button
        className="text-black text-[18px] mx-6 py-6 block text-left"
        onClick={generateDocument}
      >
        Export PDF
      </button>
    </div>
  );
}
