const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    }
})
const adminModel = mongoose.models?.Admin || mongoose.model('Admin', adminSchema);
export default adminModel