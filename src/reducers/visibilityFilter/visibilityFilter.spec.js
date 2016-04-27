import visibilityFilter from '.';
import {
    SET_VISIBILITY_FILTER,
    FILTER_SHOW_ALL,
    FILTER_SHOW_COMPLETED,
    FILTER_SHOW_ACTIVE
} from '../../actions/visibilityFilter'

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

