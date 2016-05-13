//
import {CHANGE_GREEN,CHANGE_YELLOW,CHANGE_RED} from '../../constants/TrafficLight.js'

const initState = {
    color:'red',
    time:'7'
};

export default function light(state=initState,action){
    switch (action.type){
        case CHANGE_GREEN:
            return {
                color:'green',
                time:'5'
            };

        case CHANGE_YELLOW:
            return  {
                color:'yellow',
                time:'3'
            };

        case CHANGE_RED:
            return Object.assign({},initState);

        default:
            return state;
    }
}