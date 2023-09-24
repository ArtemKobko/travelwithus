import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context';
import CoverVideo from '../../utils/video';
import classes from './Hero.module.scss';
import CustomizedSlider from '../MUI/Range';
import SelectAutoWidth from '../MUI/Select';

function Hero() {
  const { setButtonPush } = useContext(Context);

  return (
    <div className={classes.hero}>
      {CoverVideo(classes.hero__video)}
      <div className={classes.hero__content}>
        <h1 className={classes.hero__content__title}>
          Just travel with us
        </h1>
        <div className={classes.hero__content__inputs}>
          <SelectAutoWidth />
          <CustomizedSlider />
        </div>
        <Link to="/booking">
          <button className={classes.hero__content__button} onClick={() => setButtonPush(true)} type="button">Find your journey</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
