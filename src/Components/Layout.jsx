import React from "react";

const Layout = (props) => {
  return (
    <>
      <div>Toolbar, Sidedrawer, Backdrop</div>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
