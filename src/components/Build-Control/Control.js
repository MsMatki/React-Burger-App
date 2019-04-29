import React from "react";
import classes from "./Control.css";

const Control = props => (
  <div className={classes.Control}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less} onClick={props.ingredientRemoved} disabled={props.disabled}>
      Less
    </button>
    <button className={classes.More} onClick={props.ingredientAdded}>
      More
    </button>
  </div>
);

export default Control;
