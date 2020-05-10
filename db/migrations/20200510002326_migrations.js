
exports.up = function(knex) {
    return knex.schema.createTable('artist', t => {
    t.increments('id').unsigned().primary();
    t.string('name').notNull();
  })
  .createTable('album', t => {
    t.increments('id').unsigned().primary();
    t.integer('artist_id').unsigned().notNull().references('id').inTable('artist').onDelete('CASCADE');
    t.string('title').notNull();
  })
  .createTable('track', t => {
    t.increments('id').unsigned().primary();
    t.integer('album_id').unsigned().notNull().references('id').inTable('album').onDelete('CASCADE');
    t.string('title').notNull();
    t.string('composer');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('track').dropTable('album').dropTable('artist');
};
