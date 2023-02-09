import { signIn } from 'next-auth/react';
import Header from './Header';

const Login = () => {
  return (
    <>
      <Header />
      <div>
        <button onClick={() => signIn('google')}>Sign in</button>
      </div>
    </>
  );
};

export default Login;
