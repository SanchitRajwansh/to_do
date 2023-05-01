import React from 'react';

const Task = ({ id, title, completed, TaskDelete, Check }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => Check(id)}
      />
      {title}
      <button onClick={TaskDelete}>Delete Task</button>
    </li>
  );
};

export default Task;
