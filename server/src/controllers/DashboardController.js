const { Contractor, Sequelize, sequelize } = require('../models')
const Op = Sequelize.Op

const path = require('path')
const Excel = require('../traits/ExportXLSX')

function getMonthValue (month) {
    return new Date(Date.parse(`2000-${month}-01`)).getMonth() + 1
}

function renameKey (arr) { // alternative for GROUP BY alias
    let newArr = []
    arr.forEach((obj) => {
        let clonedObj = obj
        const newKey = 'label'
        const objKeys = Object.keys(obj)

        clonedObj[newKey] = obj[objKeys[0]]
        
        delete clonedObj[objKeys[0]]
        
        newArr = [...newArr, clonedObj]
    })

    return newArr
}

function limitDecimalPlace (num) {
    return num.toFixed(2)
}

module.exports = {
    async index (req, res) {
        const filter = JSON.parse(req.query.filter)
        const dashboard = {
            month: filter.month ? getMonthValue(filter.month) : null,
            year: filter.year ? filter.year : new Date().getFullYear(),
            async added () {
                if (!this.month) {
                    const addedContractors = await Contractor.count({
                        where: sequelize.and([
                            sequelize.where(sequelize.fn('YEAR', sequelize.col('dateStarted')), this.year)
                        ]),
                        group: [sequelize.fn('MONTH', sequelize.col('dateStarted'))]
                    })

                    return renameKey(addedContractors)
                } else {
                    const addedContractors = await Contractor.count({
                        where: sequelize.and([
                            sequelize.where(sequelize.fn('YEAR', sequelize.col('dateStarted')), this.year),
                            sequelize.where(sequelize.fn('MONTH', sequelize.col('dateStarted')), this.month),
                        ]),
                        group: [sequelize.fn('DAY', sequelize.col('dateStarted'))]
                    })

                    return renameKey(addedContractors)
                }
            },
            async removed () {
                if (!this.month) {
                    const removedContractors = await Contractor.count({
                        where: sequelize.and([
                            sequelize.where(sequelize.fn('YEAR', sequelize.col('dateOfSeparation')), this.year)
                        ]),
                        group: [sequelize.fn('MONTH', sequelize.col('dateOfSeparation'))]
                    })

                    return renameKey(removedContractors)
                } else {
                    const removedContractors = await Contractor.count({
                        where: sequelize.and([
                            sequelize.where(sequelize.fn('YEAR', sequelize.col('dateOfSeparation')), this.year),
                            sequelize.where(sequelize.fn('MONTH', sequelize.col('dateOfSeparation')), this.month),
                        ]),
                        group: [sequelize.fn('DAY', sequelize.col('dateOfSeparation'))]
                    })

                    return renameKey(removedContractors)
                }
            },
            async initBalance () {
                let added = await Contractor.count({
                    where: {
                        dateStarted: {
                            [Op.lt]: this.month ? new Date(`${this.year}-${this.month}-01`) : new Date(`${this.year}-01-01`)
                        }
                    }
                })

                let removed = await Contractor.count({
                    where: {
                        dateOfSeparation: {
                            [Op.lt] : this.month ? new Date(`${this.year}-${this.month}-01`) : new Date(`${this.year}-01-01`)
                        }
                    }
                })
    
                return added - removed
            },
            async chartData () {
                const monthNamesArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                const length = this.month ? 31 : 12
                const init = {
                    balance: await dashboard.initBalance(),
                    added: await dashboard.added(),
                    removed: await dashboard.removed()
                }
                let data = {
                    openingBalance: [init.balance],
                    closingBalance: [],
                    contractorsAdded: [],
                    contractorsRemoved: [],
                    attritionRate: [],
                    labels: length == 12 ? monthNamesArray : [],
                }

                for (let x = 1; x <= length; x++) {
                    let todayAdded = 0
                    let todayRemoved = 0
                    init.added.forEach((obj) => {
                        todayAdded += obj.label == x ? obj.count : 0
                    })
                    init.removed.forEach((obj) => {
                        todayRemoved += obj.label == x ? obj.count : 0
                    })
                    let todayClosing = data.openingBalance[x-1] + todayAdded - todayRemoved
                    let todayAttrition = limitDecimalPlace(todayRemoved < 1 ? 0 : (todayRemoved / ((data.openingBalance[x-1] + todayClosing) / 2)) * 100)

                    data.openingBalance = [...data.openingBalance, todayClosing]
                    data.closingBalance = [...data.closingBalance, todayClosing]
                    data.contractorsAdded = [...data.contractorsAdded, todayAdded]
                    data.contractorsRemoved = [...data.contractorsRemoved, todayRemoved]
                    data.attritionRate = [...data.attritionRate, todayAttrition],
                    data.labels = length != 12 ? [...data.labels, x] : data.labels
                }
                
                return data
            },
            async cardData () {
                const chartData = await dashboard.chartData()
                let totalRemoved = chartData.contractorsRemoved.reduce((prev, curr) => prev + curr, 0)
                let totalContractors = chartData.closingBalance[chartData.closingBalance.length - 1]
                const cardData = {
                    totalAdded: chartData.contractorsAdded.reduce((prev, curr) => prev + curr, 0),
                    totalRemoved: totalRemoved,
                    totalContractors: totalContractors,
                    attritionRate: limitDecimalPlace((totalRemoved / ((chartData.openingBalance[0] + totalContractors) / 2)) * 100),
                    opening: chartData.openingBalance[0]
                }

                return cardData
            }
        }
        const data = {
            chartData: await dashboard.chartData(),
            cardData: await dashboard.cardData()
        }
        res.status(200).send(data)
    },
    async exportXLSX (req, res) {
        // res.send({
        //     filter: JSON.parse(req.query.filter),
        //     options: JSON.parse(req.query.options)
        // })
    }
}