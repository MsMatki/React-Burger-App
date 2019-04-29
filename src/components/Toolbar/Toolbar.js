import React from "react";
import classes from "./Toolbar.css";
import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems";
import HambMenu from "../Navigation/HambMenu/HambMenu";

const Toolbar = props => (
  <header className={classes.Toolbar}>
    <HambMenu click={props.toggle} />
    <div className={classes.Logo}>
      <Logo />
    </div>

    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
