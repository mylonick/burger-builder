import React from 'react';
import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        {/*It is correct like that, check CSS to see how it works*/}
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default drawerToggle;