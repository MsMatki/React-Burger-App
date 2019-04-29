import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems";
import classes from "./SideDrawer.css";
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary'

const SideDrawer = props => {

    let attacheCLasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attacheCLasses = [classes.SideDrawer, classes.Open]
    }

  return (
      <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
    <div className={attacheCLasses.join(' ')}>
      <div className={classes.Logo}>
        <Logo />
      </div>

      <nav>
        <NavigationItems />
      </nav>
    </div>
    </Aux>
  );
};

export default SideDrawer;
