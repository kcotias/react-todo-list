export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const REMOVE_TODO = 'REMOVE_TODO'
export const CHANGE_TODO = 'CHANGE_TODO'
export const EDIT_TODO = 'EDIT_TODO'



export const VisibilityFilters = {
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_ALL: 'SHOW_ALL',
}

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function changeTodo(text, index) {
  return { type: CHANGE_TODO, text, index }
}

export function editTodo(index) {
  return { type: EDIT_TODO, index }
}

export function removeTodo(index){
  return {type: REMOVE_TODO, index}
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}