import {
    SET_VISIBILITY_FILTER,
    setVisibilityFilter
} from '.';

describe('[REDUX][Actions] Todo', function() {
    describe('SET_VISIBILITY_FILTER', function() {
        it('Should export a constant SET_VISIBILITY_FILTER', function() {
            expect(SET_VISIBILITY_FILTER).toEqual('SET_VISIBILITY_FILTER')
        });
        it('Should export a function setVisibilityFilter', function() {
            expect(typeof setVisibilityFilter).toEqual('function')
        });
        it('Should return an object that have type and filter', function() {
            let action = setVisibilityFilter('@@@@');
            expect(action.type).not.toBeUndefined();
            expect(action.filter).not.toBeUndefined();
        });
        it('Should throw an error if no filter is provided', function() {
            expect(setVisibilityFilter.bind(this)).toThrowError();
        });
    });
});
