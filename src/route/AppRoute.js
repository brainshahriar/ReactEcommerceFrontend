import React, { Component, Fragment } from 'react'
import { Router,Route,Switch } from 'react-router'
import UserLoginPage from "../pages/UserLoginPage";
import HomePage from '../pages/HomePage'
import ContactPage from '../pages/ContactPage';


class AppRoute extends Component {
    render() {
        return (
            <Fragment>
            <Switch>
                 <Route exact path="/" component={HomePage} />
                 <Route exact path="/login" component={UserLoginPage} />
                 <Route exact path="/contact" component={ContactPage} />
            </Switch>
            </Fragment>
        )
    }
}

export default AppRoute
