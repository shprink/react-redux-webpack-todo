import {
    ADD_TODO,
    TOGGLE_TODO,
    addTodo,
    toggleTodo
} from './actions';

describe('[REDUX][Actions] Todo', function() {
    describe('ADD_TODO', function() {
        it('Should export a constant ADD_TODO', function() {
            expect(ADD_TODO).toEqual('ADD_TODO')
        });
        it('Should export a function addTodo', function() {
            expect(typeof addTodo).toEqual('function')
        });
        it('Should return an object that have type, id and text', function() {
            let action = addTodo();
            expect(action.type).not.toBeUndefined();
            expect(action.id).not.toBeUndefined();
            expect(action.text).not.toBeUndefined();
        });
    });

    describe('TOGGLE_TODO', function() {
        it('Should export a constant TOGGLE_TODO', function() {
            expect(TOGGLE_TODO).toEqual('TOGGLE_TODO')
        })
        it('Should export a function toggleTodo', function() {
            expect(typeof toggleTodo).toEqual('function')
        })
        it('Should return an object that have type and id', function() {
            let action = toggleTodo(6);
            expect(action.type).not.toBeUndefined();
            expect(action.id).not.toBeUndefined();
        });
        it('Should throw an error if no ID is provided', function() {
            expect(toggleTodo.bind(this)).toThrowError();
        });
    });
});
