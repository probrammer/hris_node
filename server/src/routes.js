const AuthenticationController = require('./controllers/AuthenticationController')
const DashboardController = require('./controllers/DashboardController')

// middleware
// function logger (req, res, next) {
//     console.log('Logger', req.headers)
//     next()
// }

module.exports = (app) => {
    // app.use(logger)
    app.post('/',
        AuthenticationController.login),

    app.get('/dashboard', 
        DashboardController.helloWorld)
}