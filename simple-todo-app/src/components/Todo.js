import React from 'react';

const Todo = ({content, onClick}) => (
  <li onClick={onClick}>
    {content}
  </li>
);

export default Todo;
