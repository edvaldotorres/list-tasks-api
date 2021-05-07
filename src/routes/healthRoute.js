const healthController = require('../controllers/healthController')

const routes = async(fastify) => {
    fastify.get('/health', healthController.health);
};

module.exports = routes;