const mongoose = require("mongoose")

const Item = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    basePrice: {
        type: Number,
        required: true
    }
},{
    timestamps: true,
});

module.exports = mongoose.model("items",Item)