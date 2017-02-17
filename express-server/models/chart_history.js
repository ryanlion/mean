var mongoose = require('mongoose');

var historySchema = new mongoose.Schema({
    symbol: String,
    timestamp: { type: Date, default: Date.now },
    tradingDay: {type: Date},
    open: {type: Number},
    high: {type: Number},
    low: {type: Number},
    close: {type: Number},
    volume: {type: Number},
    openInterest: {String}
    //post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
});

var History = mongoose.model('History', historySchema);

export {History}