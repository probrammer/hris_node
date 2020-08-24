
module.exports = (sequelize, DataTypes) => {
    const ContractorPerk = sequelize.define('contractor_perks', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    })

    return ContractorPerk
}