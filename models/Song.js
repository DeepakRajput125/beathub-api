const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,    
    }, 
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
        required: true
    },
    album: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
        required: true
    },
    genre: {
        type: String,
        enum: ['Pop', 'Rock', 'Jazz', 'Hip-Hop', 'Electronic'],
        default: 'Pop'
    },
    duration: {
        type: Number,
        required: true,
        min: 0
    }
}, {timestamps: true});

module.exports = mongoose.model('Song', songSchema);