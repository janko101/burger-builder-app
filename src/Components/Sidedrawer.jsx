import React from 'react';
import Logo from './Logo';
import NavigationItems from './NavigationItems';

const Sidedrawer = (props) => {
  return (
    <div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
}

export default Sidedrawer;
