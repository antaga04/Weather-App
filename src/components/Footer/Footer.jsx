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
      <p>Built by Adrian Anta</p>
    </footer>
  );
};

export default Footer;
