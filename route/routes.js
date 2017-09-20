var patient = require('../models/patientSchema')
var controler = require('../controler/controler')
var authControler = require("../controler/authControler")


module.exports = (app) => {



    app.post('/api/signup', authControler.signup)

    app.post('/api/login', authControler.login)

    app.get('/api/getAllPatient/:uid', controler.getAllPatient)

    app.post('/api/createPatientProfile', controler.createPatientProfile)

    app.post('/api/findPatientByName/:uid', controler.findPatientByName)

    app.post('/api/findPatientByDate/:uid', controler.findPatientByDate)
}

