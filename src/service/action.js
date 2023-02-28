import { ADDTODO, ALLCOMPLETED, CLEARCOMPLETED, COLORCHANGED, COLORSELECTED, STATUSCHANGED, TOGGLE } from "./actionType"

export const addedTodo =(data)=>{
    return {
        type:ADDTODO,
        payload:data
    }
}
export const removeTodo =(id)=>{
    return {
        type:ADDTODO,
        payload:id
    }
}
export const allCompleted =()=>{
    return {
        type:ALLCOMPLETED
    }
}

export const colorSelect =(id,color)=>{
    return {
        type:COLORSELECTED,
        payload:{
            id,
            color
        }
    }
}

export const toggle =(toggleId)=>{
    return {
        type:TOGGLE,
        payload:toggleId
    }
}

export const clearCompleted =()=>{
    return {
        type:CLEARCOMPLETED
    }
}


// filter

export const statusChanged =(status)=>{
    return {
        type:STATUSCHANGED,
        payload:status
    }
}

export const colorChanged =(color,changeType)=>{
    return {
        type:COLORCHANGED,
        payload:{color,changeType}
    }
}
