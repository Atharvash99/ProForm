const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        require: true
    },
    user_email: {
        type: String,
        require: true
    },
    user_password: {
        type: String,
        require: true
    },
    user_number: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    isActive: {
        type: Boolean,
        require: true
    }
})

userSchema.set("timestamps", true);
module.exports = mongoose.model('users', userSchema);
