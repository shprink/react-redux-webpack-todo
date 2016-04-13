import {todo} from '../todo/reducers';
import {ADD_TODO,TOGGLE_TODO} from '../todo/actions';
import {SET_VISIBILITY_FILTER} from './actions';
import {FILTER_SHOW_ALL, FILTER_SHOW_COMPLETED, FILTER_SHOW_ACTIVE} from '../filterList';

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ]
    case TOGGLE_TODO:
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export const visibilityFilter = (state = FILTER_SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
