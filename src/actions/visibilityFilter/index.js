export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const FILTER_SHOW_ALL = 'SHOW_ALL'
export const FILTER_SHOW_COMPLETED = 'SHOW_COMPLETED'
export const FILTER_SHOW_ACTIVE = 'SHOW_ACTIVE'

export const setVisibilityFilter = (filter) => {
    if (!filter) {
        throw new Error('To toggle an item you MUST provide an filter')
    }
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}
