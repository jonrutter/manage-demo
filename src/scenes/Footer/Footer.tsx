import React, { useState } from 'react';
import Image from 'next/image';
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';
import SiteLogo from '@/images/logo-footer.svg';
import { StyledLink } from './StyledLink';

export const Footer = () => {
  const [formValue, setFormValue] = useState('');
  const [formValid, setFormValid] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
    const value = formValue;

    if (regex.test(value)) {
      setFormValid(true);
      return;
    } else {
      setFormValid(false);
      return;
    }
  };

  return (
    <div className="pt-12 pb-8 px-6 bg-darkBlue text-white">
      <footer className="max-w-site mx-auto footer-grid">
        <form
          noValidate
          className="[grid-area:_form] min-w-full max-w-full mdlg:justify-self-end"
          onSubmit={handleSubmit}
        >
          <label className="sr-only" htmlFor="email-signup">
            Sign up for our email mailing list
          </label>
          <div className="mx-auto max-w-[400px] grid grid-cols-[1fr_auto] gap-2">
            <input
              type="email"
              placeholder="Updates in your inbox..."
              className={`block text-black py-2 px-6 rounded-full border-none outline-none min-w-full max-w-full border-white border-2 focus:ring-2 focus:ring-red ${
                !formValid ? 'ring-red ring-2' : ''
              }`}
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
            />
            <button
              type="submit"
              className="bg-red py-2 px-6 uppercase rounded-full font-bold hover:bg-[#f58e74] transition-colors"
            >
              Go
            </button>
          </div>
          {!formValid && (
            <p className="mx-auto max-w-400px] text-red italic pl-6 mdlg:absolute">
              Please enter a valid email.
            </p>
          )}
        </form>
        <div className="[grid-area:_links] flex justify-evenly min-w-full mdlg:justify-around">
          <ul className="space-y-4 mb-4">
            <li>
              <StyledLink href="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink href="/">Pricing</StyledLink>
            </li>
            <li>
              <StyledLink href="/">Products</StyledLink>
            </li>
            <li>
              <StyledLink href="/">About Us</StyledLink>
            </li>
          </ul>
          <ul className="space-y-4 mb-4">
            <li>
              <StyledLink href="/">Careers</StyledLink>
            </li>
            <li>
              <StyledLink href="/">Community</StyledLink>
            </li>
            <li>
              <StyledLink href="/">Privacy Policy</StyledLink>
            </li>
          </ul>
        </div>
        <ul className="[grid-area:_social] flex [font-size:_2rem] flex-wrap justify-center space-x-6 mdlg:[font-size:_1.5rem] mdlg:space-x-4">
          <li>
            <StyledLink href="/" aria-label="Our Facebook">
              <FaFacebookSquare />
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/" aria-label="Our YouTube">
              <FaYoutubeSquare />
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/" aria-label="Our Twitter">
              <FaTwitter />
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/" aria-label="Our Pinterest">
              <FaPinterest />
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/" aria-label="Our Instagram">
              <FaInstagram />
            </StyledLink>
          </li>
        </ul>
        <Image src={SiteLogo} alt="Manage" className="[grid-area:_logo]" />
        <p className="[grid-area:_copyright] text-grey text-sm mdlg:justify-self-end">
          Copyright {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};
