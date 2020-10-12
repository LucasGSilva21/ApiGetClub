const mongoose = require("../database");

const starSchema = new mongoose.Schema({
    total: {
        type: Number,
        required: true,
    },
    customer: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
    },
    enterprise: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Star = mongoose.model("Star", starSchema);

module.exports = Star;
