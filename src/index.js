import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import useGlobalState from "./Store/useGlobalState";
import Context from './Store/Context'

const Index = () => {
    const store = useGlobalState();
    return (
        <Context.Provider value={store}>
            <App />
        </Context.Provider>
    )
};

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
