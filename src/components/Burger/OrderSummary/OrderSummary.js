import React, {Component} from 'react';
//import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Button from "../../UI/Button/Button";


class OrderSummary extends Component {
    //This could be a functional Components. Doesn't have to be a Class


    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[OrderSummary] WillUpdate');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                // Outer {} : dynamic entry , Inner {} : Javascript Object
                return (
                    //Because a warning is shown i add a key
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}> {igKey} </span> : {this.props.ingredients[igKey]}
                    </li>);
            });

        return(

            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients : </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong> </p>
                <p>Continue to Checkout ?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>

        )
    }


}


export default OrderSummary;