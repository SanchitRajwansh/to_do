import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./List";
import Lists from "./Lists";

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4001/fetch_all');
        console.log(response)
        const jsonData = await response.json();
        console.log(jsonData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [lists, setLists] = useState([]);

  const AddList = (title) => {
    const newList = {
      id: uuidv4(),
      title,
      tasks: [],
    };
    setLists([...lists, newList]);
  };

  const AddTask = (listId, taskTitle) => {
    console.log("sanchit rajwansh is a good boy");
    console.log("logs", listId, taskTitle);
    const newTask = {
      id: uuidv4(),
      taskTitle,
      completed: false,
    };
    const newLists = lists.map((list) => {
      if (list.id === listId) {
        console.log("dkjfbasldkjfbasldkjbf");
        return {
          ...list,
          tasks: [...list.tasks, newTask],
        };
      }
      return list;
    });
    console.log(newLists, "sanchit rajwansh is a  very good boy");
    setLists(newLists);
  };

  const Checkbox = (listId, taskId) => {
    const newLists = lists.map((list) => {
      if (list.id === listId) {
        const newTasks = list.tasks.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              completed: !task.completed,
            };
          }
          return task;
        });
        return {
          ...list,
          tasks: newTasks,
        };
      }
      return list;
    });
    setLists(newLists);
  };

  const ListDelete = (listId) => {
    const newLists = lists.filter((list) => list.id !== listId);
    setLists(newLists);
  };

  const TaskDelete = (listId, taskId) => {
    const newLists = lists.map((list) => {
      if (list.id === listId) {
        const newTasks = list.tasks.filter((task) => task.id !== taskId);
        return {
          ...list,
          tasks: newTasks,
        };
      }
      return list;
    });
    setLists(newLists);
  };

  return (
    <div>
      <Lists handleSubmit={AddList} />
      {lists.map((list) => (
        <List
          key={list.id}
          id={list.id}
          title={list.title}
          tasks={list.tasks}
          Checkbox={(taskId) => Checkbox(list.id, taskId)}
          ListDelete={() => ListDelete(list.id)}
          TaskDelete={(taskId) => TaskDelete(list.id, taskId)}
          AddTask={(id, title) => AddTask(list.id, title)}
        />
      ))}
    </div>
  );
};

export default App;
