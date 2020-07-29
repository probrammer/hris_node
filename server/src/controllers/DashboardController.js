const { Contractor, Sequelize } = require('../models')
const Op = Sequelize.Op

module.exports = {
    async index (req, res) {
        const filter = JSON.parse(req.query.search)
        console.log('Hello World', JSON.parse(req.query.search), typeof req.query.search)
        const Contractors = await Contractor.findAll({
            // pass only these columns:
            attributes: [
                'firstName', 'middleName', 'lastName', 'dateOfSeparation'
            ],
            where: {
                dateOfSeparation: {
                    // Op = operator  for LIKE, OR, etc... see docs
                    [Op.between]: [new Date(filter.from), new Date(filter.to)]
                },
                // lastName: 'Hemsworth'
            }
        })

        // key = "from", "to"
        // filter[key] = "from" value, "to" value
        const map = Object.keys(filter).map((key, index) => {
            console.log(key, index, filter[key])
        })
        
        res.status(200).send({contractors: Contractors, from: new Date(filter.from), to: new Date(filter.to)})
    }
}