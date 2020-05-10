"use strict";
const Track = require("../../db/models/Track");
const Album = require("../../db/models/Album");
const Artist = require("../../db/models/Artist");

const generateId = require("../../utils/generateId.util");


exports.getOne = async (ctx) => {
  const { id } = ctx.params;
  const track = await new Track({ id: id })
    .fetch({ withRelated: ["album", "artist"] })
  ctx.assert(track, 404, "The requested track doesn't exist");
  ctx.status = 200;
  ctx.body = track;
};

exports.getAll = async (ctx) => {
  const track = await new Track().fetchAll({ withRelated: ["album", "artist"] });
  ctx.status = 200;
  ctx.body = track;
};

exports.createOne = async ctx => {
  const body = ctx.request.body;
  ctx.assert(body.album_id, 400, 'The info is malformed!');

  const track = await new Track()
  .save({
    title: body.title,
    album_id: body.album_id,
    composer: body.composer
  },{ debug : true})
  .then(
    (a) => {
      console.log(track);
    }
  )
  .catch(err => { 
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  })

  ctx.body = await new Track({ title: body.title })
    .fetch({ withRelated: ['album'] })
    .catch(err => { 
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: err.message || 'Sorry, an error has occurred.'
      };
    })
};

exports.deleteOne = async ctx => {
  await new Track({ id: ctx.params.id })
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

  const track = await new Track({ id: ctx.params.id })
    .fetch({ withRelated: ['album'] })
    .catch(err => { 
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: err.message || 'Sorry, an error has occurred.'
      };
    })

  ctx.assert(track, 400, 'The info is malformed!');
  await track
    .save({
      album_id: body.album_id,
      title: body.title,
      composer: body.composer
    })
    .catch(err => { 
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: err.message || 'Sorry, an error has occurred.'
      };
    })

  ctx.body = track
};