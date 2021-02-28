var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

let User = new mongoose.Schema({
    username: {
        type: String,
        default: '',
        required: 'username is required',
        trim: true
    },
    email: {
        type: String,
        default: '',
        required: 'email is required',
        trim: true
    },
    displayName: {
        type: String,
        default: '',
        required: 'displayName is required',
        trim: true
    },
    created: {
        type: Date,
        default: Date.now,
    },
    updated: {
        type: Date,
        default: Date.now,
    },
    // password: {
    //     type: String,
    //     required: true,
    //     trim: true,
    //     default: '',
        
    // }
},
{
    collection: "users"
}
);
let options = ({missingPasswordError: 'wrong/ missing password'});
User.plugin(passportLocalMongoose);

module.exports.User = mongoose.model("User",User);