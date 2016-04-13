import React, {Component} from 'react';
import FilterList from '../filterList/index';
import AddTodo from '../addTodo/container';
import TodoListContainer from '../todoList/container';

export default class extends Component {
  render() {
    return (
        <div>
            <AddTodo />
            <TodoListContainer />
            <FilterList />
        </div>
        )
  }
}

