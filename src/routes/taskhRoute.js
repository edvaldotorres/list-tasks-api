const taskController = require('../controllers/taskController')

const routes = async(fastify) => {
    fastify.get('/tasks', taskController.index);
    fastify.post('/tasks', taskController.store);
    fastify.get('/tasks/:id', taskController.show);
    fastify.put('/tasks/:id', taskController.update);
    fastify.delete('/tasks/:id', taskController.destroy);
};

module.exports = routes;