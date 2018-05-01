import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions';

const getVisibleListTodos = (listTodos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return listTodos;
    case VisibilityFilters.SHOW_COMPLETED:
      return listTodos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return listTodos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => ({
  listTodos: getVisibleListTodos(state.listTodos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  onToggleTodo: (index) => dispatch(toggleTodo(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
