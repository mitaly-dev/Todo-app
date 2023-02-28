import { ADDTODO, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, REMOVETODO, TOGGLE } from "../actionType"
import { initialState } from "./initialState"


const getTodoId = (todo)=>{
    const maxId = todo.reduce((maxId,todo)=>Math.max(todo.id,maxId),-1)
    return maxId+1
}


export const todoReducer = (state = initialState,action)=>{
    switch(action.type){
        case ADDTODO:
        return [...state,{id:getTodoId(state),...action.payload}]

        case REMOVETODO:
        return state.filter(todo=>todo.id!==action.payload)

        case TOGGLE:
        return state.map(todo=>{
           if(todo.id===action.payload.id){
            return {
                ...todo,
                completed:!todo.completed
            }
           }
           return todo
        })

        case CLEARCOMPLETED:
        return state.filter(todo=>!todo.completed)

        case ALLCOMPLETED:
        return state.map(todo=>{
            return {
                ...todo,
                completed: true
            }
        })
        
        case COLORSELECTED:
        return state.map(todo=>{
            if(todo.id===action.payload.id){
                return {
                    ...todo,
                   color:action.payload.color
                }
            }
            return todo
        })
        default:
        return state
    }
}