import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './Nav.module.scss';

function Nav({ isMenu, menuToggle }) {
  const navigate = useNavigate();
  const booking = () => {
    if (isMenu) {
      menuToggle();
    }
    navigate('/book-now');
  };

  return (
    <nav className={isMenu ? classes.menu__nav : classes.nav}>
      <ul onClick={menuToggle}>
        <li>
          <Link to="/new-tours">Summer 2023</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>
      <button type="button" className={classes.menu__nav__button} onClick={booking}>
        Book Now
      </button>
    </nav>
  );
}
Nav.defaultProps = {
  isMenu: undefined,
  menuToggle: undefined,
};

Nav.propTypes = {
  isMenu: PropTypes.bool,
  menuToggle: PropTypes.func,
};
export default Nav;
