import React from 'react';
import classes from './Toolbar.module.css'
import Logo from './Logo';

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div>Menu</div>
      <Logo />
      <nav>
        ...
      </nav>
    </header>
  );
}

export default Toolbar;
