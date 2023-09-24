import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import CoverVideo from '../../utils/video';
import PriceList from '../../assets/Price list.pdf';
import classes from './Pricing.module.scss';

function Pricing() {
  return (
    <div className={classes.hero}>
      {CoverVideo(classes.hero__video)}
      <div className={classes.hero__content}>
        <h1 className={classes.hero__content__title}>
          Explore world with us
        </h1>
        <p className={classes.hero__content__tagline}>
          Travel is not reward for working it`s education for living
        </p>
        <a href={PriceList} download="Price list" className={classes.hero__content__button}>
          Price list
          <FaFileDownload />
        </a>
      </div>
    </div>
  );
}

export default Pricing;
