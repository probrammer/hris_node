
module.exports = {
    async login (req, res) {
        try {
            res.status(200).send(req.body)
        } catch (err) {
            res.status(500).send({
                message: 'failed'
            })
        }
    }
}