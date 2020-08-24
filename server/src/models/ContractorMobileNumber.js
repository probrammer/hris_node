
module.exports = (sequelize, DataTypes) => {
    const ContractorMobileNumber = sequelize.define('contractor_mobile_numbers', {
        mobileNumber: {
            type: DataTypes.INTEGER(30),
            primaryKey: true,
            autoIncrement: true
        }
    })

    return ContractorMobileNumber
}