
module.exports = (sequelize, DataTypes) => {
    const Contractor = sequelize.define('contractors', {
        firstname: DataTypes.STRING,
        middlename: DataTypes.STRING,
        lastname: DataTypes.STRING,
        viemail: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    })

    return Contractor
}