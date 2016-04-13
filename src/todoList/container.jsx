import { connect } from 'react-redux'
import { toggleTodo } from '../todo/actions'
import TodoList from './index'
import {FILTER_SHOW_ALL, FILTER_SHOW_COMPLETED, FILTER_SHOW_ACTIVE} from '../filterList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FILTER_SHOW_ALL:
      return todos
    case FILTER_SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case FILTER_SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer
