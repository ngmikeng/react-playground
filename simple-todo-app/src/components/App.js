import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.nextTodoId = 0;
    this.state = {
      listTodosStore: [],
      listTodos: [],
      filter: 'all'
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleToggleTodo = this.handleToggleTodo.bind(this);
    this.handleClickFilter = this.handleClickFilter.bind(this);
  }

  handleAddTodo(content, event) {
    let newTodo = { id: this.nextTodoId++, content: content, completed: false };
    if (this.state.filter === 'all' || this.state.filter === 'active') {
      this.setState({
        listTodosStore: [...this.state.listTodosStore, newTodo],
        listTodos: [...this.state.listTodos, newTodo]
      });
    } else {
      this.setState({
        listTodosStore: [...this.state.listTodosStore, newTodo]
      });
    }
  }

  handleToggleTodo(id) {
    this.state.listTodosStore.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });

    this.setState({
      listTodosStore: this.state.listTodosStore,
      listTodos: this.state.listTodosStore
    });
  }

  handleClickFilter(filter) {
    let listTodos = [];
    if (filter === 'active') {
      listTodos = this.state.listTodosStore.filter((todo) => !todo.completed);
    } else if (filter === 'completed') {
      listTodos = this.state.listTodosStore.filter((todo) => todo.completed);
    } else {
      listTodos = this.state.listTodosStore;
    }

    this.setState({
      listTodos: listTodos,
      filter: filter
    });
  }

  render() {
    return (
      <div>
        <h2>Todo</h2>
        <AddTodo onSubmit={this.handleAddTodo}/>
        <TodoList listTodos={this.state.listTodos} onToggleTodo={this.handleToggleTodo} />
        <Footer filter={this.state.filter} onClickFilter={this.handleClickFilter} />
      </div>
    )
  }
}

export default App;
