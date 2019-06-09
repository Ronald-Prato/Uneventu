import React, {useContext, useEffect, useState} from 'react'
import Context from '../Store/Context'
import '../Styles/RenderEvents.css'
import 'material-icons'

const RenderEvents = () => {
    const {state, actions} = useContext(Context);

    useEffect(() => {
        actions({
            type: 'updateStore'
        })
    });


    return (
        <div className="scrolled">
            <h4 className='events-title'> My events: </h4>
            <div className="make-grid">
                {
                    state.events.map(event =>
                        <div className='events-container'>
                            <div className="centralized">
                                <section className='single-event-container'>
                                    <h3 className="event-name"> {event.name} </h3>
                                    <p className="event-description"> {event.description} </p>

                                    <section className="option-icons-container">
                                        <div className="option-icons">
                                            <span className="material-icons single-icon i-like">favorite</span>
                                            <span className="material-icons single-icon i-save">save_alt</span>
                                            <span className="material-icons single-icon i-comment">chat_bubble_outline</span>
                                        </div>
                                    </section>
                                </section>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
};

export default RenderEvents