import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {


    //Extracts the keys of an object and returns that into an array
    //Then with map, execute a function on each element in the input array
    //TODO CLASS 130
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) =>{
             return <BurgerIngredient key={igKey+i} type={igKey} />
        })
        //Reduce takes the previous value and the current value, and then an initial value, in our case an empty array
    }).reduce((arr, el) => {
        //we adjust the reduces value
            return arr.concat(el)
    } , []);

    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding Ingredients!</p>
    }


    //console.log(igKey);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

export default burger;