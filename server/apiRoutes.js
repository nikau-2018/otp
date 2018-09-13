const express = require('express')
const request = require('superagent')

const db = require('../db/db')

const router = express.Router()

router.get('/users', (req, res) => {
  db.getUsers()
  .then(users => {
    res.json({users})
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
