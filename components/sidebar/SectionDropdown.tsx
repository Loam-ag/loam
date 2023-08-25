'use client';

import { Subsection } from '@/constants/verra/Sections';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type SectionDropdownProps = {
  sectionNumber: string;
  sectionName: string;
  subsections: Subsection[];
};

export default function SectionDropdown({
  sectionNumber,
  sectionName,
  subsections
}: SectionDropdownProps) {
  const [isSubsectionDropdownVisible, setIsSubsectionDropdownVisible] =
    useState(false);
  const pathname = usePathname();
  return (
    <div>
      <div className="border-b-2 border-loam_3 mx-4">
        <button
          onClick={() =>
            setIsSubsectionDropdownVisible(!isSubsectionDropdownVisible)
          }
          className="text-black text-[18px] mx-6 py-6 block text-left "
        >
          {sectionNumber ? (
            <div className="flex flex-row gap-2">
              <div>{sectionNumber}</div>
              <div>{sectionName}</div>
            </div>
          ) : (
            <div className="flex flex-row">{sectionName}</div>
          )}
        </button>
      </div>
      {isSubsectionDropdownVisible && subsections.length > 0 && (
        <div className="bg-white overflow-y-auto">
          {subsections.map((subsection, index) => (
            <Link
              key={subsection.name}
              href={`/dashboard/pdd-gen/${subsection.id}`}
              className={`text-black mx-6 text-[16px] text-left block ${
                index === subsections.length - 1 ? '' : 'border-b-2'
              } px-4 py-4 ${
                pathname === `/dashboard/pdd-gen/${subsection.id}` &&
                'font-bold'
              }`}
            >
              <div className="flex flex-row gap-2">
                <div>{subsection.number}</div>
                <div>{subsection.name}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
