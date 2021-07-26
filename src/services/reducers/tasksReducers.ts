import { tasksActionTypes } from '../actions/tasksActionTypes';
import { IState } from '../models/GlobalState';

export const initialState: IState = {
  tasks: [],
  currentInput: '',
  editTaskId: '',
  isEditMode: false,
}

export const tasksReducer = (state = initialState, action: any): IState => {
  switch (action.type) {
    case tasksActionTypes.SET_CURRENT_INPUT:
      return { ...state, currentInput: action.payload }
    case tasksActionTypes.REQ_GET_TASKS:
      return { ...state }
    case tasksActionTypes.REQ_GET_TASKS_SUCCESS:
      return {...state, tasks: action.payload }
    case tasksActionTypes.REQ_GET_TASKS_FAILURE:
      return { ...state }
    case tasksActionTypes.REQ_ADD_TASK_SUCCESS:
      return { ...state, tasks: [...state.tasks, action.payload]}
    case tasksActionTypes.REQ_DELETE_TASK_SUCCESS:
      return { ...state, tasks: state.tasks.filter((item: any) => item._id !== action.payload) }
    case tasksActionTypes.REQ_TOGGLE_IS_COMPLETE_SUCCESS: 
      let taskCopy = [...state.tasks];
      taskCopy.map((item: any) => {
        if (item._id === action.payload) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      })
      return { ...state, tasks: [...taskCopy] }
    case tasksActionTypes.REQ_SET_EDIT_MODE:
     return { ...state, isEditMode: true, currentInput: action.payload.description, editTaskId: action.payload.id }
    case tasksActionTypes.REQ_SAVE_TASK_CHANGES_SUCCESS:
      let updatedList = [...state.tasks];
      updatedList.map((item: any) => {
        if (item._id === action.payload.id) {
          item.description = action.payload.description;
        }
        return item;
      })
      return { ...state, tasks: updatedList, isEditMode: false, editTaskId: '' }
    default:
      return state;
  }
}