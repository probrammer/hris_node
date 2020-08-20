const { Department } = require('../models')

module.exports = {
    async index (req, res) {
        const departments = await Department.findAll({
            order: [
                ['title', 'ASC']
            ]
        })
        
        res.status(200).send(departments)
    }
}