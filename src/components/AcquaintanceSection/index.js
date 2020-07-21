import React from 'react'
import { useSelector } from 'react-redux'
import Section from '../Section'
import img from './img/man-laptop.svg'
import Button from '../Button'
import SectionHeader from '../SectionHeader'
import scrollToElement from '../../helpers/scrollToElement'
const AcquaintanceSection = () => {
    const ref = useSelector(({app}) => app.regSectionRef)
    return (
        <Section extraClasses="section-acquaintance">
            <SectionHeader extraClasses="section-acquaintance__header" title="Let's get acquainted"/>
            <div className="row section-acquaintance__content">
                <div className="col-md-5 section-acquaintance__img">
                    <img src={img} alt="man with laptop"/>
                </div>
                <div className="col-md-7 section-acquaintance__text">
                    <h3 className="title title_dark section-acquaintance__second-title">I am cool frontend developer</h3>
                    <p className="section-acquaintance__parag parag parag_dark">We will evaluate how clean your approach to writing CSS 
                        and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.
                    </p>
                    <p className="section-acquaintance__parag parag parag_dark">If 3rd party css/javascript libraries are added to the project via bower/npm/yarn 
                    you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. 
                    Slice service directory page PSD mockup into HTML5/CSS3.
                    </p>
                    <Button extraClasses="section-acquaintance__sign-up" noBg={true} handleClick={() => {scrollToElement(ref)}}>
                        Sign up now
                    </Button>
                </div>
            </div>
        </Section>
    )
}

export default AcquaintanceSection