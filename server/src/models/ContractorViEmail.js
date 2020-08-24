
module.exports = (sequelize, DataTypes) => {
    const ContractorViEmail = sequelize.define('contractor_vi_emails', {
        viEmail: {
            type: DataTypes.STRING(150),
            unique: true
        },
    })
    
    return ContractorViEmail
}