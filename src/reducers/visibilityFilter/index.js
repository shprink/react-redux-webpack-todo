import {SET_VISIBILITY_FILTER, FILTER_SHOW_ALL} from '../../actions/visibilityFilter'

export default (state = FILTER_SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter? action.filter : state
        default:
            return state
    }
}
