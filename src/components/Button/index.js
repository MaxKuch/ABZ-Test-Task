import React from 'react'

const Button = ({disabled, handleClick, noBg, extraClasses, children, ...props}) => {
    if (disabled) {
        props['disabled'] = 'disabled';
    }
    return (
        <button {...props} onClick={handleClick} className = { `button parag parag_bold ${noBg ? 'button_no-bg' : ''} ${extraClasses}`}>
            {children}
        </button>
    )
}

export default Button