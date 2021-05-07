const uuid = require('uuid');

let taskList = [
    { id: 1, name: 'Task faker 1' },
    { id: 2, name: 'Task faker 2' },
    { id: 3, name: 'Task faker 3' },
]

const index = (request, reply) => {
    reply.send(taskList)
};

const store = (request, reply) => {
    const newTask = {
        id: uuid.v4(),
        name: request.body.name
    };

    taskList.push(newTask);
    reply.status(201).send(newTask);
};

const show = (request, reply) => {
    const task = taskList.find(t => t.id == request.params.id);

    reply.send(task)
};

const update = (request, reply) => {
    const id = request.params.id;

    taskList = taskList.map(t => {

        if (t.id == id) {
            t.name = request.body.name;
        }

        return t;
    });

    reply.send();
};

const destroy = (request, reply) => {
    const id = request.params.id;

    taskList = taskList.filter(t => t.id != id);

    reply.send();
};

module.exports = {
    index,
    store,
    show,
    update,
    destroy
}