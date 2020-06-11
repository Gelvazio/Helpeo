const mongoose = require('mongoose');
const crypto = require('crypto');

const User = new mongoose.Schema({
        email: {
            type: String,
            required: true,
            unique: true,
        },
        name:String,
        password: {
            type: String,
            required: true,
            select: true,
            set: value => crypto
                .createHash('md5')
                .update(value)
                .digest('hex'),
        },
    },
    {
        timestamp: true,
        toJSON: {virtuals: true, getters: true},
        toObject: {virtuals: true, getters: true},
    }
);

module.exports = mongoose.model('User', User);