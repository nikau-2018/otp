exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cocktail_party').del()
    .then(function () {
      // Inserts seed entries
      return knex('cocktail_party').insert([
        {id: 1,
          host_name: 'Suzy Kato',
          description: 'Dancing with the Stars elmination party',
          guests: 'Lauren, Emma, James, Amy, Jason Gunn' }
      ])
    })
}
