import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import listTodos from './listTodos';

const todoApp = combineReducers({
  visibilityFilter,
  listTodos
})

export default todoApp;
