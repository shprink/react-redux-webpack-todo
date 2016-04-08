let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const toggleTodo = (id) => {
    debugger;
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
