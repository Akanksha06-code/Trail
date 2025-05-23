const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    icon: {
        type: String,
    },
    name: {   //Example: Salary, Business, etc.
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    startdate: {
        type: Date,
        default: Date.now
    },
    enddate: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('Subscription', SubscriptionSchema);