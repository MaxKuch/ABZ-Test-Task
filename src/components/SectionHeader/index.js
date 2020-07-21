import React from 'react'

const SectionHeader = ({title, addition, extraClasses}) => {
    return (
        <div className={`section__header ${extraClasses ? extraClasses : ''}`}>
            <h2 className="section__title title_dark main-title text-center">{title}</h2>
            {addition ?  <p className="section__addition parag parag_medium text-center mx-auto">{addition}</p> : ''}
        </div>
    )
}

export default SectionHeader