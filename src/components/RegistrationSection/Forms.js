import React, {useEffect, useState} from 'react'
const adaptFileEventToValue = delegate => e => delegate(e.target.files[0])

export const FileInput = ({ 
    input: { value, onChange, onBlur }, 
    meta: {touched, error},
    label,
    ...props 
  }) => {
    let [placeholder, setPlaceholder] = useState()
    useEffect(()=>{
    if(touched){
        if(value && !error)
            setPlaceholder(value.name)
        else
            setPlaceholder('No file choosen')
    }
    else
        setPlaceholder('Upload your photo')
    }, [value, error, touched])
    return (
    <React.Fragment>
        <label htmlFor="photo" className="registration__label">{label}</label>
        <div className= "input-group">
            <div className={`custom-file ${(touched && error) ? 'is-invalid' : ''}`}>
                <input  
                    className={`form-control custom-file-input registration__file-input ${(touched && error) ? 'is-invalid' : ''}`}
                    onChange={adaptFileEventToValue(onChange)} 
                    onBlur={adaptFileEventToValue(onBlur)} 
                    type="file"  
                    {...props.input} 
                    {...props} 
                />
                <label className="custom-file-label registration__file-label" htmlFor="photo">{placeholder}</label>
            </div>
            {error ? <div className="invalid-feedback"> {error} </div> : ''}
        </div> 
    </React.Fragment> 
    )
}

export const TextInput = ({ 
    input, 
    meta, 
    label, 
    help,
    placeholder
  }) => {
    return(
        <div className="registration__form-group">
            <label htmlFor="name" className="registration__label">{label}</label>
            <input placeholder={placeholder} className={`form-control registration__text-input ${(meta.touched && meta.error) ? 'is-invalid' : ''}`}  {...input}/>
            {meta.error ? <div className="invalid-feedback"> {meta.error} </div> : ''}
            {help ? <small id="phoneHelp" className="form-text parag_dark">{help}</small> : ''}
        </div>
    )
}

export const CheckboxGroup = ({ 
    input,
    meta, 
    options,
    label
  }) => {
    return (
    <div className = {`registration__form-group ${(meta.touched && meta.error) ? 'is-invalid' : ''}`}>
        <label htmlFor="positions" className="registration__label registration__checkbox-group-label">{label}</label>
        {options.map((option, index) => {
            return(
                <div className="form-check registration__checkbox-wrapper" key={index}>
                    <input {...input} className={"form-check-input registration__checkbox"} type="radio" id={`radio${index + 1}`} value={option.id} />
                    
                    <label className="form-check-label registration__label" htmlFor={`radio${index + 1}`}>
                        {option.name}
                    </label>
                    {meta.error && (meta.error.value === option.id) ? <div className="invalid-feedback"> {meta.error.message} </div> : ''}
                </div>
            )
        })}
        {meta.error && !meta.error.value ? <div className="invalid-feedback"> {meta.error} </div> : ''}
    </div>
    )
}


