let nextTodoId = 0
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export const addTodo = (text = '') => {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    }
}

export const toggleTodo = (id) => {
    if (typeof id === 'undefined') {
        throw new Error('To toggle an item you MUST provide an ID')
    }
    return {
        type: TOGGLE_TODO,
        id
    }
}
