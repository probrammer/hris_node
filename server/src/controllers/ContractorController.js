const { 
    Contractor,
    ContractorMobileNumber,
    JobTitle,
    Role,
    Department,
    ContractorAddress,
    ContractorDirectManager,
    ContractorJobTitle,
    ContractorRole,
    ContractorViEmail,
    ContractorPersonalEmail,
    ContractorPerk 
} = require('../models')
const axios = require('axios')

async function hasManyDestroyStore (model, newValColumn, newValues, id) {
    const destroy = await model.findAll({where: {contractorId: id}})
    const notNull = newValues.filter((v) => {return v != null})
    notNull.map(async (v) => {
        await model.create({
            [newValColumn]: v,
            contractorId: id
        })
    })
}

async function storeArrayValues (model, array, column, contractorId) {
    console.log(array)
    if (array.length > 0) {
        array.map(async (v) => {
            if (v != "") {
                try {
                    await model.create({
                        [column]: v,
                        contractorId: contractorId
                    })
                } catch (err) {
                    return err
                }
            }
        })
    }
}

module.exports = {
    async index (req, res) {
        try {
            const contractors = await Contractor.findAll({
                attributes: {
                    exclude: [
                        'password', 'rawPassword'
                    ]
                },
                // order: [
                //     ['dateStarted', 'ASC'],
                // ],
                include: [
                    {model: Department},
                    {model: ContractorViEmail},
                    {model: ContractorPersonalEmail},
                    {model: ContractorMobileNumber},
                    {model: JobTitle, as: 'job_titles'},
                    {model: Role, as: 'roles'},
                    {model: Contractor, as: 'direct_managers'},
                ]
            })
            res.status(200).send(contractors)
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    async show (req, res) {
        const id = req.params.id
        try {
            const contractors = await Contractor.findOne({
                attributes: {
                    exclude: [
                        'password', 'rawPassword', 'isActive', 'createdAt', 'updatedAt'
                    ]
                },
                where: {
                    id: id
                },
                include: [
                    {model: Department},
                    {model: ContractorViEmail},
                    {model: ContractorPersonalEmail},
                    {model: ContractorMobileNumber},
                    {model: JobTitle, as: 'job_titles'},
                    {model: Role, as: 'roles'},
                    {model: Contractor, as: 'direct_managers'},
                ]
            })
            res.status(200).send(contractors)
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    async store (req, res) {
        const data = req.body
        try {
            const storedContractor = await Contractor.create({
                firstName: data.firstName,
                middleName: data.middleName,
                lastName: data.lastName,
                nickname: data.nickname,
                nationality: data.nationality,
                gender: data.gender,
                dateOfBirth: data.dateOfBirth == null ? null : new Date(data.dateOfBirth),
                maritalStatus: data.maritalStatus,
                degree: data.degree,
                program: data.program,
                
                batchNumber: data.batchNumber,
                employmentStatus: data.employmentStatus,
                dateStarted: data.dateStarted == null ? null : new Date(data.dateStarted),
                dateRegularized: data.dateRegularized == null ? null : new Date(data.dateRegularized),
                departmentId: data.departmentId,

                landlineNumber: data.landlineNumber,
                emergencyContactPerson: data.emergencyContactPerson,
                emergencyContactNumber: data.emergencyContactNumber,
                skype: data.skype,
                facebook: data.facebook,

                payoneerId: data.payoneerId,
                bankAccount: data.bankAccount,
                paygrade: data.paygrade,
                paygradeEffectivityDate: data.paygradeEffectivityDate,
                paymentTerm: data.paymentTerm,
                rate: data.rate,

                mainIsp: data.mainIsp,
                backupIsp: data.backupIsp,
                internetSpeed: data.internetSpeed,
                osProcessor: data.osProcessor,
                ram: data.ram,
                noiseCancellingHeadset: data.noiseCancellingHeadset,

                sss: data.sss,
                pagibig: data.pagibig,
                philhealth: data.philhealth  
            })
            storeArrayValues(ContractorMobileNumber, data.contractor_mobile_numbers, 'mobileNumber', storedContractor.id)
            storeArrayValues(ContractorViEmail, data.contractor_vi_emails, 'viEmail', storedContractor.id)
            storeArrayValues(ContractorPersonalEmail, data.contractor_personal_emails, 'personalEmail', storedContractor.id)
            storeArrayValues(ContractorDirectManager, data.contractor_direct_managers, 'directManagerId', storedContractor.id)
            storeArrayValues(ContractorPerk, data.perks, 'perkId', storedContractor.id)
            storeArrayValues(ContractorRole, data.roles, 'roleId', storedContractor.id)
            storeArrayValues(ContractorJobTitle, data.job_titles, 'jobTitleId', storedContractor.id)

            res.status(200).send({storedContractor})
        } catch (err) {
            res.status(500).send(err)
        }
    },
    async update (req, res) {
        const id = req.params.id
        const data = req.body
        try {
            const storedContractor = await Contractor.update(
                {
                    firstName: data.firstName,
                    middleName: data.middleName,
                    lastName: data.lastName,
                    nickname: data.nickname,
                    nationality: data.nationality,
                    gender: data.gender,
                    dateOfBirth: data.dateOfBirth == null ? null : new Date(data.dateOfBirth),
                    maritalStatus: data.maritalStatus,
                    degree: data.degree,
                    program: data.program,
                    
                    batchNumber: data.batchNumber,
                    employmentStatus: data.employmentStatus,
                    dateStarted: data.dateStarted == null ? null : new Date(data.dateStarted),
                    dateRegularized: data.dateRegularized == null ? null : new Date(data.dateRegularized),
                    departmentId: data.departmentId,

                    landlineNumber: data.landlineNumber,
                    emergencyContactPerson: data.emergencyContactPerson,
                    emergencyContactNumber: data.emergencyContactNumber,
                    skype: data.skype,
                    facebook: data.facebook,

                    payoneerId: data.payoneerId,
                    bankAccount: data.bankAccount,
                    paygrade: data.paygrade,
                    paygradeEffectivityDate: data.paygradeEffectivityDate,
                    paymentTerm: data.paymentTerm,
                    rate: data.rate,

                    mainIsp: data.mainIsp,
                    backupIsp: data.backupIsp,
                    internetSpeed: data.internetSpeed,
                    osProcessor: data.osProcessor,
                    ram: data.ram,
                    noiseCancellingHeadset: data.noiseCancellingHeadset,

                    sss: data.sss,
                    pagibig: data.pagibig,
                    philhealth: data.philhealth
                },
                {
                    where: {
                        id: id
                    }
                }
            )
            storeArrayValues(ContractorMobileNumber, data.contractor_mobile_numbers, 'mobileNumber', storedContractor.id)
            storeArrayValues(ContractorViEmail, data.contractor_vi_emails, 'viEmail', storedContractor.id)
            storeArrayValues(ContractorPersonalEmail, data.contractor_personal_emails, 'personalEmail', storedContractor.id)
            storeArrayValues(ContractorDirectManager, data.contractor_direct_managers, 'directManagerId', storedContractor.id)
            storeArrayValues(ContractorPerk, data.perks, 'perkId', storedContractor.id)
            storeArrayValues(ContractorRole, data.roles, 'roleId', storedContractor.id)
            storeArrayValues(ContractorJobTitle, data.job_titles, 'jobTitleId', storedContractor.id)

            res.status(200).send({storedContractor})
        } catch (err) {
            res.status(500).send(err)
        }
    },
    async getManagers (req, res) {
        try {
            const managers = await Contractor.findAll({
                attributes: [
                    'id', 'firstName', 'lastName' 
                ],
                where: {
                    isManager: true
                },
                order: [
                    ['firstName', 'ASC'],
                ]
            })
            res.status(200).send(managers)
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
}