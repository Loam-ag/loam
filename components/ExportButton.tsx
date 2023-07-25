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
    const { data, error } = await supabase
      .from('form_ai_outputs')
      .select(
        `
          subsection_id, output_value
        `
      )
      .eq('user_id', session?.user.id);

    const combinedObject = data?.reduce(
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
    loadFile('/template.docx', (error, content) => {
      if (error) {
        throw error;
      }
      var zip = new PizZip(content);
      var doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true
      });
      doc.setData(combinedObject);
      try {
        // render the document (replace all tag occurences
        doc.render();
      } catch (error: any) {
        // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
        const replaceErrors = (key: any, value: any) => {
          if (value instanceof Error) {
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
