const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testerSchema = new Schema({

    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    addressLineOne: {
        type: String,
        required: false
    },
    town: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    postcode: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    telephoneNo: {
        type: String,
        required: false
    },
    Disability: {
        type: [String],
        required: false
    },
    techSkill: {
        type: String,
        required: false
    },
    Devices: {
        type: [String],
        required: false
    },
    specialHardware: {
        type: String,
        required: false
    },
    testingLocation: {
        type: [String],
        required: false
    },
    Assistance: {
        type: [String],
        required: false
    },
    additionalInformation: {
        type: String,
        required: false
    },
    standby : {
        type: Boolean,
        required: false
    },
    hearAbout : {
        type: String,
        required: false
    },
    rating : {
        type: Number,
        required: false
    },
    dob : {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Tester', testerSchema);
