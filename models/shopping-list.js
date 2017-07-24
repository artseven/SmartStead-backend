const mongoose = require('mongoose');

// const User = require('./user-model.js');

const Schema = mongoose.Schema;

const shoppingSchema = new Schema({
    name: { type: String },
    quantity: { type: Number },
    // photoAddress: { type: String },
    // reference the ID of the user
    owner: { type: Schema.Types.ObjectId },
    bought: { type: boolean }
    // user as a subdocument
    // owner: { type: User.schema }
}, {
    timestamps: true
});

const ShoppingItem = mongoose.model('ShoppingItem', shoppingSchema);

module.exports = ShoppingItem;