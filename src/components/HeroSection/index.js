import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../Button'
import scrollToElement from '../../helpers/scrollToElement'
const HeroSection = ()=>{
    const ref = useSelector(({app}) => app.regSectionRef)
    return(
        <section className="hero-section">
            <div className="main-container">
                <div className="hero-section__container">
                    <h1 className="main-title hero-section__title">Test assignment <br/>for frontend developer position</h1>
                    <p  className="hero-section__text hero-section__text_mobile parag">
                        We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.
                    </p>
                    <p  className="hero-section__text parag">
                    We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. 
                    Please be patient, we consider and respond to every application that meets minimum requirements. 
                    We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens
                    </p>
                        <Button extraClasses="hero-section__button" handleClick={() => {scrollToElement(ref)}}>
                            Sign up now
                        </Button>
                </div>
               

            </div>
        </section>
    )
}

export default HeroSection