const Promise = require('bluebird')
const bcryptjs = Promise.promisifyAll(require('bcryptjs'))

function hashPassword (contractor) {
    const SALT_FACTOR = 10

    return bcryptjs
            .genSalt(SALT_FACTOR, (err, salt) => {
                bcryptjs.hash(contractor.password, salt, (err, hash) => {
                    contractor.setDataValue('password', hash)
                })
            })
}

module.exports = (sequelize, DataTypes) => {
    const Contractor = sequelize.define('contractors', {
        // other
        profilePicture: {
            type: DataTypes.STRING(60),
            defaultValue: 'default.jpg'
        },
        // personal info
        firstName: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        middleName: DataTypes.STRING(30),
        nickname: DataTypes.STRING(30),
        nationality: DataTypes.STRING(30),
        gender: DataTypes.STRING(10),
        dateOfBirth: DataTypes.DATE,
        maritalStatus: DataTypes.STRING(30),
        degree: DataTypes.STRING(60),
        program: DataTypes.STRING(255),
        sss: DataTypes.STRING(60),
        pagibig: DataTypes.STRING(60),
        philhealth: DataTypes.STRING(60),

        // work info
        dateStarted: DataTypes.DATE,
        dateRegularized: DataTypes.DATE,
        employmentStatus: DataTypes.STRING(30),
        batchNumber: DataTypes.STRING(30),
        
        // contact info
        landlineNumber: DataTypes.STRING(30),
        emergencyContactPerson: DataTypes.STRING(60),
        emergencyContactNumber: DataTypes.STRING(30),
        skype: DataTypes.STRING(300),
        facebook: DataTypes.STRING(300),

        // payroll info
        payoneerId: DataTypes.STRING(60),
        bankAccount: DataTypes.STRING(60),
        paygrade: DataTypes.DECIMAL,
        paygradeEffectivityDate: DataTypes.DATE,
        paymentTerm: DataTypes.STRING(10),
        rate: DataTypes.FLOAT,

        // system info
        mainIsp: DataTypes.STRING(60),
        backupIsp: DataTypes.STRING(60),
        noiseCancellingHeadset: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        osProcessor: DataTypes.STRING(60),
        ram: DataTypes.STRING(30),
        internetSpeed: DataTypes.STRING(30),

        // other info
        password: DataTypes.STRING(255),
        rawPassword: DataTypes.STRING(30),
        isManager: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        dateOfSeparation: DataTypes.DATE,
    }, 
    {
        hooks: {
            beforeSave: hashPassword
        }
    })

    Contractor.prototype.verifyPassword = function (password) {
        return bcryptjs.compare(password, this.password)
    }
    
    return Contractor
}