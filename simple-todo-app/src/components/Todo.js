import React from 'react';

const Todo = ({content, completed, onClick}) => (
  <li onClick={onClick} style={completed ? { textDecoration: 'line-through' } : {}}>
    {content}
  </li>
);

export default Todo;
