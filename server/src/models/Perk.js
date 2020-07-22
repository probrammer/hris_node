
module.exports = (sequelize, DataTypes) => {
    const Perk = sequelize.define('perks', {
        title: DataTypes.STRING
    })

    return Perk
}