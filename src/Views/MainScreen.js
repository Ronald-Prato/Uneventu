import React, { useContext } from 'react'
import Context from '../Store/Context'
import '../Styles/MainScreen.css'
import 'material-icons'
import SlideMenuPhone from '../Components/SlideMenuPhone'


const MainScreen = () => {
    const { state, actions } = useContext(Context);
    const theme = { dark: {'background': '#262626', color: 'white'}, light: {'background': 'white', color: '#262626'}};

    return (
        <div style={theme.dark} className="main-screen-container">
            <section className="menu-icon">
                <span className="material-icons">menu</span>
            </section>

            <section className="slide-menu-phone">
                <SlideMenuPhone />
            </section>


            <section className="main-layout-container">

                <div className="center"><h4 className="main-title align-self-center"> Uneventu </h4></div>
                <div className="center">
                    <span style={{fontSize: '10em'}} className="main-icon material-icons"> event_available </span>
                    <p style={{color: 'gray'}}> No events added jet </p>
                </div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <div  className="action-on-focus inline">
                        <span style={{fontSize: '1.5em'}} className="add-icon material-icons">add_circle</span>
                        <p className="add-new-event-message"> Add New </p>
                    </div>
                </div>
            </section>

        </div>
    )
};

export default MainScreen;