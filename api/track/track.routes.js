'use strict';

const controller = require('./track.controller');

module.exports = Router => {
  const router = new Router({
    prefix: `/tracks`,
  });

  router
    .get('/:id', controller.getOne)
    .get('/', controller.getAll)
    .post('/', controller.createOne)
    .put('/:id', controller.updateOne)
    .delete('/:id', controller.deleteOne);

  return router;
};
