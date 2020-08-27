
module.exports = (sequelize, DataTypes) => {
    const ContractorDirectManager = sequelize.define('contractor_direct_managers', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        directManagerId: {
            type: DataTypes.INTEGER(30),
            references: {
                model: sequelize.Contractor,
                key: 'id'
            },
            allowNull: false
        }
    })

    return ContractorDirectManager
}