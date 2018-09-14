
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('drinks').del()
    .then(function () {
      // Inserts seed entries
      return knex('drinks').insert([
        {id: 8801,
          party_id: 1,
          name: 'Margarita',
          photo: 'http://www.placepuppy.net/400/250' }
      ])
    })
}
