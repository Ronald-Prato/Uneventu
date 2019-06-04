import React from 'react';
import './App.css';

import Router from './Router/Router'
import {BrowserRouter, Route} from "react-router-dom";

const App = () =>
    <BrowserRouter>
        <Route component={Router}/>
    </BrowserRouter>;

export default App;
