import { COLORCHANGED, STATUSCHANGED } from "../actionType";
import { filterInitialState } from "./initialState";

export const filterReducer = (state = filterInitialState,action)=>{
    switch(action.type){
        case STATUSCHANGED:
        return {...state,status:action.payload}
        case COLORCHANGED:
        const {color,changeType} = action.payload 
        switch(changeType){
            case 'added':
            return {
                ...state,
                colors:[
                    ...state.colors, 
                    color
                ]
            }
            case 'removed':
            return {
                ...state,
                colors:state.colors.filter
                
            }
            default  : 
            break
        }
        default:
        return state
    }
}