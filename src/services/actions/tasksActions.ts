import { Dispatch } from "react";
import { Task } from "../models/Task";
import { 
  getTasks,
  getTasksSuccess,
  getTasksFailure,
 
  addTaskSuccess,
  addTaskFailure, 

  deleteTaskSuccess,
  toggleIsCompleteSuccess,
  toggleIsCompleteFailure,
  saveTaskChangesSuccess,
} from "./tasksActionCreators";

const axios = require('axios');
const url = 'http://localhost:5000/api/tasks/';

export const fetchTasks = (): Dispatch<any> => {
  return async (dispatch: any): Promise<void> => {
    dispatch(getTasks())
    try {
      const response = await axios.get(url);
      dispatch(getTasksSuccess(response.data));
    } catch (error) {
      dispatch(getTasksFailure());
    }
  }
}

export const addNewTask = (description: string): Dispatch<any> => {
  return async (dispatch: any): Promise<void> => {
    try {
      const response = await axios.post(url,  { description });
      dispatch(addTaskSuccess(response.data));
    } catch (error) {
      dispatch(addTaskFailure());
      console.error(error);
    }
  }
}

export const deleteTask = (id: string): Dispatch<any> => {
  return async (dispatch: any): Promise<void> => {
    try {
      await axios.delete(`${url}${id}`);
      dispatch(deleteTaskSuccess(id))
    } catch (error) {
      console.error(error);
    }
  }
}

export const toggleIsComplete = (id: string): Dispatch<any> => {
  return async (dispatch: any): Promise<void> => {
    try {
      await axios.patch(`${url}${id}`, { isToggleComplete: true });
      dispatch(toggleIsCompleteSuccess(id));
    } catch (error) {
      console.error(error);
      dispatch(toggleIsCompleteFailure(id));
    }
  }
}

export const saveTaskChanges = (id: string, description: string): Dispatch<any> => {
  return async (dispatch: any): Promise<void> => {
    try {
      await axios.patch(`${url}${id}`, { description });
      dispatch(saveTaskChangesSuccess({ id, description }))
    } catch (error) {
      console.error(error);
    }
  }
}