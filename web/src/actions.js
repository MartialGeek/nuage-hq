import { v4 } from 'node-uuid';

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

let todoId = 0;
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4(),
  text
});
