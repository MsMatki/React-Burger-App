import React from "react";
import classes from "./BuildControls.css";
import Control from "../Build-Control/Control";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(control => (
      <Control
        ingredientAdded={() => props.ingredientAdded(control.type)}
        ingredientRemoved={() => props.ingredientRemoved(control.type)}
        key={control.label}
        label={control.label}
        disabled={props.disabled[control.type]}
      />
    ))}
    <button 
    disabled={!props.purchasable} 
    className={classes.OrderButton}
    onClick={props.purchaseHandler}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
