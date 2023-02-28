import { ADDTODO } from "../actionType"
import { initialState } from "./initialState"



export const todoReducer = (state = initialState,action)=>{
    switch(action.type){
        case ADDTODO:
        return [...state,{...action.payload}]
        default:
        return state
    }
}