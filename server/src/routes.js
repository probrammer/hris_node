const AuthenticationController = require('./controllers/AuthenticationController')
const DashboardController = require('./controllers/DashboardController')
const ContractorController = require('./controllers/ContractorController')
const DepartmentController = require('./controllers/DepartmentController')
const JobTitleController = require('./controllers/JobTitleController')
const PerkController = require('./controllers/PerkController')

const ContractorControllerPolicy = require('./policies/ContractorControllerPolicy')
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
        ContractorController.index)
    app.post('/contractors/store',
        ContractorControllerPolicy.store,
        ContractorController.store)
    app.get('/contractors/wsTest',
        ContractorController.wsTest)

    app.get('/departments',
        DepartmentController.index)

    app.get('/job-titles',
        JobTitleController.index)

    app.get('/perks',
        PerkController.index)
}