const AuthenticationController = require('./controllers/AuthenticationController')
const DashboardController = require('./controllers/DashboardController')
const ContractorsController = require('./controllers/ContractorsController')
const DepartmentController = require('./controllers/DepartmentController')
const JobTitleController = require('./controllers/JobTitleController')

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
        DashboardController.index)

    app.get('/contractors',
        ContractorsController.index)
    app.post('/contractors/store',
        ContractorsController.store)
    app.get('/contractors/wsTest',
        ContractorsController.wsTest)

    app.get('/departments',
        DepartmentController.index)

    app.get('/job-titles',
        JobTitleController.index)
}