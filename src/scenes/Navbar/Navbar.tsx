import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import SiteLogo from '@/images/logo.svg';
import { links } from '@/data';
import { NavDropdown } from './NavDropdown';
import { NavLink } from './NavLink';

/** Renders the main navbar */
export const Navbar = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <div className="pt-12 pb-8 px-6">
      <nav className="flex justify-between items-center text-blue leading-none max-w-site mx-auto pt-2">
        <Image src={SiteLogo} alt="Manage" />
        <ul className="links space-x-8 hidden mdlg:flex justify-between items-center text-base">
          {links.map(({ text, url }, index) => (
            <li key={index}>
              <NavLink href={url}>{text}</NavLink>
            </li>
          ))}
        </ul>
        <button className="hidden mdlg:block bg-red py-4 px-8 rounded-full font-medium text-white leading-none shadow-ctaShadow transition-opacity hover:opacity-70">
          Get Started
        </button>
        <button
          className="text-2xl leading-none z-40 mdlg:hidden"
          onClick={() => setNavOpen(true)}
          aria-label="Toggle navigation dropdown menu"
        >
          <FaBars />
        </button>
        <NavDropdown open={navOpen} onClose={() => setNavOpen(false)} />
      </nav>
    </div>
  );
};
