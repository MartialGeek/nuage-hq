import React from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { toggleTodo } from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'active':
      return todos.filter(t => !t.completed);
    case 'completed':
      return todos.filter(t => t.completed);
  }
};

const mapStateToTodoListProps = (state, { match }) => ({
  todos: getVisibleTodos(
    state.todos,
    match.params.filter || 'all'
  )
});

const VisibleTodoList = withRouter(connect(
  mapStateToTodoListProps,
  { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList;
