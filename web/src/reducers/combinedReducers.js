import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos';

const combinedReducers = combineReducers({
  todos
});

export default combinedReducers;

export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter);
