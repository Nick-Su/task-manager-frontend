import { combineReducers } from 'redux';
import { tasksReducer } from './tasksReducers';

const rootReducer = combineReducers({
  tasks: tasksReducer,
})

export default rootReducer;