const { Contractor } = require('../models')
const axios = require('axios')

module.exports = {
    async index(req, res) {
        const contractors = await Contractor.findAll({
            // attributes: [
            //     'firstName', 'middleName', 'lastName'
            // ]
        })
        res.status(200).send(contractors)
    },
    async wsTest(req, res) {
        try {
            const apiToken = 'jwSXHi4x4yZ2PkLuSfhbhgWIhyV5W7h5nZUTlqZz' // unique token from WS
            const data = await axios.get('https://api.worksnaps.com/api/me.xml', {
                headers: {
                    'Accept': 'application/xml',
                    'Content-Type': 'application/xml'
                },
                auth: {
                    username: `${apiToken}`,
                    password: ''
                }
            })

            res.status(200).send({data: data.data})
        } catch (err) {
            console.log(err)
        }
    }
}