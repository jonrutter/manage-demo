import React, { useState } from 'react';

// styles
import s from './Navbar.module.css';

// icon
import { FaBars, FaTimes } from 'react-icons/fa';

// logo
import SiteLogo from '../../images/logo.svg';

// data
import { links } from '../../nav-links';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={s.wrapper}>
      <nav className={s.content}>
        <img className={s.logo} src={SiteLogo} alt="Manage" />
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
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
