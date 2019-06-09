import React, { useContext, useState, useRef, useLayoutEffect } from 'react'
import Context from '../Store/Context'
import '../Styles/MainScreen.css'
import '../Styles/Loader.css'
import 'material-icons'
import SlideMenuPhone from '../Components/SlideMenuPhone'
import SlideMenuLaptop from '../Components/SlideMenuLaptop'
import RenderEvents from '../Components/RenderEvents'
import {withRouter} from 'react-router-dom'
import Hammer from 'hammerjs'



const MainScreen = withRouter(props => {
    const elm = useRef(null);
    const { state, actions } = useContext(Context);
    const [render, setRender] = useState('');
    const [mountUnmount, setMount] = useState(true);
    const [show, setShow] = useState(false);


    // Functions =>
    const showMenu = () => {
        actions({
            type: 'setState',
            payload: {...state, slideMenu: '', menu: {transform: 'translateX(0)'}}
        });
    };

    // ==================== LifeCycles ===================//
    useLayoutEffect(() => {
        const h = new Hammer(elm.current);
        h.on("panright", () => showMenu());
    });
    //===================================================//


    const layoutCompiler = () =>{
        setTimeout(() => setShow(true), 800);
    };
    layoutCompiler();

    const renderLayout = () => {
        if (show) {
            if (state.events.length === 0) {
                return (
                    <div>
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
            }else if (state.events.length > 0){
                return (
                    <div >
                        <section onClick={showMenu} className="showMenu-icon">
                            <span className="material-icons">showMenu</span>
                        </section>

                        <section className="slide-showMenu-phone">
                            <SlideMenuPhone />
                        </section>

                        <section className="slide-showMenu-laptop">
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
        }else {
            return (
                <div className="loader-container">
                    <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <h3 style={{fontWeight: 'lighter'}}> Checking you events list </h3>
                </div>
            )
        }
    };


    return (
        <div ref={elm} style={state.theme} className="main-screen-container">

            { renderLayout() }
        </div>
    )


});

export default MainScreen;