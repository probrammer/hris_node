
module.exports = (sequelize, DataTypes) => {
    const ContractorViEmail = sequelize.define('contractor_vi_emails', {
        viEmail: {
            type: DataTypes.STRING,
            unique: true
        },
    })
    
    return ContractorViEmail
}