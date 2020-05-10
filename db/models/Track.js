'use strict';
const bookshelf = require('../bookshelf')
require('./Album')
require('./Artist')


// module.exports = bookshelf.Model.extend({
//   tableName: 'track',
//   idAttribute: 'id',
//   album: function () {
//     return this.belongsTo(Album);
//   }
// })
const Track = bookshelf.Model.extend({
  tableName: 'track',
  idAttribute: 'id',
  album: function () {
    return this.belongsTo('Album');
  },
  artist: function () {
    return this.belongsTo('Artist').through('Album');
  }
})
module.exports = bookshelf.model('Track', Track)
