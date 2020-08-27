
module.exports = (sequelize, DataTypes) => {
    const ContractorMobileNumber = sequelize.define('contractor_mobile_numbers', {
        mobileNumber: {
            type: DataTypes.STRING(30),
            allowNull: false,
            // unique: true
        }
    })

    return ContractorMobileNumber
}