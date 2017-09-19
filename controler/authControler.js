const auth = require("../models/autentication")


module.exports = {


    signup: (req, res, next) => {

        const email = req.body.email
        const password = req.body.password
        const name = req.body.name

        if (!email || !password) {
            res.send("you must provide email and password ")
        }

        auth.findOne({ email: email }, (err, found) => {
            if (err) {
                return next(err)
            }
            if (found) {
                return res.status(422).send({ error: "email is in use" })
            }

            auth.create({ email: email, password: password, name: name })
                .then((data) => { res.send(data) })
        })
    },


    login: (req, res, next) => {

        const email = req.body.email
        const password = req.body.password

        auth.findOne({ email: email }, (err, found) => {

            if (err) {
                return next(err)
            }

            if (found && found.password === password && found.email === email) {

                return res.send(found)

            }

            res.send("invalid email and password")

        })

    }

}