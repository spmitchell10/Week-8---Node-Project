"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

	users: String,
	age: Number,
	jslover: Boolean

});

module.exports = mongoose.model('User', userSchema);