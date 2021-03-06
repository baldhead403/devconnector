const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateExperienceInput(data){

let errors = {}

data.school = !isEmpty(data.school) ? data.school: ''
data.degree = !isEmpty(data.degree) ? data.degree: ''
data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy: ''
data.from = !isEmpty(data.from ) ? data.from: ''
// data.to = !isEmpty(data.to) ? data.to: ''
// data.current = !isEmpty(data.current) ? data.current: ''
// data.description = !isEmpty(data.description) ? data.description: ''





if(Validator.isEmpty(data.school)){
    errors.school = "School name field is required"
}
if(Validator.isEmpty(data.degree)){
    errors.degree = "Degree field is required"
}

if(Validator.isEmpty(data.fieldofdstudy)){
    errors.fieldofstudy = "Field of study field is required"
}

if(Validator.isEmpty(data.from)){
    errors.password = "From date field is required"
}

return{
    errors,
    isValid: isEmpty(errors)
}

}