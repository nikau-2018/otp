exports.up = (knex, Promise) => {
  return knex.schema.createTable('ingredients', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('claimed')
    table.string('claimed_by')
    table.integer('party_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('ingredients')
}
