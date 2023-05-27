import React from 'react';
import LeafSVG from '../../../assets/logoIcon';
import classes from './Logo.module.scss';

function Logo() {
  return (
    <a href="/" className={classes.logo}>
      <LeafSVG fillColor="white" />
      <span>Travel With Us</span>
    </a>
  );
}

export default Logo;
