import {INIT_PAGE, SHOW_MORE} from './types'

const sortFn = (a, b) => {
    if (a.registration_timestamp < b.registration_timestamp) return 1; 
    if (a.registration_timestamp === b.registration_timestamp) return 0;
    if (a.registration_timestamp > b.registration_timestamp) return -1;
}

const initialState = {
    users: [],
    page: {}
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case INIT_PAGE:
            return {users: action.payload.users.sort(sortFn), page: action.payload}
        case SHOW_MORE:
            return {users: [...state.users, ...action.payload.users].sort(sortFn), page: action.payload}
        default: return state
    }
}
