import React, { useContext } from 'react'
import Context from '../Store/Context'
import '../Styles/RenderEvents.css'

const RenderEvents = () => {
    const {state, actions} = useContext(Context);

    return (
        <div>
            <h4 className='events-title'> My events: </h4>
            {
                state.events.map(event =>
                    <div className='events-container'>
                        <section className='single-event-container'>
                            <h3 className="event-name"> {event.name} </h3>
                        </section>
                    </div>
                )
            }
        </div>
    )
};

export default RenderEvents