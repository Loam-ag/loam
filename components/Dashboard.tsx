import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase
    .from('form_templates')
    .select(
      `
    form_sections(
      id,
      section_name,
      form_subsections(
        id, 
        section_name
      )
    )
  `
    )
    .eq('template_name', 'Verra VCS');
  console.log(data);
  return (
    <section className="bg-black">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <p className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
          Your Loam Dashboard{' '}
        </p>
      </div>
    </section>
  );
}
