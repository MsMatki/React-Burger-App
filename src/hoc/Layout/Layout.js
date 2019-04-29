import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.css";
import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {

  state = {
    showSideDrawer: false
  }

  sideDraweClose = () => {
    this.setState({
      showSideDrawer: false
    })
  }

  toggleDrawerOpen = () => {
    this.setState( (prevState ) => {
     return { showSideDrawer: !prevState.showSideDrawer}
    })
  }

  render() {
    return (
      <Aux>
        <Toolbar toggle={this.toggleDrawerOpen}/>
        <SideDrawer closed={this.sideDraweClose} open={this.state.showSideDrawer}/>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
