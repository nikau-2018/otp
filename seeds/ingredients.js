exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 9901,
          name: 'Tequila',
          claimed: '',
          claimed_by: 'Emma',
          party_id: 1 }
      ])
    })
}
