import { OPEN, CLOSE } from '../types'

const modalActions = {
  openModal(content){
    return {
      type: OPEN, 
      payload: content
    }
  },
  closeModal(){
    return {
      type: CLOSE
    }
  }
}

export default modalActions