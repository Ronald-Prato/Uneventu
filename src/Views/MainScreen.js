import React, { useContext, useState } from 'react'
import Context from '../Store/Context'
import '../Styles/MainScreen.css'
import 'material-icons'
import SlideMenuPhone from '../Components/SlideMenuPhone'
import SlideMenuLaptop from '../Components/SlideMenuLaptop'
import RenderEvents from '../Components/RenderEvents'
import {withRouter} from 'react-router-dom'


const MainScreen = withRouter(props => {
    const { state, actions } = useContext(Context);
    const [render, setRender] = useState('');
    const [mountUnmount, setMount] = useState(true);

    // Functions =>
    const showMenu = () => {
        actions({
            type: 'setState',
            payload: {...state, slideMenu: '', menu: {transform: 'translateX(0)'}}
        });
    };

    const renderLayout = () => {
        if (state.events.length === 0) {
            return (
                <div style={state.theme} className="main-screen-container">
                    <section onClick={showMenu} className="menu-icon">
                        <span className="material-icons">menu</span>
                    </section>

                    <section className="slide-menu-phone">
                        <SlideMenuPhone />
                    </section>

                    <section className="slide-menu-laptop">
                        <SlideMenuLaptop />
                    </section>


                    <div className="reduce-height">
                        <section className="main-layout-container">

                            <div className="center"><h4 className="main-title align-self-center"> Uneventu </h4></div>
                            <div className="center">
                                <span style={{fontSize: '10em'}} className="main-icon material-icons"> event_available </span>
                                <p style={{color: 'gray'}}> No events added jet </p>
                            </div>
                            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                <div onClick={() => setTimeout(() => props.history.push('/create'), 400)} className="action-on-focus inline">
                                    <span style={{fontSize: '1.5em'}} className="add-icon material-icons">add_circle</span>
                                    <p className="add-new-event-message"> Add New </p>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            )
        }else {
            return (
                <div style={state.theme} className="main-screen-container">
                    <section onClick={showMenu} className="menu-icon">
                        <span className="material-icons">menu</span>
                    </section>

                    <section className="slide-menu-phone">
                        <SlideMenuPhone />
                    </section>

                    <section className="slide-menu-laptop">
                        <SlideMenuLaptop />
                    </section>


                    <div className="main-layout-container-events">
                        <section className="main-layout-events">
                            <RenderEvents/>
                        </section>
                    </div>

                </div>
            )
        }
    };


    return (
        <div>
            { renderLayout() }
        </div>
    )


});

export default MainScreen;