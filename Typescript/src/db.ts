import { ICreateTask, ITask, IUpdateTask } from "./types";

let idCounter = 1;

const tasks: ITask[] = [
  {
    id: 0,
    text: "HELLO LOX",
    done: false,
  },
];

export const createTask = (body: ICreateTask): ITask | null => {
  if (!body.text) return null;
  const task = {
    id: idCounter,
    text: body.text,
    done: false,
  };
  idCounter++;
  tasks.push(task);
  return task;
};

export const readTasks = () => {
  return tasks;
};
export const readTask = (id: number) => {
  return tasks.find((task) => +task.id === +id);
};
export const updateTask = (id: number, body: IUpdateTask) => {
  const task = tasks.find((task) => +task.id === +id);
  console.log(task);
  if (task) {
    task.text = body.text;
    task.done = body.done;
    return task;
  } else {
    return null;
  }
};
export const deleteTask = (id: number): void => {
  const index = tasks.findIndex((task) => +task.id === +id);
  if (index >= 0) {
    tasks.splice(index, 1);
  }
};
