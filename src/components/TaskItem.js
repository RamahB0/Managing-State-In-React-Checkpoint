import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

/**
 * TaskItem component - Displays a single task with actions
 * Demonstrates: useContext for accessing dispatch, event handling
 * Props:
 *   task: task object with id, name, description, completed
 *   onEdit: function to call when edit button is clicked
 */
function TaskItem({ task, onEdit }) {
  const { dispatch } = useContext(TaskContext);

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  };

  const handleDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete "' + task.name + '"?');
    if (confirmed) {
      dispatch({ type: 'DELETE_TASK', payload: task.id });
    }
  };

  return (
    <div className={'task-item ' + (task.completed ? 'task-completed' : 'task-active')}>
      <div className="task-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
          id={'task-' + task.id}
        />
      </div>
      <div className="task-content">
        <label htmlFor={'task-' + task.id} className="task-name">
          {task.name}
        </label>
        <p className="task-description">{task.description}</p>
      </div>
      <div className="task-actions">
        <button className="btn btn-edit" onClick={() => onEdit(task)} disabled={task.completed} title={task.completed ? 'Cannot edit a completed task' : 'Edit task'}>
          Edit
        </button>
        <button className="btn btn-delete" onClick={handleDelete} title="Delete task">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
