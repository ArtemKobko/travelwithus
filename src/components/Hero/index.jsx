import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context';
import coverVideo from '../../assets/cover.mp4';
import classes from './Hero.module.scss';
import ColorSlider from '../MUI/Range';
import SelectAutoWidth from '../MUI/Select';

function Hero() {
  const { setButtonPush } = useContext(Context);

  return (
    <div className={classes.hero}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className={classes.hero__video}
        id="video"
        src={coverVideo}
      />
      <div className={classes.hero__content}>
        <h1 className={classes.hero__content__title}>
          Just travel with us
        </h1>
        <div className={classes.hero__content__inputs}>
          <SelectAutoWidth />
          <ColorSlider />
        </div>
        <Link to="/booking">
          <button className={classes.hero__content__button} onClick={() => setButtonPush(true)} type="button">Find your journey</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
