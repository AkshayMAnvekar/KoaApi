const bookshelf = require('../bookshelf')
// const Artist = require('./Artist')
// const Track = require('./Track')

// module.exports = bookshelf.Model.extend({
//   tableName: 'album',
//   idAttribute: 'id',
//   track: function () {
//     return this.hasMany(Track)
//   },
//   artist: function () {
//     return this.belongsTo(Artist)
//   },
// })
require('./Artist');
require('./Track')
var Album = bookshelf.Model.extend({
  tableName: 'album',
  idAttribute: 'id',
  track: function () {
    return this.hasMany('Track')
  },
  artist: function () {
    return this.belongsTo('Artist')
  },
});

module.exports = bookshelf.model('Album', Album);
