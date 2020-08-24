const Joi = require('joi')
const { allow } = require('joi')

module.exports = {
    store (req, res, next) {
        const schema = Joi.object({
                firstName: Joi.string()
                    .required()
                    .max(30)
                    .regex(
                        new RegExp('^[a-zA-z]')
                    ),
                lastName: Joi.string()
                    .required()
                    .max(30)
                    .regex(
                        new RegExp('^[a-zA-z]')
                    ),
                middleName: Joi.string()
                    .allow(null)
                    .max(30)
                    .regex(
                        new RegExp('^[a-zA-z]')
                    ),
                nickname: Joi.string()
                    .allow(null)
                    .max(30)
                    .regex(
                        new RegExp('^[a-zA-z]')
                    ),
                nationality: Joi.string()
                    .required()
                    .max(30)
                    .regex(
                        new RegExp('^[a-zA-z]')
                    ),
                gender: Joi.string()
                    .required()
                    .max(10),
                dateOfBirth: Joi.date().required(),
                maritalStatus: Joi.string().allow(null),
                degree: Joi.string()
                    .allow(null)
                    .max(60)
                    .regex(
                        new RegExp('^[a-zA-z]')
                    ),
                program: Joi.string()
                    .allow(null)
                    .max(255)
                    .regex(
                        new RegExp('^[a-zA-z]')
                    ),
                sss: Joi.string()
                    .allow(null)
                    .max(60),
                pagibig: Joi.string()
                    .allow(null)
                    .max(60),
                philhealth: Joi.string()
                    .allow(null)
                    .max(60),
                
                dateStarted: Joi.date().allow(null),
                dateRegularized: Joi.date().allow(null),
                employmentStatus: Joi.string()
                    .allow(null)
                    .max(30),
                batchNumber: Joi.string()
                    .allow(null)
                    .max(30),
                
                landlineNumber: Joi.string()
                    .allow(null)
                    .max(30),
                emergencyContactPerson: Joi.string()
                    .allow(null)
                    .max(60)
                    .regex(
                        new RegExp('^[a-zA-z]')
                    ),
                emergencyContactNumber: Joi.string()
                    .allow(null)
                    .max(30),
                skype: Joi.string()
                    .allow(null)
                    .max(300),
                facebook: Joi.string()
                    .allow(null)
                    .max(300),
                
                payoneerId: Joi.string()
                    .allow(null)
                    .max(60),
                bankAccount: Joi.string()
                    .allow(null)
                    .max(60),
                paygrade: Joi.number()
                    .allow(null)
                    .max(10),
                paygradeEffectivityDate: Joi.date().allow(null),
                paymentTerm: Joi.string()
                    .allow(null)
                    .max(10),
                rate: Joi.number().allow(null),

                mainIsp: Joi.string()
                    .allow(null)
                    .max(60),
                backupIsp: Joi.string()
                    .allow(null)
                    .max(60),
                noiseCancellingHeadset: Joi.boolean()
                    .allow(null),
                osProcessor: Joi.string()
                    .allow(null)
                    .max(30),
                ram: Joi.string()
                    .allow(null)
                    .max(30),
                internetSpeed: Joi.string()
                    .allow(null)
                    .max(30),
                isManager: Joi.boolean().allow(null),
                departmentId: Joi.number().required(),
                directManagerId: Joi.number().required(),
                jobTitles: Joi.array()
                    // .required()
                    .items(Joi.number()),
                roles: Joi.array()
                    // .required()
                    .items(Joi.number()),
                perks: Joi.array()
                    // .required()
                    .items(Joi.number()),
                viEmail: Joi.array()
                    .items(
                        Joi.string()
                        .email()
                        .allow(null)
                        .max(150)
                    ),
                personalEmail: Joi.array()
                    .items(
                        Joi.string()
                        .email()
                        .allow(null)
                        .max(150)
                    ),
                mobileNumber: Joi.array()
                    .items(
                        Joi.number()
                        .allow(null)
                        .max(30)
                        .regex(
                            new RegExp('^[0-9]')
                        )
                    ),
        })

        const { error } = schema.validate(req.body)
        if (error) {
            console.log(error)
        } else {
            next()
        }
    }
}