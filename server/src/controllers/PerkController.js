const { Perk } = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const perks = await Perk.findAll({
                order: [
                    ['title', 'ASC']
                ]
            })

            res.status(200).send(perks)
        } catch (err) {
            res.status(500).send(err)
        }
    }
}