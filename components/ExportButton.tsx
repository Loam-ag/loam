'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Docxtemplater from 'docxtemplater';
import { saveAs } from 'file-saver';
import { useSearchParams } from 'next/navigation';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';

export default function ExportButton() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
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

    const { data: aiPdddData, error: aiPddError } = await supabase
      .from('verra_pdds_ai_outputs')
      .select('*')
      .eq('id', id)
      .eq('user_id', session?.user.id)
      .single();

    if (aiPddError) {
      console.error('Error fetching row:', aiPddError);
    }

    const { data: pddData, error } = await supabase
      .from('verra_pdds')
      .select('*')
      .eq('id', id)
      .eq('user_id', session?.user.id)
      .single();

    if (error) {
      console.error('Error fetching row:', error);
    }
    const keysToExclude = ['id', 'user_id'];
    const pddDataWithExcludedColumns: any = {};

    for (const key in pddData) {
      if (!keysToExclude.includes(key)) {
        pddDataWithExcludedColumns[key] = pddData[key];
      }
    }
    const transformedPddData = Object.values(pddDataWithExcludedColumns).reduce(
      (result: Record<string, any>, section: any) => {
        for (const subsection in section) {
          result[subsection] = section[subsection];
        }
        return result;
      },
      {}
    );

    // 4.01
    let egPJy;
    if (transformedPddData['verra_4_01_greenfield'] === 'Yes') {
      egPJy = parseFloat(transformedPddData['verra_4_01_EGfacility']);
    } else if (transformedPddData['verra_4_01_greenfield'] === 'No') {
      if (transformedPddData['verra_4_01_capacity'] === 'Yes') {
        egPJy = parseFloat(transformedPddData['verra_4_01_EGpj']);
      } else if (transformedPddData['verra_4_01_capacity'] === 'No') {
        if (transformedPddData['verra_4_01_retrofit'] === 'Yes') {
          const egFacilityY = parseFloat(
            transformedPddData['verra_4_01_EGfacility_y']
          );
          const egHistorical = parseFloat(
            transformedPddData['verra_4_01_EGhistorical']
          );
          const deviation = parseFloat(
            transformedPddData['verra_4_01_deviation']
          );
          if (isNaN(egFacilityY) || isNaN(egHistorical) || isNaN(deviation)) {
            transformedPddData['verra_4_01_calculation'] =
              'ERROR INPUT(S) NOT A NUMBER';
          } else {
            egPJy = egFacilityY - egHistorical + deviation;
          }
        } else if (transformedPddData['verra_4_01_retrofit'] === 'No') {
          egPJy = parseFloat(transformedPddData['verra_4_01_EQPJy']);
        }
      }
    }

    let efGridCM;
    if (transformedPddData['verra_4_01_EFgrid'] === 'Yes') {
      efGridCM = parseFloat(transformedPddData['verra_4_01_EFgrid_CM']);
    } else if (transformedPddData['verra_4_01_EFgrid'] === 'No') {
      const efGridBM = parseFloat(transformedPddData['verra_4_01_EFgrid_BM']);
      const efGridOM = parseFloat(transformedPddData['verra_4_01_EFgrid_OM']);
      if (isNaN(efGridBM) || isNaN(efGridOM)) {
        transformedPddData['verra_4_01_calculation'] =
          'ERROR INPUT(S) NOT A NUMBER';
      }
      if (transformedPddData['verra_4_01_windsolar'] === 'Yes') {
        efGridCM = efGridOM * 0.75 + efGridBM * 0.25;
      } else if (transformedPddData['verra_4_01_windsolar'] === 'No') {
        efGridCM = efGridOM * 0.5 + efGridBM * 0.5;
      }
    }

    if ((efGridCM && isNaN(efGridCM)) || (egPJy && isNaN(egPJy))) {
      transformedPddData['verra_4_01_calculation'] =
        'ERROR INPUT(S) NOT A NUMBER';
    } else if (efGridCM && egPJy) {
      transformedPddData['verra_4_01_calculation'] = efGridCM * egPJy;
    }

    // 4.02
    if (transformedPddData['verra_4_02_activities'] === 'Yes') {
      transformedPddData['verra_4_02_activities_calculation'] = '0';
    } else if (transformedPddData['verra_4_02_activities'] === 'No') {
      const peY = parseFloat(transformedPddData['verra_4_02_PE_y']);
      const peGp = parseFloat(transformedPddData['verra_4_02_PE_gp']);
      const peHp = parseFloat(transformedPddData['verra_4_02_PE_hp']);
      const peBess = parseFloat(transformedPddData['verra_4_02_PE_BESS']);

      if (isNaN(peY) || isNaN(peGp) || isNaN(peHp) || isNaN(peBess)) {
        transformedPddData['verra_4_02_calculation'] =
          'ERROR INPUT(S) NOT A NUMBER';
      } else {
        transformedPddData['verra_4_02_calculation'] =
          peY + peGp + peHp + peBess;
      }
    }

    const mergedData = {
      ...aiPdddData,
      ...transformedPddData
    };

    loadFile('/VERRA_DOC_TEMPLATE.docx', (error, content) => {
      if (error) {
        throw error;
      }
      var zip = new PizZip(content);
      var doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
        nullGetter() {
          return '';
        }
      });
      doc.setData(mergedData);
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
