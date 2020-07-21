import {SHOW_LOADER, HIDE_LOADER, ENABLE_SUBMIT, DISABLE_SUBMIT, SET_REG_SECTION_REF} from './types'

const initialState = {
    loading: true,
    posting: false,
    regSectionRef: null
}

export const appReducer = (state = initialState, action) => {
    switch (action.type){
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        case ENABLE_SUBMIT:
            return {...state, posting: false}
        case DISABLE_SUBMIT:
            return {...state, posting: true}
        case SET_REG_SECTION_REF: {
            return {...state, regSectionRef: action.payload}
        }
        default: return state
    }
}
