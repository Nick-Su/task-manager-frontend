import { useEffect } from 'react';
import { Dispatch } from "redux";
import { useDispatch, connect } from "react-redux";
import TaskList from '../components/taskList/TaskList';
import { fetchTasks } from "../services/actions/tasksActions";
import { Task } from '../services/models/Task';

const TasksContainer = (props: any): JSX.Element => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch])

  const activeTaskList = props.tasks.filter((item: Task) => !item.isCompleted);
  const completedTaskList = props.tasks.filter((item: Task) => item.isCompleted);

  return (
    <div className='tasksContainer'>
      <TaskList tasks={ activeTaskList } />
      <TaskList tasks={ completedTaskList } />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  loading: state.tasks.loading,
  tasks: state.tasks.tasks,
  hasErrors: state.tasks.hasErrors
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchTasks: () => dispatch(fetchTasks)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);