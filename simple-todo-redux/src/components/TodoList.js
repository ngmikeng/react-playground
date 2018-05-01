import React from 'react';
import Todo from './Todo';

const TodoList = ({listTodos, onToggleTodo}) => (
  <ul>
    {
      listTodos.map((todo, index) => (
        <Todo
          key={index}
          {...todo}
          onClick={(e) => onToggleTodo(index)}
        />
      ))
    }
  </ul>
);

export default TodoList;
