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
        firstName: DataTypes.STRING,
        middleName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        viEmail: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
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