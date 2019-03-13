
const config = require('../config.js'),
    jwt = require('jsonwebtoken'),
    Admin = require('../models/admin')

class AdminController {
    find(req, res) {
        Admin.find({}, (err, users) => !err ? res.status(200).send(users) : { err });
    }

    register(req, res, next) {
        const { username, password } = req.body
        if (!username || !password) return res.status(422).send({ error: 'username and password are mandatory!' });
        Admin.findOne({ username: username }, (err, existingUser) => {
            if (err) return next(err)
            if (existingUser) {
                return res.status(422).send({ error: 'username already exists !!' })
            }
            // create user
            const admin = new Admin({
                username: username,
                password: password
            })

            console.log(username)
            //saving user to the DB and encripting the password
            admin.save(function (err) { // optional - re and logged in
                if (err) return next(err)
                var token = jwt.sign(admin.toJSON(), config.secret, {
                    expiresIn: 100080
                })

                res.status(200).send({
                    success: true,
                    token: token //encript obj sent to the client to be checked by the server 
                })
            })
        })
    }


    login(req, res, next) {
        const { username, password } = req.body
        console.log(req.body)
        if (!username || !password) {
            return res.status(422).send({ error: 'username and password are mandatory!' })
        }

        Admin.findOne({ username }, (err, user) => {
            console.log('err', err)
            if (err) return next(err) // check for error in the database
            if (!user) {
                console.log('NO USER FOUND')
                return res.status(422).send({ error: 'no one by that username here' })
            }

            user.comparePassword(password, (err, match) => {
                if (match && !err) {
                    var token = jwt.sign(user.toJSON(), config.secret, { expiresIn: 100080 }) //end the token to react(client)
                    return res.json({ success: true, token: token, username: username }) //res.json === res.send(sending to react)
                } else {
                    return res.json({ success: false, err })
                }
            })
        })
    }

}
module.exports = new AdminController();