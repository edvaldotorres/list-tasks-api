const fastify = require('fastify')({
    logger: true
});

fastify.register(require('./routes/healthRoute'));
fastify.register(require('./routes/taskhRoute'));

fastify.listen(3003, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});