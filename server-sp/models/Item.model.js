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
    barcode: {
        type: String,
        required: true
    }
});

const ItemModel = mongoose.model("items",Item)

module.exports = ItemModel;