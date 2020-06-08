import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';
import sideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";


class Layout extends Component {
    state = {
        showSideDrawer : true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer : false})
    }

    sideDrawerToggleHandler = () => {

        //NOT LIKE THIS
        // this.setState({showSideDrawer : !this.state.showSideDrawer})
        //LIKE THIS
        this.setState((prevState) => {
            return {showSideDrawer : !prevState.showSideDrawer};
        });

    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;