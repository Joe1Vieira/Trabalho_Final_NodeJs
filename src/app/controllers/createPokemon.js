const Pokemon = require('../models/pokemon')

const createPokemon = async (req, res) => {

    const { name, number, type, img_url } = req.body

    try {
        const pokemon = await Pokemon.create({ name, number, type, img_url })
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { 
    createPokemon
}

