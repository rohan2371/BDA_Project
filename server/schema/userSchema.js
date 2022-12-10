
const mongoose = require('mongoose');

const autoIncrement = require('mongoose-auto-increment');
const userSchema = mongoose.Schema({
    name : String,
    username : String,
    email : String,
    phone : String

})
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,'employee');

 const user = mongoose.model('employee',userSchema);

module.exports = user;