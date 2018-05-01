// actions type
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// action creators
export const addTodo = (content) => {
  return {
    type: ADD_TODO,
    content: content
  };
}

export const toggleTodo = (index) => {
  return {
    type: TOGGLE_TODO,
    index
  };
}

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
