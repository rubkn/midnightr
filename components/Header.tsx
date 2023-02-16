import { FC } from 'react';

import { Links } from '@lib/types';

const Header: FC = () => {
  const links: Links = [
    { href: '/login', label: 'login' },
    { href: '/profile', label: 'profile' },
    { href: '/settings', label: 'settings' }
  ];

  return (
    <header className="flex h-12 flex-row items-center justify-between border-b border-b-wolf px-5 uppercase">
      <span className="font-black">chamber</span>
      <div className="space-x-4 font-bold tracking-tight">
        {links.map((link) => {
          return (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
