import SignOutButton from './SignOutButton';
import { createServerSupabaseClient } from '@/app/supabase-server';
import HomeIcon from '@/components/icons/HomeIcon';
import Logo from '@/components/icons/Logo';
import PddWritingIcon from '@/components/icons/PddWritingIcon';
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
              <Link href="/" className="text-black">
                <div className="flex flex-col items-center">
                  <HomeIcon />
                  <p>Home</p>
                </div>
              </Link>
              {user && (
                <>
                  <Link href="/dashboard" className="text-black">
                    <div className="flex flex-col items-center">
                      <PddWritingIcon />
                      <p>PDD Writing</p>
                    </div>
                  </Link>
                  <Link href="/account" className="text-black">
                    <div className="flex flex-col items-center">
                      <HomeIcon />
                      <p>Account</p>
                    </div>
                  </Link>
                </>
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
