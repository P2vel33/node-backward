let idCounter = 1;

const tasks = [
  {
    id: 0,
    text: "HELLO LOX",
    done: false,
  },
];

exports.createTask = (body) => {
  const task = {
    id: idCounter,
    text: body.text,
    done: false,
  };
  idCounter++;
  tasks.push(task);
  return task;
};

exports.readTasks = () => {
  return tasks;
};
exports.readTask = (id) => {
  return tasks.find((task) => task.id === id);
};
exports.updateTask = (id, body) => {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.text = body.text;
    task.done = body.done;
    return task;
  } else {
    return null;
  }
};
exports.deleteTask = (id) => {
  const index = tasks.findIndex((task) => task.id === id);
  if (index >= 0) {
    tasks.splice(index, 1);
  }
  return null;
};
