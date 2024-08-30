const Pokemon = require('../models/pokemon')

const getPokemon = async (req, res) => {

    const pokemon = await Pokemon.find({})

    res.status(200).json(pokemon)
}

module.exports = { 
    getPokemon
}

