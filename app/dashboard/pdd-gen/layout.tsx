import Sections from '@/components/sidebar/Sections';

export default function PDDFormLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-black">
      <div className="flex">
        <Sections />
        <div className="w-full h-[90vh] bg-gray-100 overflow-y-auto">
          {children}
        </div>
      </div>
    </section>
  );
}
