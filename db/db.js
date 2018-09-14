const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getParties,
  getParty,
  addParty,
  addDrink
}

// to select all the parties in the database. Corresponds to /parties route
function getParties (db = connection) {
  return db('cocktail_party').select()
}

// to select the party the user has selected, based on id
function getParty (id, db = connection) {
  return db('cocktail_party')
    .where('id', id)
    .first()
}

// to insert req.body (partyData) to table
function addParty (partyData, db = connection) {
  return db('cocktail_party')
    .insert({
      'id': partyData.id,
      'host_name': partyData.host_name,
      'description': partyData.description,
      'guests': partyData.guests
    })
}

function addDrink (partyData, db = connection) {
  return db('drinks')
    .where('party_id', partyData.id)
    .insert({
      'name': partyData.name
    })
}
