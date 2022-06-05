const mongoose = require("mongoose")

const table = new mongoose.Schema({
    user_id: {type: String},
    bank_id: {type: String},
    action: {type: String},
    information: [{}],
    date_update: {type: Date, default: Date.now}
})

module.exports = mongoose.model("user_bank_update_log", table)