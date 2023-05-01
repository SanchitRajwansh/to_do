import React from 'react';
import Task from './Task';
import Tasks from './Tasks';

const List = ({ id, title, tasks, Checkbox, ListDelete, TaskDelete, AddTask }) => {
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={ListDelete}>Delete List</button>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.taskTitle}
            TaskDelete={() => TaskDelete(task.id)}
            completed={task.completed}
            Check={Checkbox}
          />
        ))}
      </ul>
      <Tasks handleSubmit={(taskTitle) => AddTask(id, taskTitle)} />
    </div>
  );
};

export default List;
