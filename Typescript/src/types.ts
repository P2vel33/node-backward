export interface ITask {
  id: number;
  text: string;
  done: boolean;
}

export type ICreateTask = Pick<ITask, "text">;
export type IUpdateTask = Omit<ITask, "id">;
