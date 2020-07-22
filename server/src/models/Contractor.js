
module.exports = (sequelize, DataTypes) => {
    const Contractor = sequelize.define('contractors', {
        firstName: DataTypes.STRING,
        middleName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        viEmail: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    })

    return Contractor
}