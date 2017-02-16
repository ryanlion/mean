var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    symbol: String,
    timestamp: { type: Date, default: Date.now },
    tradingDay: {type: Date},
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
});

mongoose.model('Comment', CommentSchema);