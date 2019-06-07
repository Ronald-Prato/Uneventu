import React, {useContext, useState} from 'react'
import Context from '../Store/Context'
import '../Styles/CreateEvent.css'
import DateFnsUtils from "@date-io/date-fns";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom'

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const materialTheme = createMuiTheme({
    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: '#282828'
            },
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                // backgroundColor: "#282828",
                // color: "white",
            },
        },
        MuiPickersDay: {
            day: {
                color: 'black',
            },
            isSelected: {
                backgroundColor: 'red',
            },
            current: {
                color: 'red',
            },
        },
        MuiPickersModal: {
            dialogAction: {
                color: 'black',
            },
        },
        MuiPickersCalendar: {
            calendar: {
                color: 'blue'
            },
        },
        KeyboardDatePicker: {
            background: 'white'
        }
    },
});

const CreateEvent = withRouter(props => {
    const {state, actions} = useContext(Context);
    const local_state = {
        name: "",
        description: "",
        date: new Date('2014-08-18T21:11:54'),
        time: new Date('2014-08-18T21:11:54')
    };
    const [localState, setLocalState] = useState(local_state);
    const [render, setRender] = useState('');

    const handleDateChange = date => {
        setLocalState({...localState, date});
    };

    const handleTimeChange = time => {
        setLocalState({...localState, time});
    };

    const submitLocalState = e => {
        e.preventDefault();
        actions({
            type: 'setState',
            payload: {...state, events: [...state.events, localState]}
        });

        let timerInterval;
        Swal.fire({
            title: 'Adding your event',
            html: '<strong> Please wait </strong>',
            timer: 1500,
            onBeforeOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                }, 500)
            },
            onClose: () => {
                clearInterval(timerInterval)
            }
        }).then(() =>
            Swal.fire({
                title: 'Success',
                text: 'You have added a new event!',
                type: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#39dd77',
                confirmButtonText: 'Add more',
                cancelButtonText: 'Back to menu'
            }).then(res => {
                if (!res.value) {
                    props.history.push('/main');
                }
            }).then(() => setLocalState(local_state))
        )
    };

    const backToMenu = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, go to menu'
        }).then((result) => {
            if (result.value) {
                props.history.push('/main');
            }
        })
    };



    return (
        <div className="create-event-container">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ThemeProvider theme={materialTheme}>

                    <h2 className="create-event-title"> Create a New Event </h2>

                    <div className="center-in-l">
                        <section className="form-container">
                            <div className="d-flex flex-column justify-content-center single-input-container">
                                <p className="placeHolder">Event Name</p>
                                <input
                                    onChange={e => setLocalState({...localState, name: e.target.value})}
                                    type="text"
                                    className="form-item form-name"
                                    value={localState.name}
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center single-input-container-2">
                                <p className="placeHolder">Event Description</p>
                                <textarea
                                    onChange={e => setLocalState({...localState, description: e.target.value})}
                                    className="form-item form-description"
                                    value={localState.description}
                                />
                            </div>

                            <div className="d-flex flex-column justify-content-center">

                                <KeyboardDatePicker
                                    margin="normal"
                                    id="mui-pickers-date"
                                    className="mui-pickers"
                                    label="Date picker"
                                    value={localState.date}
                                    onChange={handleDateChange}
                                    classes={{'background': 'white'}}
                                />

                                <KeyboardTimePicker
                                    margin="normal"
                                    id="mui-pickers-time"
                                    className="mui-pickers"
                                    label="Time picker"
                                    value={localState.time}
                                    onChange={handleTimeChange}
                                />

                            </div>

                            <section className="buttons-container">
                                <button onClick={submitLocalState} className="form-button b-create"> Create</button>
                                <button onClick={backToMenu} className="form-button b-cancel"> Cancel</button>
                            </section>
                        </section>
                    </div>

                </ThemeProvider>
            </MuiPickersUtilsProvider>

            {/*<button style={{position: 'absolute', top: 0}} onClick={() => console.log(state.events)}>Check</button>*/}
            {/*<button style={{position: 'absolute', top: 0, right: '15%'}} onClick={() => console.log(localState)}>Check Local</button>*/}
        </div>
    )

});

export default (CreateEvent);