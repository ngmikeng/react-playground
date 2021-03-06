import React from 'react';
import Todo from './Todo';

const TodoList = ({listTodos, onToggleTodo}) => (
  <ul>
    {
      listTodos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={(e) => onToggleTodo(todo.id)}
        />
      ))
    }
  </ul>
);

export default TodoList;
