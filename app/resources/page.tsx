'use client';

import { Divider } from '@/components/resources/Divider';
import { FilterBar } from '@/components/resources/FilterBar';
import { Table } from '@/components/resources/Table';
import ToggleBar from '@/components/resources/ToggleBar';
import { MethodologyType } from '@/components/resources/types';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { type } from 'os';
import React, { FC } from 'react';
import { useEffect } from 'react';

type Props = {};

export default function page({}) {
  const supabase = createClientComponentClient();
  const [isLoading, setIsLoading] = React.useState(true);
  const [verra_methodologies, setVerra_methodologies] = React.useState<
    MethodologyType[]
  >([]);
  const [verra_modules, setVerra_modules] = React.useState<any>([]);
  const [verra_tools, setVerra_tools] = React.useState<any>([]);

  const getMethodologies = async () => {
    const {
      data: { session }
    } = await supabase.auth.getSession();
    const { data, error } = await supabase
      .from('verra_methodologies')
      .select()
      .returns<MethodologyType[]>();
    if (error) {
      console.log(error);
    } else {
      // Add data to array
      setVerra_methodologies(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMethodologies();
  }, []);

  return (
    <div className="flex flex-row w-full items-center justify-center bg-white">
      <div className="flex-col m-3 pt-1 pb-3 px-1 w-full max-w-7xl">
        <ToggleBar />
        <FilterBar />
        <Divider />
        <Table data={verra_methodologies} />
      </div>
    </div>
  );
}
