const fs = require('fs')
const path = require('path')
const { Sequelize, DataTypes } = require('sequelize')
const config = require('../config/config')
const db = {}

// db connection 
const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

// requiring models
fs
    .readdirSync(__dirname)
    .filter((file) => file !== 'index.js')
    .forEach((file) => {
        db[path.basename(file,'.js')] = require(`./${file}`)(sequelize, DataTypes)
    })

    db.Contractor.hasMany(db.ContractorAddress, { onDelete: 'cascade' }) // contractor_address fk contractorId
    db.Contractor.hasMany(db.ContractorMobileNumber, { onDelete: 'cascade' }) // contractor_mobile_numbers fk contractorId
    db.Contractor.hasMany(db.ContractorSkill, { onDelete: 'cascade' }) // contractor_mobile_numbers fk contractorId
    db.Contractor.belongsTo(db.Department) // Contractor FK departmentId
    db.Contractor.belongsTo(db.Contractor, { foreignKey: 'directManagerId' }) // Contractor FK directManagerId
    db.Contractor.belongsToMany(db.JobTitle, { through: db.ContractorJobTitle }) // Assoc table contractor_job_titles
    db.Contractor.belongsToMany(db.Role, { through: db.ContractorRole }) // Assoc table contractor_roles
    db.Contractor.belongsToMany(db.Perk, { through: db.ContractorPerk }) // Assoc table contractor_roles

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db