
module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('roles', {
        title: DataTypes.STRING
    })

    return Role
}