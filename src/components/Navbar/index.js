import React, { useState, useEffect } from 'react';

// styles
import s from './Navbar.module.css';

// icon
import { FaBars, FaTimes } from 'react-icons/fa';

// logo
import SiteLogo from '../../images/logo.svg';

// data
import { links } from '../../data';

// components
import NavDropdown from '../NavDropdown';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const closeNavFromBody = (e) => {
    if (e.target.classList.contains('no-scroll')) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    if (navOpen) {
      document.querySelector('body').classList.add('no-scroll');
      document.addEventListener('click', closeNavFromBody);
    } else {
      document.querySelector('body').classList.remove('no-scroll');
    }
    return () => {
      document.removeEventListener('click', closeNavFromBody);
    };
  }, [navOpen]);

  return (
    <div className={s.wrapper}>
      <nav className={s.content}>
        <img src={SiteLogo} alt="Manage" width="146" height="24" />
        <ul className={s.links}>
          {links.map((link, index) => {
            const { text, url } = link;
            return (
              <li key={index}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
        <button className={s.ctaBtn}>Get Started</button>
        <button
          className={s.toggleBtn}
          onClick={() => setNavOpen((prev) => !prev)}
          aria-label="Toggle navigation dropdown menu"
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
        {navOpen && <NavDropdown />}
      </nav>
    </div>
  );
};

export default Navbar;
