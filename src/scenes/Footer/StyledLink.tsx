import React from 'react';
import Link, { LinkProps } from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
} & LinkProps;

export const StyledLink: React.FC<Props> = ({ href, children }) => (
  <Link href={href} className="transition-colors block hover:text-red">
    {children}
  </Link>
);
