import React, { useReducer, useEffect, useRef } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { TaskContext } from './context/TaskContext';
import './App.css';

// Reducer function to handle all task actions
const taskReducer = (state, action) => {
  switch (action.type) {
      case 'ADD_TASK':
            return [...state, { ...action.payload, id: Date.now(), completed: false }];
                case 'DELETE_TASK':
                      return state.filter(task => task.id !== action.payload);
                          case 'TOGGLE_TASK':
                                return state.map(task =>
                                        task.id === action.payload ? { ...task, completed: !task.completed } : task
                                              );
                                                  case 'EDIT_TASK':
                                                        return state.map(task =>
                                                                task.id === action.payload.id ? { ...task, ...action.payload.updates } : task
                                                                      );
                                                                          case 'LOAD_TASKS':
                                                                                return action.payload;
                                                                                    default:
                                                                                          return state;
                                                                                            }
                                                                                            };

                                                                                            /**
                                                                                             * Main App component - manages the To-Do List application
                                                                                              * Demonstrates: useReducer for complex state, Context API, localStorage persistence
                                                                                               */
                                                                                               function App() {
                                                                                                 // useReducer for complex state management of tasks
                                                                                                   const [tasks, dispatch] = useReducer(taskReducer, []);
                                                                                                     
                                                                                                       // useRef to track if tasks have been loaded from localStorage
                                                                                                         const isInitialLoad = useRef(true);
                                                                                                         
                                                                                                           // Load tasks from localStorage on initial render
                                                                                                             useEffect(() => {
                                                                                                                 const savedTasks = localStorage.getItem('todoTasks');
                                                                                                                     if (savedTasks) {
                                                                                                                           dispatch({ type: 'LOAD_TASKS', payload: JSON.parse(savedTasks) });
                                                                                                                               }
                                                                                                                                 }, []);
                                                                                                                                 
                                                                                                                                   // Save tasks to localStorage whenever they change (but not on initial load)
                                                                                                                                     useEffect(() => {
                                                                                                                                         if (isInitialLoad.current) {
                                                                                                                                               isInitialLoad.current = false;
                                                                                                                                                     return;
                                                                                                                                                         }
                                                                                                                                                             localStorage.setItem('todoTasks', JSON.stringify(tasks));
                                                                                                                                                               }, [tasks]);
                                                                                                                                                               
                                                                                                                                                                 return (
                                                                                                                                                                     // Provide task state and dispatch via Context
                                                                                                                                                                         <TaskContext.Provider value={{ tasks, dispatch }}>
                                                                                                                                                                               <div className="app">
                                                                                                                                                                                       <h1 className="app-title">To-Do List</h1>
                                                                                                                                                                                               <p className="app-subtitle">Manage your tasks efficiently</p>
                                                                                                                                                                                                       <TaskForm />
                                                                                                                                                                                                               <TaskList />
                                                                                                                                                                                                                     </div>
                                                                                                                                                                                                                         </TaskContext.Provider>
                                                                                                                                                                                                                           );
                                                                                                                                                                                                                           }
                                                                                                                                                                                                                           
                                                                                                                                                                                                                           export default App;
