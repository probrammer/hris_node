const { JobTitle } = require('../models')

module.exports = {
    async index (req, res) {
        const jobTitles = await JobTitle.findAll({
            order: [
                ['title', 'ASC']
            ]
        })
        
        res.status(200).send(jobTitles)
    }
}