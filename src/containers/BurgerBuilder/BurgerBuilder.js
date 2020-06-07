import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
}

class BurgerBuilder extends Component {
    
    //CAN BE ALSO DONE LIKE THIS
    // constructor(props) {
    //     super();
    //     this.state ={}
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice : 4,
        purchasable: false,
        purchasing: false


    }


    updatePurchaseState (ingredients) {

        //we need to turn the object to an array again in order to sum up the ingredients number
        //TODO 137
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            }).reduce((sum, el) => {
                return sum + el;
            }, 0);
        //TRUE OR FALSE, DEPENDING IF WE HAVE AT LEAST ONE INGREDIENT
        this.setState({purchasable: sum > 0});
    }



    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        //Update in an immutable way
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients : updatedIngredients});

        this.updatePurchaseState(updatedIngredients);

    }



    removeIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type];

        if (oldCount <= 0){
            return;
        }

        const updatedCount = oldCount - 1;
        //Update in an immutable way
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({totalPrice: newPrice, ingredients : updatedIngredients});

        this.updatePurchaseState(updatedIngredients);

    }

    // Won't work because of the syntax it cannot refer to this
    // purchaseHandler () {
    //     this.setState( {purchasing: true});
    // }

     purchaseHandler = () => {
         this.setState( {purchasing: true});
     }

    purchaseCancelHandler = () => {
        this.setState( {purchasing: false});
    }





    render() {
        console.log(this.state);
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo){
            //Will return true or false
            disabledInfo[key]  = disabledInfo[key] <= 0;
        }
        // DisabledInfo =  {salad: true, meat: false....etc}

        return (
            <Aux>
                    <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                        <OrderSummary ingredients={this.state.ingredients}/>
                    </Modal>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    //if it's not!
                    purchasable={!this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price = {this.state.totalPrice}
                    />
            </Aux>
        );
    }
}

export default BurgerBuilder;