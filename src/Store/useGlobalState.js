import { useState, useEffect } from 'react'
import * as firebase from 'firebase'
import InitFirebase from "../Firebase/FirebaseInit";

let global_state = {
    events: InitFirebase(),
    menu: {transform: 'translateX(-100%)'},
    theme: {background: '#282828', color: 'white'},
    slideMenu: ''
};

const useGlobalState = () => {
    const [state, setState] = useState(global_state);

    const actions = (action) => {
        const {type, payload} = action;
        switch (type) {
            case 'setState':
                return setState(payload);
            case 'getState':
                return console.log(state);

            default: return state;
        }
    };

    return {state, actions}

};



export default useGlobalState;