const mongoose = require("mongoose")
const table_manager = new mongoose.Schema({
    user_id: {type: String},
    user_name: {type: String},
    information: [{}],
    date_login: {type: Date, default: Date.now}
})

module.exports = mongoose.model("user_login_log", table_manager)