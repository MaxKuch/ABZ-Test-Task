import React from 'react'
import photo from './img/photo-cover.svg'
const User = (props) => {
    return (
        <div className="user d-flex flex-column align-items-center">
            <img src={props.img} onError={(e) => e.target.src = photo} className="user__img d-block" alt="user"/>
            <h4 className="user__name title title_dark text-center mb-2">{props.name}</h4>
            <p className="user__position parag parag_medium text-center">{props.position}</p>
            <div className="user__email-wrapper parag parag_medium text-center"> 
                <p className="user__email ">{props.email}</p>
                <div className="user__email-placeholder"> 
                    <span>{props.email}</span>
                </div>
            </div>
            
            <p className="user__phone parag parag_medium text-center">{props.phone}</p>
        </div>
    )
}

export default User