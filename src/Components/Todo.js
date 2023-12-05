import React, { Fragment, useEffect, useState } from 'react'
import './Todo.css'
import AddTask from './AddTask'
import ListTask from './ListTask'

// Setting up state
const Todo = () => {
  const [tasks,setTasks] = useState([]);

// To show pending task
  useEffect(()=>{
    document.title = `You have ${tasks.length} pending task(s)`
  })
  
// Function to add new task  
  const addTask = (title) =>{
    const newTask =[...tasks,{title}]
    setTasks(newTask)
  }

// Function to delete a task  
  const removeTask = (index) =>{
    const newTask = [...tasks]
    newTask.splice(index,1)
    setTasks(newTask)
  }
  return (
    <Fragment>
    <div className='todo-container'>
      <div className='header'>TODO APP</div>
      <div className='add-task'>< AddTask addTask={addTask}/></div>
      <div className='list-task'>

{/* Map function for print task */}
        {tasks.map((task, index) => ( 
          <ListTask task={task} removeTask={removeTask} index={index} key={index}/>
        ))}
        </div>
    </div>
    </Fragment>
  )
}

export default Todo
