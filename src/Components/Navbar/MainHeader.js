import React from "react";

import classes from "./Header.module.css";
import Navigation from './Navigation';

const MainHeader = () => {
  return (
    <header className={classes["main-header"]}>
      <h1>Chad Koivuneva</h1>
      <Navigation/>
    </header>
  );
};

export default MainHeader;
