import {todos, visibilityFilter} from './reducers';
import {ADD_TODO,TOGGLE_TODO} from '../../actions/todos/todo'
import {
    SET_VISIBILITY_FILTER,
    FILTER_SHOW_ALL,
    FILTER_SHOW_COMPLETED,
    FILTER_SHOW_ACTIVE
} from '../../actions/visibilityFilter/visibilityFilter'

describe('[REDUX][Reducer] Todos', function() {
    let initialState = [{
        id: 0,
        text: 'first',
        completed: false
    }, {
            id: 1,
            text: 'second',
            completed: false
        }, {
            id: 2,
            text: 'third',
            completed: false
        }];
    it('Should be a function.', function() {
        expect(typeof todos).toEqual('function')
    })
    it('Should return an empty array when initialized', function() {
        expect(todos(undefined, {})).toEqual([]);
    })
    it('Should return the previous state if an action does not matched.', function() {
        let state = todos(undefined, {});
        expect(state).toEqual([])
        state = todos(state, { type: 'UNKNOWNACTION' });
        expect(state).toEqual([]);
        state = todos(state, { type: ADD_TODO, text: 'unique text' });
        expect(state[state.length - 1].text).toEqual('unique text');
        state = todos(state, { type: 'UNKNOWNACTION' });
        expect(state[state.length - 1].text).toEqual('unique text');
    })
    it('Should toggle the right todo.', function() {
        let state = todos(initialState, { type: TOGGLE_TODO, id: 1 });
        expect(state[0].completed).toBe(false);
        expect(state[1].completed).toBe(true);
        expect(state[2].completed).toBe(false);
    })
    it('Should trigger an error if no ID is given', function() {
        expect(() => todos(initialState, { type: TOGGLE_TODO })).toThrow();
    })
});

describe('[REDUX][Reducer] VisibilityFilter', function() {
    it('Should be a function.', function() {
        expect(typeof visibilityFilter).toEqual('function')
    });
    it('Should return FILTER_SHOW_ALL by default', function() {
        expect(visibilityFilter(undefined, {type: SET_VISIBILITY_FILTER})).toEqual(FILTER_SHOW_ALL);
    });
    it('Should return the same filter if the action is unknown', function() {
        expect(visibilityFilter(FILTER_SHOW_COMPLETED, {type: '@@@@'})).toEqual(FILTER_SHOW_COMPLETED);
    });
    it('Should change to the right filter when action type is known', function() {
        let defaultState = visibilityFilter(undefined, { type: SET_VISIBILITY_FILTER });
        expect(defaultState).toEqual(FILTER_SHOW_ALL);
        expect(visibilityFilter(FILTER_SHOW_COMPLETED, {type: SET_VISIBILITY_FILTER})).toEqual(FILTER_SHOW_COMPLETED);
    });
});

