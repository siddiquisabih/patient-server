const patient = require('../models/patientSchema')

module.exports = {

    getAllPatient: (req, res, next) => {
        patient.find({})
            .then((data) => {
                res.send(data)
            })
            .catch(next)
    },

    createPatientProfile: (req, res, next) => {
        var userData = req.body;
        patient.create(userData)
            .then((responce) => {
                res.send(responce)
            })
            .catch(next)
    },

    findPatientByName: (req, res, next) => {
        var userName = req.body.name
        patient.find({ name: userName })
            .then((data) => {
                res.send(data)
            })
            .catch(next)
    },

    findPatientByDate: (req, res, next) => {
        var date = req.body.date
        patient.find({ date: date })
            .then((data) => {
                res.send(data)
            })
            .catch(next)
    }
}