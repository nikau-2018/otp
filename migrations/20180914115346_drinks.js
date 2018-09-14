exports.up = (knex, Promise) => {
  return knex.schema.createTable('drinks', (table) => {
    table.increments('id').primary()
    table.integer('party_id').references('cocktail_party.id')
    table.string('name')
    table.string('photo')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('drinks')
}
