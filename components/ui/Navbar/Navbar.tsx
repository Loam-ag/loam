import NavbarSelect from './NavbarSelect';
import SignOutButton from './SignOutButton';
import { createServerSupabaseClient } from '@/app/supabase-server';
import HomeIcon from '@/components/icons/HomeIcon';
import Logo from '@/components/icons/Logo';
import PddWritingIcon from '@/components/icons/PddWritingIcon';
import ResourcesIcon from '@/components/icons/ResourcesIcon';
import Link from 'next/link';

export default async function Navbar() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <nav className="bg-white">
      <div>
        <div className="flex flex-row justify-between py-4 align-center md:py-6 px-8">
          <Link href="/" aria-label="Logo">
            <Logo />
          </Link>
          <div>
            <nav className="space-x-10 flex flex-row">
              <NavbarSelect icon={<HomeIcon />} text="Home" route="" />
              {user && (
                <NavbarSelect
                  icon={<PddWritingIcon />}
                  text="PDD Writing"
                  route="dashboard"
                />
              )}
              <NavbarSelect
                icon={<ResourcesIcon />}
                text="Resources"
                route="resources"
              />
              {user && (
                <NavbarSelect
                  icon={<HomeIcon />}
                  text="Account"
                  route="account"
                />
              )}
            </nav>
          </div>
          {user ? (
            <SignOutButton />
          ) : (
            <Link href="/signin" className="text-black">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
