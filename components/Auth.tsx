import { type FC } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const Auth: FC = () => {
  const { data: session } = useSession();

  return (
    <>
      {!session?.user && (
        <div>
          <button
            className="rounded-lg border px-4 py-2 text-sm text-white hover:border-violet hover:bg-gradient-to-r hover:from-violet hover:to-dark-violet"
            onClick={() => {
              signIn('google');
            }}
          >
            Sign in
          </button>
        </div>
      )}
      {session?.user && (
        <div className="flex items-center space-x-4">
          {/* <h1>Logged in as {session?.user?.email}</h1> */}
          <button
            className="rounded-lg border px-4 py-2 text-sm text-white hover:border-violet hover:bg-gradient-to-r hover:from-violet hover:to-dark-violet"
            onClick={() => {
              signOut();
            }}
          >
            Log out
          </button>
          <Link href="/dashboard">
            <Image
              src={session.user?.image as string}
              width={64}
              height={64}
              className="rounded-full"
              alt={`${session.user?.name} Avatar`}
            />
          </Link>
        </div>
      )}
    </>
  );
};

export default Auth;
