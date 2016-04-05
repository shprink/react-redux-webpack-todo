import { combineReducers } from 'redux';
import {todo} from './todo/reducers';
import {todos, visibilityFilter} from './todoList/reducers';

const AppReducers = combineReducers({
    todo,
    todos,
    visibilityFilter
});

export default AppReducers;
