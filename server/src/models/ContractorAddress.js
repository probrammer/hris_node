
module.exports = (sequelize, DataTypes) => {
    const ContractorAddress = sequelize.define('contractor_addresses', {
        address: DataTypes.STRING(300),
        city: DataTypes.STRING
    })

    return ContractorAddress
}