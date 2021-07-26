import { Task } from "./Task";

export interface IState {
  tasks: Task[],
  currentInput: string,
  editTaskId: string,
  isEditMode: boolean,
}