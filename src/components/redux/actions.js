import {INIT_PAGE, SHOW_MORE, SHOW_LOADER,  HIDE_LOADER, DISABLE_SUBMIT, ENABLE_SUBMIT, OPEN, SET_REG_SECTION_REF} from './types'
import fetch from 'cross-fetch'

export function initPage(){
    return async dispatch => {
        const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')
        const json = await response.json()
        dispatch(hideLoader())
        dispatch({type: INIT_PAGE, payload: json})
    }
}

export function showMore(nextPage){
    return async dispatch => {
    dispatch(showLoader())
    const response = await fetch(nextPage)
    const json = await response.json()
    dispatch(hideLoader())
    dispatch({type: SHOW_MORE, payload: json})
    }
}

export function addUser({position_id, name, email, phone, photo}){
    return async dispatch => {
        dispatch(diasbleSubmit())
        let formData = new FormData();
        formData.append('position_id', position_id);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('photo', photo);
        const tokenResponse = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
        const tokenJson = await tokenResponse.json()
        const { token } = tokenJson
        const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            method: 'POST',
            body: formData,
            headers: {
              'Token': token,
            }
        })
        const responseJson = await response.json()
        if(responseJson.success){
            dispatch({type: OPEN, payload: {status: 'Congratulations', message: 'You have successfully passed the registration'}})
            dispatch(initPage())
        }
        else dispatch({type: OPEN, payload: {status: 'Error', message: responseJson.message}})

        dispatch(enableSubmit())
        
    }
}

export function showLoader(){
    return {
        type: SHOW_LOADER
    }
}


export function hideLoader(){
    return {
        type: HIDE_LOADER
    }
}

export function diasbleSubmit(){
    return {
        type: DISABLE_SUBMIT
    }
}

export function enableSubmit(){
    return {
        type: ENABLE_SUBMIT
    }
}

export function setRegSectionRef(ref){
    return {
        type: SET_REG_SECTION_REF,
        payload: ref
    }
} 