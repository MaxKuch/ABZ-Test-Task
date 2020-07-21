import React from 'react'
import { connect } from 'react-redux'
import Button from '../Button'
import {CLOSE} from '../redux/types'
const Modal = ({id, opened, message, status, closeModal}) => {
    return (
        <div className={`modal ${opened ? 'show' : 'hide'}`} id={id}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title title">{status}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p className="parag parag_dark">{message}</p>
                    </div>
                    <div className="modal-footer">
                        <Button extraClasses="modal-btn" handleClick={closeModal}>
                            Great
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )  
}

const mapStateToProps = state => state.modal

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch({type: CLOSE})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
