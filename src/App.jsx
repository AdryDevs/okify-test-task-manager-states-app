import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { Subtask } from "./components/Subtask";
import { SubtaskCreator } from "./components/SubtaskCreator";

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [subtasks, setSubtasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showSubtasks, setShowSubtasks] = useState(false);

  function createNewTask(taskName) {
    console.log(taskName);
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  }

  function createNewSubtask(task, subtaskName) {
    console.log(subtaskName);
    if (!task.subtasks.find((subtask) => subtask.name === subtaskName)) {
      setTasksItems(
        tasksItems.map((t) => {
          if (t.name === task.name) {
            return {
              ...t,
              subtasks: [...t.subtasks, { name: subtaskName, done: false }],
            };
          } else {
            return t;
          }
        })
      );
    }
  }

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) => (t.name == task.name ? { ...t, done: !t.done } : t))
    );
  };

  const toggleSubtask = (task, subtask) => {
    setTasksItems(
      tasksItems.map((t) => {
        if (t.name === task.name) {
          return {
            ...t,
            subtasks: t.subtasks.map((s) =>
              s.name === subtask.name ? { ...s, done: !subtask.done } : s
            ),
          };
        } else {
          return t;
        }
      })
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={tasksItems} toggleTask={toggleTask}  
      createNewSubtask={createNewSubtask} toggleSubtask={toggleSubtask} />

      <div>
        <input
          type="checkbox"
          onChange={(e) => setShowCompleted(!showCompleted)}
        />{" "}
        <label>Show Done Tasks</label>
      </div>

      {showCompleted === true && (
        <TaskTable
          tasks={tasksItems}
          toggleTask={toggleTask}
          showCompleted={showCompleted}
          subtasks={subtasks}
        />
      )}
    </div>
  );
}

export default App;
