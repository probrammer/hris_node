const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
const { Contractor } = require('../models')

module.exports = {
    async login (req, res) {
        try {
            const { email, password } = req.body
            const contractor = await Contractor.findOne({
                where: {
                    viEmail: email
                }
            })
            if (!contractor) {
                res.status(403).send({
                    message: 'User not found!'
                })
            } else {
                res.status(200).send(contractor)
            }
            // const privateKey = fs.readFileSync(path.join(__dirname, 'private.key'), 'utf-8')
            // const payload = {
            //     name: 'Robin Regodon', 
            //     age: 21
            // }
            // const signOptions = {
            //     expiresIn: '7d',
            //     algorithm: 'RS256'
            // }
            // const token = jwt.sign(payload, privateKey, signOptions, (err, token) => {
            //     res.send({
            //         token
            //     })
            // })
        } catch (err) {
            res.status(500).send({
                message: err
            })
        }
    }
}