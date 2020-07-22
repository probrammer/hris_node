
module.exports = (sequelize, DataTypes) => {
    const ContractorMobileNumber = sequelize.define('contractor_mobile_numbers', {
        mobileNumber: DataTypes.STRING
    })

    return ContractorMobileNumber
}