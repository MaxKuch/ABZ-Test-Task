import React from 'react'

const Section = ({extraClasses, children, id, refProp}) =>{
    return (
        <section ref={refProp} id={id} className={`section ${extraClasses ? extraClasses : ''}`}>
            <div className="main-container">
                <div className="container-fluid">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Section