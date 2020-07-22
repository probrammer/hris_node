
module.exports = (sequelize, DataTypes) => {
    const JobTitle = sequelize.define('job_titles', {
        title: DataTypes.STRING
    })

    return JobTitle
}