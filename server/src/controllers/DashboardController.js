const { Contractor, Sequelize } = require('../models')
const Op = Sequelize.Op

function getOpeningBalance ({dateOfSeparation}) {
    return Contractor.findAll({
        attributes: [
            // include: [
                'dateStarted'
            // ]
        ]
        // where: {
        //     dateOfSeparation: dateOfSeparation
        // }
    })
}

module.exports = {
    async index (req, res) {
        const filter = JSON.parse(req.query.search)

        const openingBalance = await getOpeningBalance(filter);
        console.log(openingBalance)
        res.status(200).send({openingBalance})
    }
}