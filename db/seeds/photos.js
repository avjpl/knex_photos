
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(function () {
      // Inserts seed entries
      return knex('photos').insert([
        { url: 'http://source.unsplash.com/1300x600/?nature' },
        { url: 'http://source.unsplash.com/1000x900/?water' },
        { url: 'http://source.unsplash.com/900x1300/?film' },
        { url: 'http://source.unsplash.com/900x900/?travel' },
        { url: 'http://source.unsplash.com/1000x600/?technology' },
        { url: 'http://source.unsplash.com/600x900/?animals' },
        { url: 'http://source.unsplash.com/1600x900/?people' },
        { url: 'http://source.unsplash.com/1300x600/?nature' },
        { url: 'http://source.unsplash.com/1000x900/?water' },
        { url: 'http://source.unsplash.com/900x1300/?film' },
        { url: 'http://source.unsplash.com/900x900/?travel' },
        { url: 'http://source.unsplash.com/1000x600/?technology' },
        { url: 'http://source.unsplash.com/600x900/?animals' },
        { url: 'http://source.unsplash.com/1600x900/?people' },
        { url: 'http://source.unsplash.com/1300x600/?nature' },
        { url: 'http://source.unsplash.com/1000x900/?water' },
        { url: 'http://source.unsplash.com/900x1300/?film' },
        { url: 'http://source.unsplash.com/900x900/?travel' },
        { url: 'http://source.unsplash.com/1000x600/?technology' },
        { url: 'http://source.unsplash.com/600x900/?animals' },
        { url: 'http://source.unsplash.com/1600x900/?people' },
        { url: 'http://source.unsplash.com/1300x600/?nature' },
        { url: 'http://source.unsplash.com/1000x900/?water' },
        { url: 'http://source.unsplash.com/900x1300/?film' },
        { url: 'http://source.unsplash.com/900x900/?travel' },
        { url: 'http://source.unsplash.com/1000x600/?technology' },
        { url: 'http://source.unsplash.com/600x900/?animals' },
        { url: 'http://source.unsplash.com/1600x900/?people' },
        { url: 'http://source.unsplash.com/1300x600/?nature' },
        { url: 'http://source.unsplash.com/1000x900/?water' },
        { url: 'http://source.unsplash.com/900x1300/?film' },
        { url: 'http://source.unsplash.com/900x900/?travel' },
        { url: 'http://source.unsplash.com/1000x600/?technology' },
        { url: 'http://source.unsplash.com/600x900/?animals' },
        { url: 'http://source.unsplash.com/1600x900/?people' },
        { url: 'http://source.unsplash.com/1300x600/?nature' },
        { url: 'http://source.unsplash.com/1000x900/?water' },
        { url: 'http://source.unsplash.com/900x1300/?film' },
        { url: 'http://source.unsplash.com/900x900/?travel' },
        { url: 'http://source.unsplash.com/1000x600/?technology' },
        { url: 'http://source.unsplash.com/600x900/?animals' },
        { url: 'http://source.unsplash.com/1600x900/?people' },
        { url: 'http://source.unsplash.com/1300x600/?nature' },
        { url: 'http://source.unsplash.com/1000x900/?water' },
        { url: 'http://source.unsplash.com/900x1300/?film' },
        { url: 'http://source.unsplash.com/900x900/?travel' },
        { url: 'http://source.unsplash.com/1000x600/?technology' },
        { url: 'http://source.unsplash.com/600x900/?animals' },
        { url: 'http://source.unsplash.com/1600x900/?people' },
        { url: 'http://source.unsplash.com/1300x600/?nature' },
        { url: 'http://source.unsplash.com/1000x900/?water' },
        { url: 'http://source.unsplash.com/900x1300/?film' },
        { url: 'http://source.unsplash.com/900x900/?travel' },
        { url: 'http://source.unsplash.com/1000x600/?technology' },
        { url: 'http://source.unsplash.com/600x900/?animals' },
        { url: 'http://source.unsplash.com/1600x900/?people' },
        { url: 'http://source.unsplash.com/1300x600/?nature' },
        { url: 'http://source.unsplash.com/1000x900/?water' },
        { url: 'http://source.unsplash.com/900x1300/?film' },
        { url: 'http://source.unsplash.com/900x900/?travel' },
        { url: 'http://source.unsplash.com/1000x600/?technology' },
        { url: 'http://source.unsplash.com/600x900/?animals' },
        { url: 'http://source.unsplash.com/1600x900/?people' },
        { url: 'http://source.unsplash.com/1300x600/?nature' },
        { url: 'http://source.unsplash.com/1000x900/?water' },
        { url: 'http://source.unsplash.com/900x1300/?film' },
        { url: 'http://source.unsplash.com/900x900/?travel' },
        { url: 'http://source.unsplash.com/1000x600/?technology' },
        { url: 'http://source.unsplash.com/600x900/?animals' },
        { url: 'http://source.unsplash.com/1600x900/?people' },
        { url: 'http://source.unsplash.com/1300x600/?nature' },
        { url: 'http://source.unsplash.com/1000x900/?water' },
        { url: 'http://source.unsplash.com/900x1300/?film' },
        { url: 'http://source.unsplash.com/900x900/?travel' },
        { url: 'http://source.unsplash.com/1000x600/?technology' },
        { url: 'http://source.unsplash.com/600x900/?animals' },
        { url: 'http://source.unsplash.com/1600x900/?people' },
        { url: 'http://source.unsplash.com/1300x600/?nature' },
        { url: 'http://source.unsplash.com/1000x900/?water' },
        { url: 'http://source.unsplash.com/900x1300/?film' },
        { url: 'http://source.unsplash.com/900x900/?travel' },
        { url: 'http://source.unsplash.com/1000x600/?technology' },
        { url: 'http://source.unsplash.com/600x900/?animals' },
        { url: 'http://source.unsplash.com/1600x900/?people' },
      ]);
    });
};
