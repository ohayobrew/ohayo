"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    userid:         String,
    username:       String,
    password:       String,
    usertype:       String,    ///ADMIN, USER
    secret: [{
        question:   String,
        answer:     String
    }]
}, {
    collection: 'user'
});

module.exports = mongoose.model('User', UserSchema);