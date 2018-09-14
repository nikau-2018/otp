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

module.exports = router
