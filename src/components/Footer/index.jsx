/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  FaYoutube, FaInstagram, FaTwitter, FaSnapchatGhost, FaFacebook,
} from 'react-icons/fa';

import classes from './Footer.module.scss';

const socials = [
  <FaYoutube />,
  <FaInstagram />,
  <FaTwitter />,
  <FaSnapchatGhost />,
  <FaFacebook />,
];

function Footer() {
  return (
    <div className={classes.container}>
      <footer className={classes.footer}>
        <div className={classes.footer__newsletter}>
          <h4 className={classes.footer__newsletter__headline}>
            Join our newsletter to receive exclusive travel rewards
          </h4>
          <div className={classes.footer__newsletter__form}>
            <input className={classes.footer__newsletter__form__input} type="email" placeholder="Your Email" />
            <button type="button" className={classes.footer__newsletter__form__button}>Subscribe</button>
          </div>
        </div>
        <div className={classes.footer__bottom}>
          <span className={classes.footer__bottom__year}>
            Travel with us&nbsp;&copy;&nbsp;
            {new Date().getFullYear()}
          </span>
          <ul className={classes.footer__bottom__socials}>
            {socials.map((icon, index) => (
              <li key={index + 1}>
                <a href="/">{icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
