import React, {useEffect, useState, createRef} from 'react'
import Section from '../Section'
import SectionHeader from '../SectionHeader'
import Button from '../Button'
import { Field, reduxForm } from 'redux-form';
import { validate, asyncValidate } from '../../helpers/validator'
import { FileInput, TextInput, CheckboxGroup } from './Forms';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../redux/actions/userActions'
import appActions from '../redux/actions/appActions'
import fetch from 'cross-fetch'

let RegistrationForm = (props)=>{
    const {handleSubmit} = props;
    const [optionsList, setOptions] = useState([])
    const posting = useSelector(state => state.app.posting)
    useEffect(() => {
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            setOptions(data.positions)
        })
    }, [])
    return (
        <React.Fragment>
        <form onSubmit={handleSubmit} autoComplete="off">
            <Field id="name" name="name" placeholder="Your name" label="Name" component = {TextInput}  type = "text"/>
            <Field id="email" name="email" placeholder="Your email" label="Email" component = {TextInput} type = "email"/>
            <Field id="phone" name="phone" placeholder="+380 XX XXX XX XX" label="Phone number" help="Enter phone number in open format" component = {TextInput} type = "phone" aria-describedby="phoneHelp" />
            <Field id="positions" component={CheckboxGroup} label="Select your position" options={optionsList} name="position_id" />
            <div className="registration__file-group">
                <Field id="photo" name="photo" component = {FileInput} label="Photo" />
            </div>
            <Button disabled={posting} extraClasses = "mx-auto">Sign up now</Button>
        </form>
        </React.Fragment>
    )
}

const RegistrationSection = () => {
    const ref = createRef(null)
    const dispatch = useDispatch()
    useEffect(() => {
        if(ref.current)
            dispatch(appActions.setRegSectionRef(ref.current))
    }, [])
    return (
        <Section refProp={ref} extraClasses="registration-section">
            <SectionHeader 
                extraClasses="registration-section__header" 
                title="Register to get a work" 
                addition="Attention! After successful registration and alert, update the list of users in the block from the top"
            />
            <div className="row registration-section__form">
                <div className="offset-lg-3 col-lg-6  offset-md-2 col-md-8 offset-sm-2 col-sm-8">
                    <RegistrationForm onSubmit = {values => dispatch(userActions.addUser(values))}/>  
                </div>
            </div>
        </Section>
    )
}

RegistrationForm = reduxForm({
    form: 'registration',
    validate,
    asyncValidate,
    asyncBlurFields: [ 'photo' ]
})(RegistrationForm)

export default RegistrationSection