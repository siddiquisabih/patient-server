var mongoose = require('mongoose')
var Schema = mongoose.Schema


var patientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    disease: {
        type: String,
        required: true,
    },
    medication_provided: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true

    },
    uid_id: {
        type: mongoose.Schema.Types.ObjectId
    }

})

const patient = mongoose.model('patientInfo', patientSchema)

module.exports = patient