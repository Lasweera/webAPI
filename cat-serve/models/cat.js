const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({

    name: {
        type: String,
        minlength: 4,
        maxlength: 20,
        required: true
    },
    gender: String,
    description: {
        type: String,
        minlength: 5,
        maxlength: 200,
        required: true
    },
    likeCount: Number,
    //unlikeCount: Number,
    imageUrl: String

});

const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;