import { useDispatch } from 'react-redux';
import { Dispatch } from "redux";
import { deleteTask, toggleIsComplete } from '../../services/actions/tasksActions';
import { setEditMode } from '../../services/actions/tasksActionCreators';
import { Task } from '../../services/models/Task';

import './taskList.css';
const ActiveTaskList = (props: any): JSX.Element => {

  const dispatch: Dispatch<any> = useDispatch();
  const tasks = props.tasks;

  const deleteTaskHandler = (id: string) => {
    dispatch(deleteTask(id))
  }

  const toggleTaskCompletion = (id: string) => {
    dispatch(toggleIsComplete(id));
  }

  const editTask = (id: string, description: string) => {
    dispatch(setEditMode({id, description}))
  }
  
  let listTasks = tasks.map( (item: Task) => {
      return (
        <label key={item._id.toString()}> 
          <li className={"task-item " +  (item.isCompleted ? 'complete' : 'active')}>
            <input type="checkbox" checked={ item.isCompleted } onChange={ () => toggleTaskCompletion(item._id) } />
            <span>{item.description}</span>
            <span className="task-actions"> 
              <button className="editButton" onClick={() => editTask(item._id, item.description )}><i className="fas fa-pencil-alt"></i>Edit</button>
              <button className="deleteButton" onClick={() => deleteTaskHandler(item._id)}><i className="fas fa-trash"></i>Delete</button>          
            </span> 
          </li>  
        </label>
      )
  });

  return (
      <ul>
       { listTasks }
      </ul>
  )
}

export default ActiveTaskList