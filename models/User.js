const {Schema, model} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    dateReg: {type: Date, default: Date.now},
    dateLastLog: {type: Date}
})


module.exports = model('User', schema)