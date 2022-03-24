import React from 'react';

import s from './SkipToContent.module.css';

const SkipToContent = () => {
  return (
    <a href="#main" className={s.link}>
      Skip to content
    </a>
  );
};

export default SkipToContent;
