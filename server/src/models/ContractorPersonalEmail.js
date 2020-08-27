
module.exports = (sequelize, DataTypes) => {
    const ContractorPersonalEmail = sequelize.define('contractor_personal_emails', {
        personalEmail: {
            type: DataTypes.STRING(150),
            allowNull: false,
            unique: true
        },
    })
    
    return ContractorPersonalEmail
}