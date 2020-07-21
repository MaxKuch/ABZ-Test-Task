import {OPEN, CLOSE} from './types'

const initialState = {
    opened: false,
}

export const modalReducer = (state = initialState, action) => {
    switch(action.type){
        case OPEN:
            return {opened: true, status: action.payload.status, message: action.payload.message}
        case CLOSE:
            return {...state, opened: false}
        default: 
            return state
    }
}

