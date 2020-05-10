'use strict';
// import config from './knexfile'
const { databaseConfig } = require('../config');
// import { NODE_ENV } from '../src/config/env'
const Knex = require('knex')({
  client: 'postgresql',
  connection: databaseConfig
});
const bookshelf = require('bookshelf')(Knex)
const BookshelfUuid = require('bookshelf-uuid')

// const environment = NODE_ENV || 'development'

// const knex = Knex()
// const bookshelf = Bookshelf()
// bookshelf.plugin('registry')
bookshelf.plugin(BookshelfUuid)

module.exports = bookshelf