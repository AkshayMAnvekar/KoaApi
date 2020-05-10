'use strict';
const Artist = require("../../db/models/Artist");

const generateId = require('../../utils/generateId.util');

/**
 * Mock database, replace this with your db models import, required to perform query to your database.
 */


exports.getOne = async ctx => {
  const { id } = ctx.params;
  const artist = await new Artist({ id: id })
    .fetch({ withRelated: ["album","track"] })
    // .then( (track) => {
    //   var album = track.related("album");
    //   if (album.id) {
    //     artist = album.related("artist").fetch();
    //   }
    //   return track
    // });
  // .catch(err => new InternalServerError(err.toString()))
  ctx.assert(artist, 404, "The requested artist doesn't exist");
  console.log(artist.relatedData)
  ctx.status = 200;
  ctx.body = artist;
};

exports.getAll = async ctx => {
  const artist = await new Artist()
    .fetchAll({ withRelated: ['album', "track"] })

  ctx.status = 200;
  ctx.body = artist;
};

exports.createOne = async ctx => {
  const body = ctx.request.body;
  ctx.assert(body, 400, 'The info is malformed!');
  const artist = await new Artist({
      name: body.name,
    })
    .save()
    .catch(err => { 
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: err.message || 'Sorry, an error has occurred.'
      };
    })
  
  ctx.body = await new Artist({ name: body.name })
    .fetch({ withRelated: ['album', 'track'] })
    .catch(err => { 
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: err.message || 'Sorry, an error has occurred.'
      };
    })
};

exports.deleteOne = async ctx => {
  await new Artist({ id: ctx.params.id })
      .destroy()
      .catch(err => { 
        ctx.status = 400;
        ctx.body = {
          status: 'error',
          message: err.message || 'Sorry, an error has occurred.'
        };
      })
    ctx.body = {
      status: 'Deleted'
    }
};

exports.updateOne = async ctx => {
  const body = ctx.request.body;
  ctx.assert(body, 400, 'The info is malformed!');

  const artist = await new Artist({ id: ctx.params.id })
      .fetch({ withRelated: ['album', 'track'] })
      .catch(err => { 
        console.log(err);
        
        ctx.status = 400;
        ctx.body = {
          status: 'error',
          message: err.message || 'Sorry, an error has occurred.'
        };
      })

  ctx.assert(artist, 400, 'The info is malformed!');
  await artist
    .save({
      name: body.name
    })
    .catch(err => { 
      console.log(err);

      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: err.message || 'Sorry, an error has occurred.'
      };
    })

  ctx.body = artist
};
