const express = require('express')

const {createPokemon} = require('./app/controllers/createPokemon')
const {getPokemon} = require('./app/controllers/getPokemon')
const {getPokemonById} = require('./app/controllers/getPokemonById')
const {changePokemon} = require('./app/controllers/changePokemon')
const {deletePokemon} = require('./app/controllers/deletePokemon')

const router = express.Router()

router.get('/pokemon', getPokemon)
router.get('/pokemon/:id', getPokemonById)
router.post('/pokemon', createPokemon)
router.patch('/pokemon/:id', changePokemon)
router.delete('/pokemon/:id', deletePokemon)


module.exports = router