import React, { useContext } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { BsArrowRight } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './Locations.module.scss';
import locationData from '../../utils/locationData';
import { Context } from '../../context';

function Locations({ destinationsPage }) {
  const navigate = useNavigate();
  const { setCountryId, setDesiredPrice, setButtonPush } = useContext(Context);
  const mapData = destinationsPage ? locationData : locationData.slice(0, 6);

  const booking = (id, price) => {
    setCountryId(id);
    setDesiredPrice(price);
    setButtonPush(true);
    navigate('/booking');
  };

  return (
    <div className={classes.container}>
      <div className={classes.locations}>
        <div className={classes.locations__content}>
          <h2 className={classes.locations__content__title}>{ destinationsPage ? 'All destinations' : 'Most visited' }</h2>
          <div className={destinationsPage
            ? classes.locations__content__countries : classes.locations__content__countriesHP}
          >
            {mapData.map(({
              id, location, isSummer, img, price, description,
            }) => (
              <div className={classes.country} key={id}>
                <img
                  src={img}
                  alt={location}
                  className={classes.country__img}
                />
                <div className={classes.overlay} />
                <div className={classes.country__content}>
                  <div className={classes.country__content__location}>
                    <h2>
                      <IoLocationOutline />
                      {location}
                    </h2>
                    {destinationsPage ? (
                      <p>
                        from
                        {' '}
                        {price}
                        $
                      </p>
                    ) : null}
                  </div>
                  {destinationsPage ? (
                    <>
                      <div className={classes.country__content__line} />
                      <p className={classes.country__content__description}>
                        {description}
                      </p>
                      <div className={classes.country__content__line} />
                      <button type="button" className={classes.country__content__button} onClick={() => booking(id, price)}>Book now</button>
                    </>
                  ) : null}

                </div>
                {isSummer && (
                <p className={classes.country__tag}>Summer 2023</p>
                )}
              </div>
            ))}
          </div>
          {(!destinationsPage && (
          <div className={classes.locations__content__viewmore}>
            <Link to="/destinations">
              view more
              <BsArrowRight />
            </Link>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Locations.propTypes = {
  destinationsPage: PropTypes.bool.isRequired,
};

export default Locations;
