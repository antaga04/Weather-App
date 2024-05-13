import React from 'react';
import './Footer.css';
import { GithubIcon, LinkedinIcon } from '../Icons/Icons';

const Footer = () => {
  return (
    <footer>
      <ul className="icons flex-center">
        <li>
          <a href="https://www.linkedin.com/in/adrian-anta-gil/" target="blank" rel="noopenner">
            {LinkedinIcon()}
          </a>
        </li>
        <li>
          <a href="http://github.com/antaga04/" target="blank" rel="noopenner">
            {GithubIcon()}
          </a>
        </li>
      </ul>
      <p>
        <a href="https://adrian-anta.netlify.app/" target='blank' rel="noopener" className="portfolio">
          Built by Adrian Anta
        </a>
      </p>
    </footer>
  );
};

export default Footer;
