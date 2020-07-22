
module.exports = (sequelize, DataTypes) => {
    const ContractorSkill = sequelize.define('contractor_skills', {
        title: DataTypes.STRING
    })

    return ContractorSkill
}