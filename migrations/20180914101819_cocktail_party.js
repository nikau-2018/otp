exports.up = (knex, Promise) => {
  return knex.schema.createTable('cocktail_party', (table) => {
    table.increments('id').primary()
    table.string('host_name')
    table.string('description')
    table.string('guests')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('cocktail_party')
}
