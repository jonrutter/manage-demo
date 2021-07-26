import React from 'react';

// styles
import s from './Features.module.css';

const Features = () => (
  <div className={s.wrapper}>
    <section className={s.content}>
      <div className={s.left}>
        <h2 className={s.title}>What's different about Manage?</h2>
        <p className={s.text}>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <ul className={s.right}>
        <li className={s.container}>
          <span className={s.containerNumber}>01</span>
          <h3 className={s.containerTitle}>Track company-wide progress</h3>
          <p>
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way down to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </li>
        <li className={s.container}>
          <span className={s.containerNumber}>02</span>
          <h3 className={s.containerTitle}>Advanced built-in-reports</h3>
          <p>
            Set internal delivery estimates and track progress toward company
            goals. Our customizable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
        </li>
        <li className={s.container}>
          <span className={s.containerNumber}>03</span>
          <h3 className={s.containerTitle}>Everything you need in one place</h3>
          <p>
            Stop jumping from one service to another to communicate, store
            files, track tasks, and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </li>
      </ul>
    </section>
  </div>
);

export default Features;
