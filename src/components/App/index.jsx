import React, {Component} from 'react';
import FilterList from '../FilterList';
import AddTodoContainer from '../AddTodoContainer';
import TodoListContainer from '../TodoListContainer';

export default class extends Component {
    render() {
        return (
            <div>
                <AddTodoContainer />
                <TodoListContainer />
                <FilterList />
            </div>
        )
    }
}

