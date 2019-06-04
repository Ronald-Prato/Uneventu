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
    return (
        <div className="main-slide-container">
            <h4 className="main-slide-menu-title"> Uneventu </h4>

            <section className="menu-options-container">
                <ul className="menu-container">
                    { options.map( option =>
                        <li className="single-option">
                            <span style={{fontSize: '1.8em', marginLeft: '.5em'}} className="material-icons"> {Object.values(option)} </span>
                            <p style={{fontSize: '1.1em'}} className="option-text"> {Object.keys(option)} </p>
                        </li>
                    )}
                </ul>
            </section>

        </div>
    )
}

export default SlideMenuPhone;