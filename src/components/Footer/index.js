import React from 'react';

// styles
import s from './Footer.module.css';

// logo
import SiteLogo from '../../images/logo-footer.svg';

// icons
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={s.wrapper}>
      <footer className={s.content}>
        <form noValidate className={s.form}>
          <label className={s.hiddenLabel} htmlFor="email-signup">
            Sign up for our email mailing list
          </label>
          <div className={s.formRow}>
            <input
              type="email"
              placeholder="Updates in your inbox..."
              className={s.input}
            />
            <button type="submit" className={s.submit}>
              Go
            </button>
          </div>
        </form>
        <div className={s.linksWrap}>
          <ul className={s.links}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
          </ul>
          <ul className={s.links}>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Community</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <ul className={s.socialLinks}>
          <li>
            <a href="/" aria-label="Our Facebook">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="/" aria-label="Our YouTube">
              <FaYoutubeSquare />
            </a>
          </li>
          <li>
            <a href="/" aria-label="Our Twitter">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="/" aria-label="Our Pinterest">
              <FaPinterest />
            </a>
          </li>
          <li>
            <a href="/" aria-label="Our Instagram">
              <FaInstagram />
            </a>
          </li>
        </ul>
        <img src={SiteLogo} alt="Manage" className={s.logo} />
        <p className={s.copyright}>
          Copyright {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
