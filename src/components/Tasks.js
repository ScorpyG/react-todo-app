import Task from "./Task";

// Passing in props from the tasks list in [Header.js]
const Tasks = (props) => {
  return (
    <>
      {/* Create a list passed tasks list */}
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={props.onDelete}
          onToggle={props.onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;