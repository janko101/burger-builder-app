import React from 'react';
import logo from '../assets/images/original.png'
import classes from './Logo.module.css'

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="MyBurger" />
    </div>
  );
}

export default Logo;
