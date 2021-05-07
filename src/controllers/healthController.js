const health = (request, reply) => {
    reply.send({
        status: "ALIVE",
        statusText: "Application is running."
    });
}

module.exports = {
    health
}