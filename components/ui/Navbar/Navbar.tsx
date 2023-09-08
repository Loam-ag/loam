'use client';

import SignOutButton from './SignOutButton';
import AccountIcon from '@/components/icons/AccountIcon';
import HomeIcon from '@/components/icons/HomeIcon';
import Logo from '@/components/icons/Logo';
import PddWritingIcon from '@/components/icons/PddWritingIcon';
import {
  createClientComponentClient,
  User
} from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const supabase = createClientComponentClient();
  const [user, setUser] = useState<User | null>();
  const [isLoading, setIsLoading] = useState(true); // Initialize as true

  const checkActivePath = (path: string) => {
    if (path === '/' && pathname !== path) {
      return false;
    }
    return pathname.startsWith(path);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const {
          data: { user }
        } = await supabase.auth.getUser();
        setUser(user);
        setIsLoading(false); // Set to false when data is fetched
      } catch (error) {
        console.error('Error fetching user:', error);
        setIsLoading(false); // Set to false even in case of an error
      }
    };

    getUser();
  }, []);

  return (
    <nav className="bg-black">
      {isLoading ? (
        <div className="flex flex-row justify-between align-center px-8 h-[71px]">
          <Link href="/" aria-label="Logo" className="flex items-center">
            <Logo />
          </Link>
        </div>
      ) : (
        <div>
          <div className="flex flex-row justify-between py-4 align-center px-8">
            <Link href="/" aria-label="Logo" className="flex items-center">
              <Logo />
            </Link>
            <div>
              <nav className="space-x-16 md:space-x-28 flex flex-row items-center">
                {user && (
                  <>
                    <Link href="/">
                      <div className="flex flex-col items-center">
                        <PddWritingIcon
                          color={
                            checkActivePath('/') || checkActivePath('/pdd-gen')
                              ? '#EE5D30'
                              : '#94B8A3'
                          }
                        />
                        <p
                          className={
                            checkActivePath('/') || checkActivePath('/pdd-gen')
                              ? 'text-white'
                              : 'text-slate-400'
                          }
                        >
                          PDD Writing
                        </p>
                      </div>
                    </Link>
                    <Link href="/account">
                      <div className="flex flex-col items-center">
                        <AccountIcon
                          color={
                            checkActivePath('/account') ? '#EE5D30' : '#94B8A3'
                          }
                        />
                        <p
                          className={
                            checkActivePath('/account')
                              ? 'text-white'
                              : 'text-slate-400'
                          }
                        >
                          Account
                        </p>
                      </div>
                    </Link>
                  </>
                )}
              </nav>
            </div>
            {user ? (
              <SignOutButton />
            ) : (
              <Link href="/signin" className="text-white">
                Sign in
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
