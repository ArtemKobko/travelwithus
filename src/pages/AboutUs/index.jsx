import React from 'react';
import classes from './AboutUs.module.scss';
import offersData from '../../utils/offersData';

function AboutUs() {
  return (
    <div className={classes.container}>
      <div className={classes.hero}>
        <h1 className={classes.hero__title}>Our Team</h1>
      </div>
      <div className={classes.article}>
        <h1 className={classes.article__title}>Who we are</h1>
        <p>
          Welcome to "Travel with Us," a travel agency born out of a deep passion for exploration and a desire to create extraordinary journeys. We believe that traveling is not just about visiting new places; it's about embracing the magic of discovery and immersing oneself in the essence of each destination.
        </p>
        <p>
          Founded by Thomas, a visionary with an insatiable wanderlust, "Travel with Us" is dedicated to crafting unforgettable experiences that go beyond the ordinary. Our mission is to weave a tapestry of memories, where every journey becomes a unique and cherished tale.
          At "Travel with Us," we understand that no two travelers are the same. That's why we take pride in curating personalized itineraries that cater to your individual preferences and desires. From thrilling adventures to cultural expeditions, we ensure that every aspect of your trip is tailored to exceed your expectations.
        </p>
        <p>
          We have nurtured strong relationships with trusted partners worldwide to ensure that your travel experience is seamless and authentic. Our team of passionate travel experts works tirelessly to uncover hidden gems, create immersive encounters, and provide you with insider knowledge that sets us apart.
        </p>
        <p>
          We are proud of the reputation we have earned for exceptional customer service and attention to detail. Your satisfaction is our top priority, and we go above and beyond to ensure that every moment of your journey is filled with joy, wonder, and awe-inspiring experiences.
          Join us at "Travel with Us" as we embark on a remarkable voyage together. Let us create a journey that will etch lifelong memories and ignite the spirit of adventure within you. Because with us, every step is a story waiting to be told.
        </p>
      </div>
      {
        offersData.length > 0
          ? (
            <div className={classes.proposal}>
              <h1 className={classes.proposal__title}>What we offer</h1>
              <div className={classes.offers} data-testid="our-offers">
                {offersData.map(({
                  id, title, image, description,
                }) => (
                  <div className={classes.offers__item} key={id}>
                    <img className={classes.offers__item__image} src={image} alt={title} />
                    <h2 className={classes.offers__item__title}>{title}</h2>
                    <p className={classes.offers__item__description}>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null
}
    </div>
  );
}

export default AboutUs;
