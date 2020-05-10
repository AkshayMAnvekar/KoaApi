'use strict';
const Album = require('./../../db/models/Album')

const generateId = require('../../utils/generateId.util');

/**
 * Mock database, replace this with your db models import, required to perform query to your database.
 */

exports.getOne = async ctx => {
  const { id } = ctx.params;
  const album = await new Album({ id: id })
    .fetch({ withRelated: ["track","artist"] })
  ctx.assert(album, 404, "The requested album doesn't exist");
  ctx.status = 200;
  ctx.body = album;
};

exports.getAll = async ctx => {
  const album = await new Album().fetchAll({ withRelated: ["track","artist"] })
  ctx.assert(album, 404, "The requested error");
  ctx.status = 200;
  ctx.body = album;
};

exports.createOne = async ctx => {
  const body = ctx.request.body;
  ctx.assert(body, 400, 'The info is malformed!');
  const album = await new Album()
    .save({
      title: body.title,
      artist_id: body.artist_id
    },{ debug : true})
    .catch(err => { 
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: err.message || 'Sorry, an error has occurred.'
      };
    })
    
    
  ctx.body = await new Album({ title: body.title })
    .fetch({ withRelated: ["track","artist"] })
    .catch(err => { 
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: err.message || 'Sorry, an error has occurred.'
      };
    })
};

exports.deleteOne = async ctx => {
  await new Album({ id: ctx.params.id })
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

  const album = await new Album({ id: ctx.params.id })
    .fetch({ withRelated: ['artist', 'track'] })
    .catch(err => { 
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: err.message || 'Sorry, an error has occurred.'
      };
    })

  ctx.assert(album, 400, 'The info is malformed!');
  await album
    .save({
      title: body.title,
      artist_id: body.artist_id
    })
    .catch(err => { 
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: err.message || 'Sorry, an error has occurred.'
      };
    })

  ctx.body = album
};
