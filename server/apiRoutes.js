// const request = require('superagent')

const express = require('express')

const db = require('../db/db')

const router = express.Router()

// route to get all parties in the database
router.get('/parties', (req, res) => {
  db.getParties()
    .then(parties => {
      res.json({parties})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// route to get one party based on the id
router.get('/parties/:id', (req, res) => {
  const id = req.params.id
  db.getParty(id)
    .then(party => {
      res.json({party})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// route to add party to database
router.post('/parties', (req, res) => {
  console.log('server', req.body)
  const partyData = req.body
  db.addParty(partyData)
    .then(res => {
      console.log('added party details to database')
      partyData.drinks.map(drinkId => {
        cocktailApi(drinkId)
      })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// route to get ingredients to database using external API
function cocktailApi (drinkId) {
  console.log(drinkId)
  request
    .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
    .then((res) => {
      const ingredients = res.body.drinks
      db.addIngredients(ingredients.strIngredient1)
      console.log('added ingredient to database')
    })
}

module.exports = router
