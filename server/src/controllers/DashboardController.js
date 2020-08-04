const { Contractor, Sequelize, sequelize } = require('../models')
const Op = Sequelize.Op

function getMonthValue (month) {
    return new Date(Date.parse(`2000-${month}-01`)).getMonth() + 1
}

module.exports = {
    async index (req, res) {
        let filter = JSON.parse(req.query.filter)
        let dashboard = {
            month: filter.month ? getMonthValue(filter.month) : null,
            year: filter.year ? filter.year : new Date().getFullYear(),
            async added () {
                if (!this.month) {
                    return Contractor.count({
                        where: sequelize.and([
                            sequelize.where(sequelize.fn('YEAR', sequelize.col('dateStarted')), this.year)
                        ]),
                        group: [sequelize.fn('MONTH', sequelize.col('dateStarted'))]
                    })
                } else {
                    return Contractor.count({
                        where: sequelize.and([
                            sequelize.where(sequelize.fn('YEAR', sequelize.col('dateStarted')), this.year),
                            sequelize.where(sequelize.fn('MONTH', sequelize.col('dateStarted')), this.month),
                        ]),
                        group: [sequelize.fn('DAY', sequelize.col('dateStarted'))]
                    })
                }
            },
            async removed () {
                if (!this.month) {
                    return Contractor.count({
                        where: sequelize.and([
                            sequelize.where(sequelize.fn('YEAR', sequelize.col('dateOfSeparation')), this.year)
                        ]),
                        group: [sequelize.fn('MONTH', sequelize.col('dateOfSeparation'))]
                    })
                } else {
                    return Contractor.count({
                        where: sequelize.and([
                            sequelize.where(sequelize.fn('YEAR', sequelize.col('dateOfSeparation')), this.year),
                            sequelize.where(sequelize.fn('MONTH', sequelize.col('dateOfSeparation')), this.month),
                        ]),
                        group: [sequelize.fn('DAY', sequelize.col('dateOfSeparation'))]
                    })
                }
            },
            async initBalance () {
                let started = await Contractor.count({
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
    
                return started - removed
            },
            async openingBalance () {
                if (this.month) {
                    let init = await dashboard.initBalance()
                    let openingBalanceArray = [init]
                    for (let month = 1; month <= 12; month++) {
                        
                        openingBalanceArray = [...openingBalanceArray, ]
                    }
                } else {
                    return 'nye'
                }
            },
            async closingBalance () {
                
            },
            async attritionRate () {

            }
        }
        const init = await dashboard.removed()
        // init.forEach((val, key, arr) => {let keys = Object.keys(arr[key])
        // console.log(val[keys[0]])})
        console.log(init)
        res.send({init})
    }
}