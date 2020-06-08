import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import classes from './SideDrawer.css';

const sideDrawer = (props) => {


    return(

        <div className={classes.SideDrawer}>
            <Backdrop/>
            <Logo/>
            <nav>
                <NavigationItems/>
            </nav>

        </div>

    );
}

export default sideDrawer;