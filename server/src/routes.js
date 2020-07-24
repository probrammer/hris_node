const AuthenticationController = require('./controllers/AuthenticationController')

// middleware
// function logger (req, res, next) {
//     console.log('Logger', req.headers)
//     next()
// }

module.exports = (app) => {
    // app.use(logger)
    app.post('/login',
        AuthenticationController.login)
}