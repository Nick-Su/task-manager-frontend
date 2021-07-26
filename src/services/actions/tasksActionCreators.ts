import { tasksActionTypes } from "./tasksActionTypes";
import { Task } from "../models/Task";
import { IActionCreator } from "../models/IActionCreator";

export const getTasks = (): IActionCreator => ({
  type: tasksActionTypes.REQ_GET_TASKS
})

export const getTasksSuccess = (tasks: Task[]): IActionCreator => ({
  type: tasksActionTypes.REQ_GET_TASKS_SUCCESS,
  payload: tasks
})

export const getTasksFailure = (): IActionCreator => ({
  type: tasksActionTypes.REQ_GET_TASKS_FAILURE
})

export const setCurrentInput = (text: string): IActionCreator => ({
  type: tasksActionTypes.SET_CURRENT_INPUT,
  payload: text
})

export const addTask = (task: Task): IActionCreator => ({
  type: tasksActionTypes.REQ_ADD_TASK,
  payload: task
})

export const addTaskSuccess = (task: Task): IActionCreator => ({
  type: tasksActionTypes.REQ_ADD_TASK_SUCCESS,
  payload: task
})

export const addTaskFailure = (): IActionCreator => ({
  type: tasksActionTypes.REQ_ADD_TASK_FAILURE
})

export const deleteTask = (id: string): IActionCreator => ({
  type: tasksActionTypes.REQ_DELETE_TASK,
  payload: id
})

export const deleteTaskSuccess = (id: string): IActionCreator => ({
  type: tasksActionTypes.REQ_DELETE_TASK_SUCCESS,
  payload: id
})

export const toggleIsCompleteSuccess = (id: string): IActionCreator => ({
  type: tasksActionTypes.REQ_TOGGLE_IS_COMPLETE_SUCCESS,
  payload: id
})

export const toggleIsCompleteFailure = (id: string): IActionCreator => ({
  type: tasksActionTypes.REQ_TOGGLE_IS_COMPLETE_FAILURE,
  payload: id
})

export const setEditMode = (data: any): IActionCreator => ({
  type: tasksActionTypes.REQ_SET_EDIT_MODE,
  payload: data,
})

export const saveTaskChangesSuccess = (data: any): IActionCreator => ({
  type: tasksActionTypes.REQ_SAVE_TASK_CHANGES_SUCCESS,
  payload: data
})