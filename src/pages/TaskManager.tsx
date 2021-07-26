import { Header } from "../components/header/Header";
import TasksContainer from "../containers/TasksContainer";
import InputTaskBar from "../components/input/InputTaskBar";

const TaskManager = () => {
  return (
    <div>
      <Header />
      <InputTaskBar />
      <TasksContainer />
    </div>
  )
}

export default TaskManager;