import Link from 'next/link';
import React from 'react';

type Props = {
  href: string;
  children: React.ReactNode;
};

export const NavLink: React.FC<Props> = ({ href, children }) => (
  <Link href={href} className="transition-opacity font-medium hover:opacity-70">
    {children}
  </Link>
);
