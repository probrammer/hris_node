
module.exports = (sequelize, DataTypes) => {
    const ContractorJobTitle = sequelize.define('contractor_job_titles', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    })

    return ContractorJobTitle
}