import todo from '../todo'
import {ADD_TODO, TOGGLE_TODO} from '../../actions/todo'

export default (state = [], action) => {
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

