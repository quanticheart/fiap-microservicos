const mongoose = require("mongoose")

const table = new mongoose.Schema({
    user_id: {type: String},
    bank_name: {type: String, require: true},
    account_type: {type: String},
    card_limit: {type: String},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model("user_bank_details", table)
