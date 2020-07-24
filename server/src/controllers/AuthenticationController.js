const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')
const { Contractor } = require('../models')

function jwtSignContractor (contractor) {
    // change path to a more secure one
    const privateKey = fs
                    .readFileSync(
                        path.join(__dirname, 'private.key'),
                        'utf-8'
                    )
    const signOptions = {
        expiresIn: '7d',
        algorithm: 'RS256'
    }
    return jwt.sign(contractor, privateKey, signOptions)
}

function jwtVerifyToken (token) {
    // change path to a more secure one
    const publicKey = fs
                    .readFileSync(
                        path.join(__dirname, 'public.key'), 
                        'utf-8'
                    )
    const verifyOptions = {
        maxAge: '7d',
        algorithms: ['RS256']
    }
    return jwt.verify(token, publicKey, verifyOptions)
}

module.exports = {
    async login (req, res) {
        try {
            const { email, password } = req.body
            const contractor = await Contractor.findOne({
                // only retrieve these columns
                attributes: [
                    'id', 'firstName', 'middleName', 'lastName', 'password'
                ],
                where: {
                    viEmail: email
                }
            })

            if (!contractor) {
                return res.status(403).send({
                    message: 'Email does not exist!'
                })
            } 

            const isPasswordVerified = await contractor.verifyPassword(password)
            if (!isPasswordVerified) {
                return res.status(403).send({
                    message: 'Email and password do not match!'
                })
            }

            const contractorJSON = contractor.toJSON()
            const token = jwtSignContractor(contractorJSON)
            res
                .status(200)
                .set('Authorization', `Bearer ${token}`)
                .send({
                    token
                    // verified: jwtVerifyToken(token)
            })
        } catch (err) {
            res.status(500).send({
                message: err + ''
            })
        }
    }
}