import React, { Component, Fragment } from 'react'
import { Router,Route } from 'react-router'
import { Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'

class AppRoute extends Component {
    render() {
        return (
                <Fragment>
                    <Switch>
                        <Route exact to="/" Component={HomePage}></Route>
                    </Switch>
                </Fragment>
        )
    }
}

export default AppRoute
