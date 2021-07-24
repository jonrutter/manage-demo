import React from 'react';

// styles
import s from './NavDropdown.module.css';

// data
import { links } from '../../nav-links';

const NavDropdown = () => {
  return (
    <div className={s.wrapper}>
      <ul>
        {links.map((link, index) => {
          const { text, url } = link;
          return (
            <li key={index}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavDropdown;
