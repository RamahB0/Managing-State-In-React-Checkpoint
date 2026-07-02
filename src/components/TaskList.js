import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

function TaskList() {
  const { tasks } = useContext(TaskContext);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('all');

  const handleEdit = (task) => { setEditingTask(task); };
  const handleCancelEdit = () => { setEditingTask(null); };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const activeCount = tasks.filter(t => !t.completed).length;
  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="task-list-container">
      {editingTask && (<TaskForm editingTask={editingTask} onCancelEdit={handleCancelEdit} />)}
      <div className="task-list-header">
        <h2 className="task-list-title">My Tasks</h2>
        <div className="task-stats">
          <span className="stat active-stat">{activeCount} active</span>
          <span className="stat completed-stat">{completedCount} done</span>
        </div>
      </div>
      <div className="filter-buttons">
        <button className={'filter-btn ' + (filter === 'all' ? 'active' : '')} onClick={() => setFilter('all')}>All ({tasks.length})</button>
        <button className={'filter-btn ' + (filter === 'active' ? 'active' : '')} onClick={() => setFilter('active')}>Active ({activeCount})</button>
        <button className={'filter-btn ' + (filter === 'completed' ? 'active' : '')} onClick={() => setFilter('completed')}>Completed ({completedCount})</button>
      </div>
      {filteredTasks.length === 0 ? (
        <div className="empty-state"><p>No tasks found.</p></div>
      ) : (
        <div className="task-list">
          {filteredTasks.map(task => (<TaskItem key={task.id} task={task} onEdit={handleEdit} />))}
        </div>
      )}
    </div>
  );
}

export default TaskList;
