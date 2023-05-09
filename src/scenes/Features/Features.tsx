import React from 'react';

export const Features = () => (
  <div className="py-12 px-6">
    <section className="max-w-site mx-auto text-grey grid justify-items-center gap-12 md:grid-cols-2 md:gap-16">
      <div className="w-full max-w-[400px] md:max-w-[600px] md:justify-self-start">
        <h2 className="text-blue text-center [font-size:_2rem] leading-tight mb-6 md:text-left md:[font-size:_2.5rem] font-bold">
          What's different about Manage?
        </h2>
        <p className="text-center md:max-w-[400px] md:text-left">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <ul className="max-w-[400px] md:max-w-full md:justify-self-end">
        <li className="feature-container">
          <span className="feature-container__number">01</span>
          <h3 className="feature-container__title">
            Track company-wide progress
          </h3>
          <p>
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way down to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </li>
        <li className="feature-container">
          <span className="feature-container__number">02</span>
          <h3 className="feature-container__title">
            Advanced built-in-reports
          </h3>
          <p>
            Set internal delivery estimates and track progress toward company
            goals. Our customizable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
        </li>
        <li className="feature-container">
          <span className="feature-container__number">03</span>
          <h3 className="feature-container__title">
            Everything you need in one place
          </h3>
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
