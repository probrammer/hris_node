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
                    .allow('', null)
                    .max(30)
                    .regex(
                        new RegExp('^[a-zA-z]')
                    ),
                nickname: Joi.string()
                    .allow('', null)
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
                maritalStatus: Joi.string().allow('', null),
                degree: Joi.string()
                    .allow('', null)
                    .max(60)
                    .regex(
                        new RegExp('^[a-zA-z]')
                    ),
                program: Joi.string()
                    .allow('', null)
                    .max(255)
                    .regex(
                        new RegExp('^[a-zA-z]')
                    ),
                sss: Joi.string()
                    .allow('', null)
                    .max(60),
                pagibig: Joi.string()
                    .allow('', null)
                    .max(60),
                philhealth: Joi.string()
                    .allow('', null)
                    .max(60),
                
                dateStarted: Joi.date().required(),
                dateRegularized: Joi.date().allow('', null),
                employmentStatus: Joi.string()
                    .required()
                    .max(30),
                batchNumber: Joi.string()
                    .allow('', null)
                    .max(30),
                landlineNumber: Joi.string()
                    .allow('', null)
                    .max(30),
                emergencyContactPerson: Joi.string()
                    .allow('', null)
                    .max(60)
                    .regex(
                        new RegExp('^[a-zA-z]')
                    ),
                emergencyContactNumber: Joi.string()
                    .allow('', null)
                    .max(30),
                skype: Joi.string()
                    .allow('', null)
                    .max(300),
                facebook: Joi.string()
                    .allow('', null)
                    .max(300),
                
                payoneerId: Joi.string()
                    .allow('', null)
                    .max(60),
                bankAccount: Joi.string()
                    .allow('', null)
                    .max(60),
                paygrade: Joi.number()
                    .allow('', null)
                    .max(10),
                paygradeEffectivityDate: Joi.date().allow('', null),
                paymentTerm: Joi.string()
                    .allow('', null)
                    .max(10),
                rate: Joi.number().allow('', null),

                mainIsp: Joi.string()
                    .allow('', null)
                    .max(60),
                backupIsp: Joi.string()
                    .allow('', null)
                    .max(60),
                noiseCancellingHeadset: Joi.boolean()
                    .allow('', null),
                osProcessor: Joi.string()
                    .allow('', null)
                    .max(30),
                ram: Joi.string()
                    .allow('', null)
                    .max(30),
                internetSpeed: Joi.string()
                    .allow('', null)
                    .max(30),
                isManager: Joi.boolean().allow('', null),
                departmentId: Joi.number().required(),
                job_titles: Joi.array()
                    .items(
                        Joi.number()
                        .required()
                    ),
                roles: Joi.array()
                    .items(
                        Joi.number()
                        .required()
                    ),
                perks: Joi.array()
                    .items(Joi.number()),
                contractor_direct_managers: Joi.array()
                    .items(
                        Joi.number()
                        .required()
                    ),
                contractor_vi_emails: Joi.array()
                    .items(
                        Joi.string()
                        .allow('')
                        .email()
                        .max(150)
                    ),
                contractor_personal_emails: Joi.array()
                    .items(
                        Joi.string()
                        .allow('')
                        .email()
                        .max(150)
                    ),
                contractor_mobile_numbers: Joi.array()
                    .items(
                        Joi.string()
                        .allow('')
                        .max(30)
                        .regex(
                            new RegExp('^[0-9]')
                        )
                    ),
        })

        const { error } = schema.validate(req.body, { abortEarly: false })
        if (error) {
            const validationErrors = error.details.map((v) => v.context.key)
            res.status(400).send({validationErrors, error: error.details})
        } else {
            next()
        }
    }
}