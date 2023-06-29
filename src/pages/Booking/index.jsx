import React, { useContext } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { Context } from '../../hooks/context';
import classes from './Booking.module.scss';
import locationData from '../../utils/locationData';
import hotels from '../../utils/hotels';
import Hero from '../../components/Hero';

function BookNow() {
  const { countryId, desiredPrice, buttonPush } = useContext(Context);
  const country = locationData.find((element) => element.id === +countryId);
  const fitToPrice = country.price >= desiredPrice;
  if (buttonPush) {
    return (
      <div className={classes.container}>
        <div className={classes.offers}>
          {fitToPrice ? (
            <div className={classes.offers__message}>
              For this destination prices starts from
              {' '}
              {country.price}
              $ per person
            </div>
          ) : null }
          {hotels.map(({
            id, name, image, desription,
          }) => (
            <div key={id} className={classes.hotel}>
              <img src={image} alt={name} className={classes.hotel__image} />
              <div className={classes.hotel__information}>
                <div>
                  <h2 className={classes.hotel__information__name}>{name}</h2>
                  <div className={classes.hotel__information__location}>
                    <IoLocationOutline />
                    <p>{country.location}</p>
                  </div>
                </div>
                <div>
                  <p className={classes.hotel__information__description}>{desription}</p>
                  <p className={classes.hotel__information__price}>
                    {fitToPrice ? Math.ceil(country.price / 100) * 100 + id * 20 : Math.ceil(desiredPrice / 100) * 100 - id * 130}
                    $ per person
                  </p>
                  <button type="button" className={classes.hotel__information__button}>Proceed to checkout</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <Hero />;
}
export default BookNow;
