import React, {useEffect, useContext} from 'react';
import './App.css';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Context from './Store/Context'
import DateFnsUtils from '@date-io/date-fns';
import Router from './Router/Router'
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Route component={Router}/>
            </MuiPickersUtilsProvider>
        </BrowserRouter>
    )
};


export default App;
