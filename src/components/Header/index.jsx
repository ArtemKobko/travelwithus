import React, { useState } from 'react';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import cx from 'classnames';
import Logo from './Logo';
import classes from './Header.module.scss';
import Nav from './Nav';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen((p) => !p);
  };

  const menuToggle = !menuOpen ? (
    <CgMenuRight onClick={handleMenuToggle} />
  ) : (
    <CgClose onClick={handleMenuToggle} />
  );

  return (
    <header className={classes.header}>
      <Logo />
      <Nav />
      <div className={classes.header__menu}>
        <div className={classes.header__menu__toggle}>{menuToggle}</div>
        <aside className={cx(classes.menu, {
          [classes.show]: menuOpen,
        })}
        >
          <Nav isMenu menuToggle={handleMenuToggle} />
        </aside>
      </div>
    </header>
  );
}

export default Header;
