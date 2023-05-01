import React, { useState } from 'react';

const Tasks = ({ handleSubmit }) => {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('task title', title);
    handleSubmit(title);
    setTitle('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={title} onChange={handleChange} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default Tasks;
