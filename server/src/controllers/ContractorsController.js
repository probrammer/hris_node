const { Contractor,  ContractorMobileNumber, ContractorAddress, ContractorJobtitle, ContractorRole, ContractorViEmail, ContractorPersonalEmail, ContractorPerk } = require('../models')
const axios = require('axios')

module.exports = {
    async index(req, res) {
        try{
            const contractors = await Contractor.findAll({
                order: [
                    ['dateStarted', 'ASC'],
                ]
            })
            
            res.status(200).send(contractors)
        } catch (err) {
            res.status(500).send(err)
        }
    },
    async store (req, res) {
        try {
            const data = req.body
            const contractorAdded = await Contractor.create({
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
            // data.mobileNumber.map((v) => {
            //     if (v != null) {
            //         await ContractorMobileNumber.findAll({
            //             where: {
            //                 id: contractorAdded.id
            //             }
            //         }).then()
            //     }
            // })
            res.status(200).send(contractorAdded)
        } catch (err) {
            console.log(err)
        }
    },
    async wsTest(req, res) {
        try {
            const apiToken = 'jwSXHi4x4yZ2PkLuSfhbhgWIhyV5W7h5nZUTlqZz' // unique token from WS
            const data = await axios.get('https://api.worksnaps.com/api/me.xml', {
                headers: {
                    'Accept': 'application/xml',
                    'Content-Type': 'application/xml'
                },
                auth: {
                    username: `${apiToken}`,
                    password: ''
                }
            })

            res.status(200).send({data: data.data})
        } catch (err) {
            console.log(err)
        }
    }
}