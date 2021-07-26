import { Task } from "./Task";

export interface IActionCreator {
  type: string,
  payload?: string | Task[] | {},
}