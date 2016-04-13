export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const setVisibilityFilter = (filter) => {
    if (!filter) {
        throw new Error('To toggle an item you MUST provide an filter');
    }
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}
