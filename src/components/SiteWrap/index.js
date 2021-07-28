import React from 'react';

import s from './SiteWrap.module.css';

const SiteWrap = ({ children }) => {
  return <div className={s.wrap}>{children}</div>;
};

export default SiteWrap;
