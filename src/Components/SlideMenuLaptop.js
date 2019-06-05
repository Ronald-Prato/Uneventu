import React, { useContext, useState } from 'react'
import Context from '../Store/Context'
import '../Styles/SlideMenuLaptop.css'
import {Redirect} from "react-router-dom";


const SlideMenuLaptop = () => {
    //  ==================   Hooks ==================== //
    const {state, actions} = useContext(Context);
    // ================================================ //



    // ==================== Functions ====================//
    const options = [
        {'Add': 'add_circle'},
        {'My Events': 'event_note'},
        {'Top Events': 'star'}
    ];


    const optionSelected = (option) => () => {
        switch (option[0]) {
            case 'Add': {
                setTimeout(() => actions({type: 'setState', payload: {...state, slideMenu: 'create'}}), 400)
            }break;
            case 'My Events': {
                actions({type: 'slideRendering', payload: {...state, slideMenu: 'my_events'}})
            }break;
            case 'Top Events': {
                actions({type: 'slideRendering', payload: {...state, slideMenu: 'top_events'}})
            }break;
            default: return state.slideMenu;
        }
    };

    // ====================================================//


    // =========================== Render ========================//
    return state.slideMenu === '' ?
        <div className="main-slide-container-l">
            <div className="title-container">
                <h4 className="main-slide-menu-title-l"> Uneventu </h4>
            </div>

            <section className="menu-options-container">
                <ul className="menu-container">
                    {options.map(option =>
                        <li onClick={optionSelected(Object.keys(option))} className="single-option-l">
                                    <span style={{fontSize: '1.4em', marginLeft: '1.2em'}}
                                          className=" material-icons"> {Object.values(option)} </span>
                            <p style={{fontSize: '.9em', marginLeft: '.5em'}} className="option-text"> {Object.keys(option)} </p>
                        </li>
                    )}
                </ul>
            </section>
        </div>
        :
        <Redirect to={`/${state.slideMenu}`}/>;
    // ===========================================================//

};

export default SlideMenuLaptop;