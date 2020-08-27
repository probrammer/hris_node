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

    db.Contractor.hasMany(db.ContractorAddress, {
        foreignKey: {
            allowNull: false
        }, 
        onDelete: 'cascade'
    })
    db.Contractor.hasMany(db.ContractorMobileNumber, { 
        foreignKey: {
            allowNull: false
        }, 
        onDelete: 'cascade'
    })
    db.Contractor.hasMany(db.ContractorViEmail, {
        foreignKey: {
            allowNull: false
        }, 
        onDelete: 'cascade' 
    })
    db.Contractor.hasMany(db.ContractorPersonalEmail, {
        foreignKey: {
            allowNull: false
        },
        onDelete: 'cascade'
    })
    db.Contractor.hasMany(db.ContractorSkill, {
        foreignKey: {
            allowNull: false
        },
        onDelete: 'cascade'
    })
    // db.Contractor.hasMany(db.ContractorDirectManager, {
    //     foreignKey: {
    //         allowNull: false
    //     },
    //     onDelete: 'cascade'
    // })
    db.Contractor.belongsToMany(db.Contractor, {as: 'direct_managers', through: db.ContractorDirectManager})
    db.Contractor.belongsTo(db.Department)
    db.Department.hasMany(db.Contractor)
    db.Contractor.belongsToMany(db.JobTitle, {as: 'job_titles', through: db.ContractorJobTitle})
    db.JobTitle.belongsToMany(db.Contractor, {as: 'contractors', through: db.ContractorJobTitle})
    db.Contractor.belongsToMany(db.Role, {as: 'roles', through: db.ContractorRole})
    db.Role.belongsToMany(db.Contractor, {as: 'contractors', through: db.ContractorRole})
    db.Contractor.belongsToMany(db.Perk, {as: 'perks', through: db.ContractorPerk})
    db.Perk.belongsToMany(db.Contractor, {as: 'contractor', through: db.ContractorPerk})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db