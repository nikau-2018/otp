exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Amy'},
        {id: 2, name: 'Emma'},
        {id: 3, name: 'George'},
        {id: 4, name: 'James'},
        {id: 5, name: 'Lauren'}
      ])
    })
}
