
module.exports = (sequelize, DataTypes) => {
    const ContractorRole = sequelize.define('contractor_roles', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        }
    })

    return ContractorRole
}