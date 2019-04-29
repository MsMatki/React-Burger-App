import React from 'react'
import Aux from '../../../hoc/Auxiliary';
import classes from './HambMenu.css'

const HambMenu = (props) => (
    <Aux>
        <div onClick={props.click} className={classes.HambMenu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </Aux>
)



export default HambMenu;