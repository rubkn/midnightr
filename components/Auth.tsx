import { type FC } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const Auth: FC = () => {
  const { data: session } = useSession();

  return (
    <>
      {!session?.user ? (
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              signIn('google');
            }}
          >
            Sign in with Google
          </button>
        </div>
      ) : (
        <div>
          <h1>Logged in as {session?.user?.email}</h1>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </>
  );
};

export default Auth;
