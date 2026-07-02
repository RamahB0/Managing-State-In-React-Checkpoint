import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

/**
 * TaskForm component - Handles adding and editing tasks
 * Demonstrates: useState for form state, useContext for accessing dispatch
 */
function TaskForm({ editingTask, onCancelEdit }) {
  const { dispatch } = useContext(TaskContext);
  const [name, setName] = useState(editingTask ? editingTask.name : '');
  const [description, setDescription] = useState(editingTask ? editingTask.description : '');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Task name is required';
    if (!description.trim()) newErrors.description = 'Task description is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (editingTask) {
      dispatch({ type: 'EDIT_TASK', payload: { id: editingTask.id, updates: { name: name.trim(), description: description.trim() } } });
      onCancelEdit();
    } else {
      dispatch({ type: 'ADD_TASK', payload: { name: name.trim(), description: description.trim() } });
      setName('');
      setDescription('');
      setErrors({});
    }
  };

  return (
    <div className="task-form-container">
      <h2 className="form-title">{editingTask ? 'Edit Task' : 'Add New Task'}</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="task-name">Task Name *</label>
          <input id="task-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter task name" className={`form-input ${errors.name ? 'input-error' : ''}`} />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="task-description">Description *</label>
          <textarea id="task-description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter task description" className={`form-textarea ${errors.description ? 'input-error' : ''}`} rows={3} />
          {errors.description && <span className="error-message">{errors.description}</span>}
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">{editingTask ? 'Update Task' : 'Add Task'}</button>
          {editingTask && (<button type="button" className="btn btn-secondary" onClick={onCancelEdit}>Cancel</button>)}
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
