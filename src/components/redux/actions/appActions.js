import { SHOW_LOADER,  HIDE_LOADER, DISABLE_SUBMIT, ENABLE_SUBMIT, SET_REG_SECTION_REF} from '../types'
const userActions = {
  showLoader(){
      return {
          type: SHOW_LOADER
      }
  },
  hideLoader(){
      return {
          type: HIDE_LOADER
      }
  },
  diasbleSubmit(){
      return {
          type: DISABLE_SUBMIT
      }
  },
  enableSubmit(){
      return {
          type: ENABLE_SUBMIT
      }
  },
  setRegSectionRef(ref){
      return {
          type: SET_REG_SECTION_REF,
          payload: ref
      }
  } 
}

export default userActions