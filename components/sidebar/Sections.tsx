'use client';

import ExportButton from '../ExportButton';
import SectionsDropdown from './SectionsDropdown';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Sections() {
  const [sections, setSections] = useState<
    | {
        id: any;
        section_name: any;
        form_subsections: {
          id: any;
          subsection_name: any;
        }[];
      }[]
    | null
  >(null);
  const supabase = createClientComponentClient();
  useEffect(() => {
    const getSections = async () => {
      const { data, error } = await supabase
        .from('form_sections')
        .select(
          `
          id,
            section_name,
            form_subsections(
              id,
              subsection_name
            )
        `
        )
        .eq('template_id', '6e435805-eaab-4d6f-917e-3a8832bb8761')
        .order('section_order', { ascending: true })
        .order('subsection_order', {
          foreignTable: 'form_subsections',
          ascending: true
        });
      setSections(data);
    };
    getSections();
  }, []);
  return (
    sections && (
      <div className="bg-loam_1">
        <div className="border-b-2 border-loam_3 mx-4">
          <Link
            href={`/dashboard/pdd/section/getstarted/${
              sections && sections[0].form_subsections[0].id
            }`}
            className="text-black text-[18px] mx-6 py-6 block text-left "
          >
            0. Get Started
          </Link>
        </div>
        {sections?.slice(1).map((item) => (
          <SectionsDropdown key={item.id} section={item} />
        ))}
        <div className="border-b-2 border-loam_3 mx-4">
          <ExportButton />
        </div>
      </div>
    )
  );
}
