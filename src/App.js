import './App.css';
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/addTask'
import Footer from './components/Footer'

function App() {
  // Toggle add-task input box
  const [showAddTask, setShowAddTask] = useState(false);
  // Hook with useState
  const [tasks, setTasks] = useState ([
    // Sample tasks
    // {
    //   id: 1,
    //   text: 'Doctor Appointment',
    //   day: 'Feb 5th @ 1:30pm',
    //   reminder: true
    // },
    // {
    //   id: 2,
    //   text: 'Meeting at School',
    //   day: 'Feb 5th @ 2:30pm',
    //   reminder: false
    // }
  ])

  // Add Task 
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? { ...task , reminder : !task.reminder} : task)
    )
  }

  // Return JSX
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        ) : ('No Tasks')
      }

      <Footer />
    </div>  
  );
}

export default App;