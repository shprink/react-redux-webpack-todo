import React, {Component} from 'react';
import FilterList from '../FilterList';
import AddTodoContainer from '../AddTodoContainer';
import TodoListContainer from '../TodoListContainer';
import styleable from 'react-styleable';
import css from './style'

@styleable(css)
class App extends Component {
    render() {
        return (
            <div className={this.props.css.root}>
                <AddTodoContainer />
                <TodoListContainer />
                <FilterList />
            </div>
        )
    }
}
export default App;
