const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')

module.exports = {
    async login (req, res) {
        try {
            const privateKey = fs.readFileSync(path.join(__dirname, 'private.key'), 'utf-8')
            const payload = {
                name: 'Robin Regodon', 
                age: 21
            }
            const signOptions = {
                expiresIn: '7d',
                algorithm: 'RS256'
            }
            const token = jwt.sign(payload, privateKey, signOptions, (err, token) => {
                res.send({
                    message: process.env
                })
            })
        } catch (err) {
            res.status(500).send({
                message: err
            })
        }
    }
}