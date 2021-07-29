//Validaton Schemas
const Joi = require('@hapi/joi')

//Register Validation Schema
const registerValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(4).required(),
        password: Joi.string().min(8).required()
    })
    return schema.validate(data)
}

//Login Validation Schema
const loginValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(4).required(),
        password: Joi.string().min(8).required()
    })
    return schema.validate(data)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation