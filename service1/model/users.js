const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const table = new mongoose.Schema({
    user: {type: String, unique: true, require: true},
    email: {type: String},
    password: {type: String},
    cellphone: {type: String},
    date: {type: Date, default: Date.now}
});

table.pre("save", function (next) {
    let user = this
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, 10, (error, hashPass) => {
        if (error) return "Error create user"
        user.password = hashPass
        return next();
    })
})

module.exports = mongoose.model("user", table)
