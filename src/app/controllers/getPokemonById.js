const Pokemon = require('../models/pokemon')
const mongoose = require('mongoose')

    
const getPokemonById = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such pokemon found'})
    }

    const pokemon = await Pokemon.findById(id)

    if (!pokemon) {
        return res.status(400).json({error: 'No such pokemon found'})
    }

    

    res.status(200).json(pokemon)
}

module.exports = { 
    getPokemonById
}

