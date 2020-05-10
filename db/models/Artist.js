const bookshelf = require('../bookshelf')
require('./Album')
require('./Track')


// module.exports = bookshelf.Model.extend({
//   tableName: 'artist',
//   idAttribute: 'id',
//   album: function () {
//     return this.hasMany(Album)
//   }
// })
const Artist = bookshelf.Model.extend({
  tableName: 'artist',
  idAttribute: 'id',
  album: function () {
    return this.hasMany('Album')
  },
  track: function () {
    return this.hasMany('Track').through('Album')
  }
})
module.exports = bookshelf.model('Artist', Artist)
