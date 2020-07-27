const queryString = require('querystring')

module.exports = {
    helloWorld (req, res) {
        console.log('Hello World', req.query.search)

        res.send({
            message: req.query.search
        })
    }
}