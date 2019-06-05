import React, { useContext } from 'react'
import Context from '../Store/Context'
import '../Styles/SlideMenuPhone.css'

const SlideMenuPhone = () => {
    const {state, actions} = useContext(Context);
    const options = [
        {'Add': 'add_circle'},
        {'My Events': 'event_note'},
        {'Top Events': 'star'}
    ];

    const hideMenu = () => {
        actions({
            type: 'setState',
            payload: {...state, menu: {transform: 'translateX(-100%)'}}
        });
    };

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
                    { options.map( option =>
                        <li className="single-option">
                            <span style={{fontSize: '1.8em', marginLeft: '.5em'}} className="material-icons"> {Object.values(option)} </span>
                            <p style={{fontSize: '1em'}} className="option-text"> {Object.keys(option)} </p>
                        </li>
                    )}
                </ul>
            </section>


        </div>
    )
}

export default SlideMenuPhone;