
module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define('departments', {
        title: DataTypes.STRING
    })

    return Department
}