import React from 'react';

const AddTodo = ({onSubmit}) => {
  let input;

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        onSubmit(input.value, e);
        input.value = '';
      }}>
        <input type="text" ref={(node) => input = node} />
        <button type="submit">Add task</button>
      </form>
    </div>
  )
};

export default AddTodo;
