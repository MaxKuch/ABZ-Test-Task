import {combineReducers} from 'redux'
import {usersReducer} from './usersReducer'
import {appReducer} from './appReducer'
import {modalReducer} from './modalReducer'
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
    usersList: usersReducer,
    app: appReducer,
    modal: modalReducer,
    form: formReducer
})