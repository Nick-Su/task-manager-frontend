import { connect, useDispatch } from 'react-redux';
import { Dispatch } from "redux";
import { setCurrentInput } from '../../services/actions/tasksActionCreators';
import { addNewTask } from '../../services/actions/tasksActions';
import { saveTaskChanges
 } from '../../services/actions/tasksActions';
 
import './inputTaskBar.css';

const InputTaskBar = (props: any ): JSX.Element => {
  const dispatch: Dispatch<any> = useDispatch();
  const btnText =  props.isEditMode ? "Save changes" : "Add a task";

  const handleAddTask = (): Dispatch<any> | undefined => {
    if(!props.currentInput) {
      alert('Type something!');
      return;
    }
    
    if (props.isEditMode) {
      dispatch(saveTaskChanges(props.editTaskId, props.currentInput))
    } else {
      dispatch(addNewTask(props.currentInput));
    }
    
    dispatch(setCurrentInput(''));
  }

  return (
    <div className="input-taskbar">
      <form> 
        <input 
          type="text" 
          value={ props.currentInput } 
          onChange={ (e) => dispatch(setCurrentInput(e.target.value)) }
        />
        <button type='button' onClick={ handleAddTask }>{ btnText }</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  currentInput: state.tasks.currentInput,
  editTaskId: state.tasks.editTaskId,
  isEditMode: state.tasks.isEditMode
})

export default connect(mapStateToProps)(InputTaskBar);