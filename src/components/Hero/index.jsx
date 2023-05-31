import React from 'react';
import coverVideo from '../../assets/cover.mp4';
import classes from './Hero.module.scss';

function Hero() {
  return (
    <div className={classes.hero}>
      <video
        autoPlay
        muted
        loop
        className={classes.hero__video}
        id="video"
        src={coverVideo}
      />
      <div className={classes.hero__content}>
        <h1 className={classes.hero__content__title}>
          Just travel with us
        </h1>
        <p className={classes.hero__content__tagline}>
          Travel is not reward for working it`s education for living
        </p>
        <button className={classes.hero__content__button} type="button">Find your journey</button>
      </div>
    </div>
  );
}

export default Hero;
