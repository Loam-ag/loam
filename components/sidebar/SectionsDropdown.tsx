'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface Props {
  section: {
    id: any;
    section_name: any;
    form_subsections: {
      id: any;
      subsection_name: any;
    }[];
  };
}
export default function SectionsDropdown({ section }: Props) {
  const [isSubsectionDropdownVisible, setIsSubsectionDropdownVisible] =
    useState(false);
  const pathname = usePathname();
  return (
    <div key={section.id}>
      <div className="border-b-2 border-loam_3 mx-4">
        <button
          onClick={() =>
            setIsSubsectionDropdownVisible(!isSubsectionDropdownVisible)
          }
          className="text-black text-[18px] mx-6 py-6 block text-left "
        >
          {section.section_name}
        </button>
      </div>
      {isSubsectionDropdownVisible && (
        <div className="bg-white overflow-y-auto">
          {section.form_subsections?.map((item, index) => (
            <Link
              key={item.id}
              href={`/dashboard/pdd/section/${item.id}`}
              className={`text-black mx-6 text-[18px]py-6 text-left block mb-4 pb-4 ${
                index === section.form_subsections.length - 1
                  ? ''
                  : 'border-b-2'
              } px-4 ${index === 0 && 'pt-4'} ${
                pathname === `/dashboard/pdd/section/${item.id}` && 'font-bold'
              }`}
            >
              {item.subsection_name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
