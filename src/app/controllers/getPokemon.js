const Pokemon = require('../models/pokemon')

const getPokemon = async (req, res) => {

    const pokemon = await Pokemon.find({}).sort({createdAt: -1})

    res.status(200).json(pokemon)
}

module.exports = { 
    getPokemon
}

