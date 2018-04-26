import React from 'react';

const AddTodo = ({}) => (
  <div>
    <form onSumit={(e) => {
      e.preventDefault();
    }}>
      <input type="text" />
      <button type="submit">Add task</button>
    </form>
  </div>
);

export default AddTodo;
