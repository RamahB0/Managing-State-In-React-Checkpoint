import { createContext } from 'react';

/**
   * TaskContext - Context for sharing task state and dispatch across components
 * Demonstrates: Context API for avoiding prop drilling
 */
export const TaskContext = createContext(null);
