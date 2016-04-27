import {ADD_TODO, TOGGLE_TODO} from '../../actions/todo'

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case TOGGLE_TODO:
            if (typeof action.id === 'undefined') {
                throw new Error('To toggle an item you MUST provide an ID')
            }
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                completed: !state.completed
            })

        default:
            return state
    }
}
