import React, {Component} from 'react';
import FilterList from '../filterList/index';
import AddTodo from '../addTodo/container';
import VisibleTodoList from '../todoList/container';

export default class extends Component {
  render() {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <FilterList />
        </div>
        )
  }
}

