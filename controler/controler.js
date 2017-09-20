const patient = require('../models/patientSchema')
module.exports = {
    getAllPatient: (req, res, next) => {


        var uid = req.params.uid

        patient.find({ uid_id: uid })
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
        var uid = req.params.uid
        var arr = []
        patient.find({ uid_id: uid },
            (err, found) => {
                if (err) {
                    return res.send(next(err))
                }
                if (found) {
                    found.map((obj) => {
                        if (obj.name === userName) {
                            dataFound = {
                                name: obj.name,
                                cost: obj.cost,
                                disease: obj.disease,
                                date: obj.date,
                                medication_provided: obj.medication_provided
                            }
                            arr.push(dataFound)
                        }
                    })
                    return res.send(arr)
                }


                return res.send("not Found")
            }
        )
    },

    findPatientByDate: (req, res, next) => {
        var date = req.body.date
        var uid = req.params.uid
        var arr = []
        patient.find({ uid_id: uid },
            (err, found) => {
                if (err) {
                    return res.send(next(err))
                }
                if (found) {
                    found.map((obj) => {
                        if (obj.date === date) {
                            dataFound = {
                                name: obj.name,
                                cost: obj.cost,
                                disease: obj.disease,
                                date: obj.date,
                                medication_provided: obj.medication_provided
                            }
                            arr.push(dataFound)
                        }
                    })
                    return res.send(arr)
                }


                return res.send("not Found")
            }
        )
    }
}