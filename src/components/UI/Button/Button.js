import React from 'react';
import classes from './Button.css';

const Button = (props) => {
    //assigning two classes, first the basic Button class nad then the one
    //i am about to get from the props
    <button className={[classes.Button, classes[props.btnType]].join(' ')}
            onClick={props.clicked}>{props.children}></button>
}


export default Button;