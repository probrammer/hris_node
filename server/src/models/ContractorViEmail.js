
module.exports = (sequelize, DataTypes) => {
    const ContractorViEmail = sequelize.define('contractor_vi_emails', {
        viEmail: {
            type: DataTypes.STRING(150),
            allowNull: false,
            unique: true
        },
    })
    
    return ContractorViEmail
}