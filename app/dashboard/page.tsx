'use client';

import CopyIcon from '@/components/icons/CopyIcon';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const now = new Date();
  const [pdds, setPdds] = useState<
    | {
        edited_at: any;
        id: any;
      }[]
    | null
  >();

  useEffect(() => {
    const getPdds = async () => {
      try {
        const {
          data: { session }
        } = await supabase.auth.getSession();
        const { data, error } = await supabase
          .from('verra_pdds')
          .select(`edited_at, id`)
          .eq('user_id', session?.user.id);
        if (error) {
          throw new Error('Getting saved responses failed');
        }
        setPdds(data);
      } catch (error) {
        console.error(error);
      }
    };
    getPdds();
  }, []);

  const createNewPDD = async () => {
    const {
      data: { session }
    } = await supabase.auth.getSession();
    const { data, error } = await supabase
      .from('verra_pdds')
      .insert({ user_id: session?.user.id })
      .select()
      .single();
    if (error) {
      throw new Error('Error creating new PDD');
    }
    const { error: pddAiOutputs } = await supabase
      .from('verra_pdds_ai_outputs')
      .insert({ id: data.id, user_id: session?.user.id })
      .select();
    if (pddAiOutputs) {
      throw new Error('Error creating new PDD ai outputs');
    }
    router.push(`/dashboard/pdd-gen/verra_0_01?id=${data.id}`);
  };

  const getTime = (timestamp: string) => {
    const date = new Date(timestamp);
    if (
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    ) {
      // It's on the current day, display only the time.
      const timeOptions = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      } as Intl.DateTimeFormatOptions;
      const formattedTime = date.toLocaleTimeString('en-US', timeOptions);
      return formattedTime;
    } else {
      // It's on a different day, display month, day, year, and time.
      const dateTimeOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      } as Intl.DateTimeFormatOptions;
      const formattedDateTime = date.toLocaleString('en-US', dateTimeOptions);
      return formattedDateTime;
    }
  };

  return (
    <div className="max-w-6xl mx-auto h-screen px-8">
      <button
        onClick={createNewPDD}
        className="bg-black text-white font-bold py-2 mt-8 px-4 rounded float-right"
      >
        Create new PDD
      </button>
      <table className="text-left text-black w-full">
        <thead>
          <tr>
            <th className="py-4 w-1/2">Name</th>
            <th className="w-1/2">Last Edited</th>
            <th className="w-full"></th>
          </tr>
        </thead>
        <tbody>
          {pdds?.map((pdd, index) => (
            <tr className="border-t border-black" key={pdd.id}>
              <td className="py-4 w-1/2">{`Verra PDD ${index + 1}`}</td>
              <td className="w-1/3">{getTime(pdd.edited_at)}</td>
              <td>
                <Link href={`/dashboard/pdd-gen/verra_0_01?id=${pdd.id}`}>
                  <CopyIcon />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
