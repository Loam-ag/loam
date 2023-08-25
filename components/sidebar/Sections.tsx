'use client';

import ExportButton from '../ExportButton';
import ArrowIcon from '../icons/ArrowIcon';
import SectionDropdown from './SectionDropdown';
import { Section, VERRA_SECTIONS } from '@/constants/verra/Sections';
import { useEffect, useState } from 'react';

export default function Sections() {
  const [isHidden, setIsHidden] = useState(false);
  const [sections, setSections] = useState<Section[]>([]);
  useEffect(() => {
    // if there is a selected template --> then render side bar. Import sections from constants
    setSections(VERRA_SECTIONS);
  }, []);
  return sections.length === 0 ? (
    <></>
  ) : !isHidden ? (
    <div className="w-72 flex-shrink-0 h-[90vh] bg-loam_1 text-white overflow-y-auto">
      <div className="flex float-right">
        <div
          className="flex flex-row mt-2 mr-2 hover:cursor-pointer"
          onClick={() => setIsHidden(true)}
        >
          <ArrowIcon />
          <ArrowIcon />
        </div>
      </div>
      <div className="bg-loam_1">
        {sections.map((section) => (
          <SectionDropdown
            key={section.id}
            sectionNumber={section.number}
            sectionName={section.name}
            subsections={section.subsections}
          />
        ))}
        <div className="border-b-2 border-loam_3 mx-4">
          <ExportButton />
        </div>
      </div>
    </div>
  ) : (
    <div
      className="flex flex-row mt-2 ml-4 absolute rotate-180 hover:cursor-pointer"
      onClick={() => setIsHidden(false)}
    >
      <ArrowIcon />
      <ArrowIcon />
    </div>
  );
}
