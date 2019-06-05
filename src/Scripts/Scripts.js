import { useContext } from 'react'
import Context from '../Store/Context'



const slideMove = option => {

    const {state, actions} = useContext(Context);

    const direction = () => {
        option === 'left' ?
            actions({
                type: 'setState',
                payload: {...state, menu: {transform: 'translateX(-100%)', slideMenu: 'hide'}}
            })
            :
            actions({
                type: 'setState',
                payload: {...state, menu: {transform: 'translateX(0)', slideMenu: ''}}
            });
    };

    return direction()
};

export {slideMove, }