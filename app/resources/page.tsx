'use client';

import { FilterBar } from '@/components/resources/FilterBar';
import Table from '@/components/resources/Table';
import ToggleBar from '@/components/resources/ToggleBar';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React from 'react';
import { useEffect } from 'react';

type Props = {};

export default function page({}: Props) {
  const supabase = createClientComponentClient();
  const [isLoading, setIsLoading] = React.useState(true);
  const [verra_methodologies, setVerra_methodologies] = React.useState<any>([]);
  const [verra_modules, setVerra_modules] = React.useState<any>([]);
  const [verra_tools, setVerra_tools] = React.useState<any>([]);
  useEffect(() => {
    const getMethodologies = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession();
      const { data, error } = await supabase
        .from('verra_methodologies')
        .select('*');
      if (error) {
        console.log(error);
      } else {
        // Add data to array
        setVerra_methodologies([...verra_methodologies, data]);
        setIsLoading(false);
      }
    };
    const getModules = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession();
      const { data, error } = await supabase.from('verra_modules').select('*');
      if (error) {
        console.log(error);
      } else {
        // Add data to array
        setVerra_modules([...verra_modules, data]);
      }
    };
    const getTools = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession();
      const { data, error } = await supabase.from('verra_tools').select('*');
      if (error) {
        console.log(error);
      } else {
        // Add data to array
        setVerra_tools([...verra_tools, data]);
      }
    };
    getMethodologies();
    getModules();
    getTools();
  }, []);

  return (
    <div className="flex flex-row w-full items-center justify-center bg-white">
      <div className="flex-col m-3 pt-1 pb-3 px-1 w-full border-red-500 border-[2px]">
        <ToggleBar />
        <FilterBar />
        <Table />
      </div>
    </div>
  );
}
