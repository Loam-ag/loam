import Sections from '@/components/sidebar/Sections';
import SectionsDropdown from '@/components/sidebar/SectionsDropdown';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-black">
      <div className="flex">
        <Sections />
        <div className="w-full h-[90vh] bg-gray-100 overflow-y-auto">
          {/* Main content */}
          {children}
        </div>
      </div>
    </section>
  );
}
