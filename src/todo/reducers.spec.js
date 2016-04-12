import {
    todo
} from './reducers';
import {
    addTodo,
    toggleTodo
} from './actions';

describe('[REDUX] Reducer Todo', function() {
    it('Should be a function.', function() {
        expect(typeof todo).toEqual('function')
    });

    it('Should return an object literal when initialized', function() {
        expect(todo(undefined, {})).toEqual({});
    });

    it('Should return the previous state if an action does not matched.', function() {
        let state = todo(undefined, {});
        expect(state).toEqual({})
        state = todo(state, { type: 'UNKNOWNACTION' });
        expect(state).toEqual({});
        state = todo(state, addTodo('first todo'));
        expect(state.text).toEqual('first todo');
        state = todo(state, { type: 'UNKNOWNACTION' });
        expect(state.text).toEqual('first todo');
    })
});
