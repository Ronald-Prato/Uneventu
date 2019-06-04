import React from "react";

import { Route, Switch} from "react-router-dom";

import MainScreen from '../Views/MainScreen'

const AppRouter = () =>
    <Switch>
        <Route path='/' exact component={MainScreen}/>
        <Route path='/main/' component={MainScreen}/>
    </Switch>;

export default AppRouter