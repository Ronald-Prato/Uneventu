import React, { useContext, useState } from 'react'
import Context from '../Store/Context'
import '../Styles/SlideMenuPhone.css'
import {withRouter} from 'react-router-dom'

const SlideMenuPhone = withRouter(props => {
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
                setTimeout(() => props.history.push('/create'), 400)
            }break;
            case 'My Events': {
                props.history.push('/my_events')
            }break;
            case 'Top Events': {
                props.history.push('/top_events')
            }break;
            default: return state.slideMenu;
        }
    };

    // const renderLayout = () => {
    //     switch (state.slideMenu) {
    //         case '' : return (
    //
    //         );
    //         case 'hide': return <div/>;
    //
    //         default: return <Redirect to={`/${state.slideMenu}`}/>;
    //
    //     }
    // };
    // ====================================================//


    // =========================== Render ========================//
        return (
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
        )
    // ===========================================================//

});

export default SlideMenuPhone;