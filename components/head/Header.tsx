import { FC } from 'react';

import Auth from './Auth';

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between">
      <span className="text-4xl font-bold tracking-tighter text-violet">
        midnightr.
      </span>
      <Auth />
    </header>
  );
};

export default Header;
