var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
;

const contactSchema = new mongoose.Schema({
    name: {
        type: String
    },
    number: {
        type: Number
    },
    email: {
        type: String
    }
})

const Contact = mongoose.model('contact', contactSchema, 'contacts');



module.exports = Contact;