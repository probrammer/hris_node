const AuthenticationController = require('./controllers/AuthenticationController')
const DashboardController = require('./controllers/DashboardController')
const ContractorController = require('./controllers/ContractorController')
const DepartmentController = require('./controllers/DepartmentController')
const JobTitleController = require('./controllers/JobTitleController')
const PerkController = require('./controllers/PerkController')
const WorksnapsController = require('./controllers/WorksnapsController')

const ContractorControllerPolicy = require('./policies/ContractorControllerPolicy')

module.exports = (app) => {
    app.post('/',
        AuthenticationController.login),

    app.get('/dashboard', 
        DashboardController.index)

    app.get('/contractors',
        ContractorController.index)
    app.post('/contractors',
        ContractorControllerPolicy.store,
        ContractorController.store)
    app.get('/contractors/:id',
        ContractorController.show),
    app.put('/contractors/:id',
        ContractorControllerPolicy.store,
        ContractorController.update)

    app.get('/api/worksnaps',
        WorksnapsController.index)    

    app.get('/managers',
        ContractorController.getManagers)

    app.get('/departments',
        DepartmentController.index)

    app.get('/job-titles',
        JobTitleController.index)

    app.get('/perks',
        PerkController.index)
}