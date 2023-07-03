import React, { useState } from 'react';
import {
  FaYoutube, FaInstagram, FaTwitter, FaSnapchatGhost, FaFacebook,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './Footer.module.scss';

const socials = [
  <FaYoutube />,
  <FaInstagram />,
  <FaTwitter />,
  <FaSnapchatGhost />,
  <FaFacebook />,
];

function Footer() {
  const [email, setEmail] = useState('');
  const notify = () => toast.success('You has been successfully subscribed to the newsletter');

  const subscribe = (e) => {
    e.preventDefault();
    if (email !== '') {
      notify();
      setEmail('');
    }
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div className={classes.container}>
      <footer className={classes.footer}>
        <div className={classes.footer__newsletter}>
          <h4 className={classes.footer__newsletter__headline}>
            Join our newsletter to receive exclusive travel rewards
          </h4>
          <form className={classes.footer__newsletter__form} onSubmit={(e) => subscribe(e)}>
            <input className={classes.footer__newsletter__form__input} type="email" placeholder="Your Email" value={email} onChange={(event) => changeEmail(event)} />
            <button type="submit" className={classes.footer__newsletter__form__button}>Subscribe</button>
          </form>
        </div>
        <div className={classes.footer__bottom}>
          <span className={classes.footer__bottom__year}>
            Travel with us&nbsp;&copy;&nbsp;
            {new Date().getFullYear()}
          </span>
          <ul className={classes.footer__bottom__socials}>
            {socials.map((icon, index) => (
              <li key={index + 1}>
                <Link to="/">{icon}</Link>
              </li>
            ))}
          </ul>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
