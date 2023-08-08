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
    const subsectionIdsArray = [
      'd32fc445-4dc7-4361-9e63-126f70f89748',
      '3e1e7108-8a35-4a3d-9f5a-8c706baedf91',
      '42e2514a-6b18-4a03-8e43-d4d8ed5b8e35',
      '3b05c693-cf23-4f22-8645-2e4d968c6ebd',
      '5722e456-735d-4e4e-bd06-442f736a9fd4'
    ];

    const { matchingArray, remainingArray } = inputData?.reduce(
      (acc: any, item) => {
        if (subsectionIdsArray.includes(item.subsection_id)) {
          acc.matchingArray.push(item);
        } else {
          acc.remainingArray.push(item);
        }
        return acc;
      },
      { matchingArray: [], remainingArray: [] }
    );
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
    const combinedData = {
      ...aiDataObject,
      ...inputDataObject,
      ...outputObject
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
