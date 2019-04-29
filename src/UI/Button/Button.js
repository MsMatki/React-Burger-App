import React from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "./Button.css";

const Button = props => {
  return (
    <Aux>
      <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}
      >
        {props.children}
      </button>
    </Aux>
  );
};

export default Button;
