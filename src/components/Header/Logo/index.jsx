import React from 'react';
import { Link } from 'react-router-dom';
import LeafSVG from '../../../assets/logoIcon';
import classes from './Logo.module.scss';

function Logo() {
  return (
    <Link to="/" className={classes.logo}>
      <LeafSVG fillColor="#e8e8e8" />
      <span>Travel With Us</span>
    </Link>
  );
}

export default Logo;
