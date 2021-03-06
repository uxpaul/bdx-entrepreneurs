'use strict'
let mongoose = require('mongoose');
let userSchema = new mongoose.Schema({


    name: String,
    prenom: String,
    company: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Companie'
    }],
    firstname: String,
    address: {
        type: mongoose.Schema.Types.Mixed
    },
    social: [mongoose.Schema.Types.Mixed],
    number: {
        type: Number
    },
    email: {
        type: String,
        unique: true
    },
    image: String,
    password: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    fondateur: {
        type: Boolean,
        default: false
    },
    cofondateur: {
        type: Boolean,
        default: true
    },
    active: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

// creating and exporting model with the model method of mongoose.
module.exports = mongoose.model('User', userSchema);
