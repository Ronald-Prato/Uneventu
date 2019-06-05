import React, { useContext, useState } from 'react'
import Context from '../Store/Context'
import '../Styles/SlideMenuPhone.css'
import {Redirect} from "react-router-dom";


const SlideMenuPhone = () => {
    //  ==================   Hooks ==================== //
    const {state, actions} = useContext(Context);
    // ================================================ //



    // ==================== Functions ====================//
    const options = [
        {'Add': 'add_circle'},
        {'My Events': 'event_note'},
        {'Top Events': 'star'}
    ];

    const hideMenu = () => {
        actions({
            type: 'setState',
            payload: {...state, menu: {transform: 'translateX(-100%)', slideMenu: 'hide'}}
        });
    };

    const optionSelected = (option) => () => {
        switch (option[0]) {
            case 'Add': {
                hideMenu();
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

    const renderLayout = () => {
        switch (state.slideMenu) {
            case '' : return (
                <div style={state.menu} className="main-slide-container">
                    <div className="title-container">
                        <h4 className="main-slide-menu-title"> Uneventu </h4>
                        <span
                            onClick={hideMenu}
                            style={{fontSize: '2.5em'}}
                            className="material-icons">
                    arrow_left
                    </span>
                    </div>

                    <section className="menu-options-container">
                        <ul className="menu-container">
                            {options.map(option =>
                                <li onClick={optionSelected(Object.keys(option))} className="single-option">
                                    <span style={{fontSize: '1.8em', marginLeft: '.5em'}}
                                          className="material-icons"> {Object.values(option)} </span>
                                    <p style={{fontSize: '1em'}} className="option-text"> {Object.keys(option)} </p>
                                </li>
                            )}
                        </ul>
                    </section>
                </div>
            );
            case 'hide': return <div/>;

            default: return <Redirect to={`/${state.slideMenu}`}/>;

        }
    };
    // ====================================================//


    // =========================== Render ========================//
        return renderLayout()
    // ===========================================================//

};

export default SlideMenuPhone;