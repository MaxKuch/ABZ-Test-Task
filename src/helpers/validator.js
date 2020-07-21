
export const validate = values => {
    let regexpEmail =  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    let regexpPhone =  /^[\+]{0,1}380([0-9]{9})$/
    const errors = {}
    if(!values.name)
        errors.name = 'Field is required'
    if(!values.phone)
        errors.phone = 'Field is required'
    if(!values.email)
        errors.email = 'Field is required'
    if(!values.position_id)
        errors.position_id = 'Field is required'
    if(!values.photo)
        errors.photo = 'Field is required'
    if(values.name && values.name.length < 2)
        errors.name = 'The name must be at least 2 characters'
    if(values.name && values.name.length > 60)
        errors.name = 'The name must not exceed 60 characters'
    if(values.email && values.email.length < 2)
        errors.email = 'The email must be at least 2 characters'
    if(values.email && values.email.length > 100)
        errors.email = 'The email must not exceed 100 characters'
    if(values.email && !regexpEmail.test(values.email)) 
        errors.email = 'The email must be a valid email address.'
    if(values.phone && !regexpPhone.test(values.phone)) 
        errors.phone = 'The phone must be a valid phone number.'
    if(!Number(values.positions) && Number(values.position_id) < 1)
        errors.position_id = {value: values.position_id, message: 'The position id must be an integer.'}
    if(values.photo && values.photo.size > 5000000) 
        errors.photo = 'Image size must not be greater then 5MB'
    if(values.photo && values.photo.type !== 'image/jpeg') 
        errors.photo = 'Image type must be jpeg/jpg'
    return errors
}

export const asyncValidate = ({photo}) => {
    let img = new Image()
    const reader = new FileReader();
    reader.readAsDataURL( photo )
    return new Promise(resolve => {
        reader.addEventListener("load", function () {   
            img.src = reader.result;
            img.onload = function() {
                resolve(this) 
            }  
        }, false)
    }).then(data=>{
        if(data.width < 70 && data.height < 70) 
            throw {photo: 'Minimum size of photo 70x70px'}
        
    })
}
