import fetch from 'cross-fetch'
import {INIT_PAGE, SHOW_MORE } from '../types'
import appActions from './appActions'
import modalActions from './modalActions'

const userActions = {
  initPage(){
      return async dispatch => {
          const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')
          const json = await response.json()
          dispatch(appActions.hideLoader())
          dispatch({type: INIT_PAGE, payload: json})
      }
  },
  showMore(nextPage){
      return async dispatch => {
        dispatch(appActions.showLoader())
        const response = await fetch(nextPage)
        const json = await response.json()
        dispatch(appActions.hideLoader())
        dispatch({type: SHOW_MORE, payload: json})
      }
  },
  addUser: ({position_id, name, email, phone, photo}) => {
    return async dispatch => {
      dispatch(appActions.diasbleSubmit())
      let formData = new FormData()
      formData.append('position_id', position_id)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('phone', phone)
      formData.append('photo', photo)
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
          dispatch(modalActions.openModal({
              status: 'Congratulations', 
              message: 'You have successfully passed the registration'
            })
          )
          dispatch(this.initPage())
      }
      else dispatch(modalActions.openModal({
        status: 'Error', 
        message: responseJson.message
      }))
      dispatch(appActions.enableSubmit())
    }
  }
}

export default userActions