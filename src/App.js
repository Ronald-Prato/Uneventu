import React from 'react';
import './App.css';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';


import Router from './Router/Router'
import {BrowserRouter, Route} from "react-router-dom";

const App = () =>
    <BrowserRouter>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Route component={Router}/>
        </MuiPickersUtilsProvider>
    </BrowserRouter>;

export default App;
