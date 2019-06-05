import React, { useContext, useState } from 'react'
import Context from '../Store/Context'
import '../Styles/MainScreen.css'
import 'material-icons'
import SlideMenuPhone from '../Components/SlideMenuPhone'
import SlideMenuLaptop from '../Components/SlideMenuLaptop'
import {Redirect} from 'react-router-dom'


const MainScreen = () => {
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


    return render === '' ?
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


            <section className="main-layout-container">

                <div className="center"><h4 className="main-title align-self-center"> Uneventu </h4></div>
                <div className="center">
                    <span style={{fontSize: '10em'}} className="main-icon material-icons"> event_available </span>
                    <p style={{color: 'gray'}}> No events added jet </p>
                </div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <div onClick={() => setTimeout(() => setRender('create'), 400)} className="action-on-focus inline">
                        <span style={{fontSize: '1.5em'}} className="add-icon material-icons">add_circle</span>
                        <p className="add-new-event-message"> Add New </p>
                    </div>
                </div>
            </section>

        </div>
        :
        <Redirect to={`/${render}`}/>
};

export default MainScreen;