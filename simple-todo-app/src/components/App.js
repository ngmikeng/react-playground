import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

const App = () => (
  <div>
    <h2>Todo</h2>
    <AddTodo />
    <TodoList listTodos={[{content: 'task'}]} />
    <Footer />
  </div>
);

export default App;
