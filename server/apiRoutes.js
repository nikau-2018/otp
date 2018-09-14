import request from 'superagent'
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
router.post('/parties/:id', (req, res) => {
  const partyData = req.body
  db.addParty(partyData)
    .then(res => {
      console.log('added party details to database')
    })
  db.addDrink(partyData)
    .then(res => {
      console.log('added drink names to database')
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// route to get ingredients to database using external API

module.exports = router
