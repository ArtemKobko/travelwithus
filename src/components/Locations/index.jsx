import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import classes from './Locations.module.scss';
import locationData from '../../utils/locationData';

function Locations() {
  const mapData = locationData;
  return (
    <div className={classes.container}>
      <div className={classes.destinations}>
        <div className={classes.destinations__content}>
          <h2 className={classes.destinations__content__title}>Most visited</h2>
          <div className={classes.destinations__content__locations}>
            {mapData.map(({
              id, location, isSummer, img,
            }) => (
              <div className={classes.locations__item} key={id}>
                <img
                  src={img}
                  alt={location}
                  className={classes.locations__item__img}
                />
                <div className={classes.overlay} />
                <div className={classes.locations__item__content}>
                  <IoLocationOutline />
                  <h2 className={classes.locations__item__content__location}>
                    {location}
                  </h2>
                </div>
                {isSummer && (
                <div className={classes.locations__item__tag}>Summer 2023</div>
                )}
              </div>
            ))}
          </div>
          <div className={classes.destinations__content__viewmore}>
            <Link to="/destinations">
              view more
              {' '}
              <BsArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
