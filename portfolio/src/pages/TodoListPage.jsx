import React, { useState } from 'react';
import './TodoListPage.css';

export default function TodoListPage() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn JavaScript', completed: false },
    { id: 2, text: 'Build ToDo App', completed: true },
    { id: 3, text: 'Practice Tailwind CSS', completed: false },
    { id: 4, text: 'Read a Book', completed: true },
    { id: 5, text: 'Go to Gym', completed: false }
  ]);
  
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('All'); // 'All' | 'Pending' | 'Completed'
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode to match portfolio style

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = (e) => {
    if (e) e.preventDefault();
    if (newTask.trim() !== '') {
      const taskObject = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false
      };
      setTasks([...tasks, taskObject]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filter logic
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Pending') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  // Count metrics
  const totalCount = tasks.length;
  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = totalCount - completedCount;

  const getProgressText = () => {
    if (filter === 'Pending') {
      return `${pendingCount} pending task${pendingCount !== 1 ? 's' : ''}`;
    }
    if (filter === 'Completed') {
      return `${completedCount} completed task${completedCount !== 1 ? 's' : ''}`;
    }
    return `${completedCount} / ${totalCount} tasks completed`;
  };

  return (
    <div className={`todolist-scope ${darkMode ? '' : 'light-theme'}`}>
      <div className="app-wrapper">
        <header className="app-header">
          <h1 className="app-title">ToDo Application</h1>
          <p className="app-subtitle">Simple. Clean. Productive.</p>
        </header>

        <main className="app-layout">
          {/* Interactive ToDo Card */}
          <section className="todo-card">
            <div className="card-header">
              <h2 className="card-title">My ToDo</h2>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="theme-toggle-btn"
                aria-label="Toggle Theme"
              >
                {darkMode ? (
                  // Sun Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                ) : (
                  // Moon Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                )}
              </button>
            </div>

            <form onSubmit={addTask} className="input-group">
              <input
                type="text"
                placeholder="Add a new task..."
                value={newTask}
                onChange={handleInputChange}
                className="todo-input"
              />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>

            <div className="filter-tabs">
              <button
                type="button"
                onClick={() => setFilter('All')}
                className={`filter-tab ${filter === 'All' ? 'active' : ''}`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setFilter('Pending')}
                className={`filter-tab ${filter === 'Pending' ? 'active' : ''}`}
              >
                Pending
              </button>
              <button
                type="button"
                onClick={() => setFilter('Completed')}
                className={`filter-tab ${filter === 'Completed' ? 'active' : ''}`}
              >
                Completed
              </button>
            </div>

            <div className="todo-list-container">
              {filteredTasks.length === 0 ? (
                <div className="empty-state">No tasks to display</div>
              ) : (
                <ul className="todo-list">
                  {filteredTasks.map((task) => (
                    <li key={task.id} className="todo-item">
                      <div
                        className="todo-item-left"
                        onClick={() => toggleComplete(task.id)}
                      >
                        <div
                          className={`checkbox-circle ${
                            task.completed ? 'completed' : ''
                          }`}
                        >
                          {task.completed && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </div>
                        <span
                          className={`todo-text ${
                            task.completed ? 'completed' : ''
                          }`}
                        >
                          {task.text}
                        </span>
                      </div>
                      <button
                        type="button"
                        className="delete-btn"
                        onClick={() => deleteTask(task.id)}
                        aria-label="Delete Task"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6" />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="card-footer">
              <span className="progress-text">{getProgressText()}</span>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
