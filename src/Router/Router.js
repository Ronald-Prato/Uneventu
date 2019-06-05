import React from "react";

import { Route, Switch} from "react-router-dom";

import MainScreen from '../Views/MainScreen'
import CreateEvent from '../Views/CreateEvent'

const AppRouter = () =>
    <Switch>
        <Route path='/' exact component={MainScreen}/>
        <Route path='/main/' component={MainScreen}/>
        <Route path='/create/' component={CreateEvent}/>
    </Switch>;

export default AppRouter