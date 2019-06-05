import { useState } from 'react'

let global_state = {
    events: [],
    menu: {transform: 'translateX(-100%)'},
    theme: {background: '#282828', color: 'white'}
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