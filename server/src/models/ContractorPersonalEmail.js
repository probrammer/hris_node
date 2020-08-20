
module.exports = (sequelize, DataTypes) => {
    const ContractorPersonalEmail = sequelize.define('contractor_personal_emails', {
        personalEmail: {
            type: DataTypes.STRING,
            unique: true
        },
    })
    
    return ContractorPersonalEmail
}