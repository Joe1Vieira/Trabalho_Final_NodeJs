const mongoose = require('mongoose');
const Schema = mongoose.Schema

const pokemonTypes = [
    'Normal', 'Fogo', 'Água', 'Elétrico', 'Grama', 'Gelo', 
    'Lutador', 'Venenoso', 'Terra', 'Voador', 'Psíquico', 
    'Inseto', 'Pedra', 'Fantasma', 'Dragão', 'Sombrio', 
    'Aço', 'Fada'
];

const pokemonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    type: {
        type: [String],
        enum: pokemonTypes,
        required: true
    },
    img_url: {
        type: String,
        required: true 
    }
}, {timestamps: true}); 

module.exports = mongoose.model('Pokemon', pokemonSchema)