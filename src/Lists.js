import React, { useState } from 'react';

const Lists = ({ handleSubmit }) => {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(title);
    setTitle('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={title} onChange={handleChange} />
      <button type="submit">Add List</button>
    </form>
  );
};

export default Lists;
