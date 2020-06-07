import React from 'react';
//import classes from './Modal.css';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            // Outer {} : dynamic entry , Inner {} : Javascript Object
            return (
                //Because a warning is shown i add a key
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}> {igKey} </span> : {props.ingredients[igKey]}
                </li>);
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients : </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout ?</p>
        </Aux>
    );
};

export default orderSummary;