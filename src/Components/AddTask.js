import React, { Fragment, useState } from 'react'
import './Todo.css'
import ListTask from './ListTask'


const AddTask = ({addTask}) => {
  const [value,setValue] = useState("")

  const addItem = () =>{
    addTask(value)
    setValue("")
  }
  return (
    
    <div>
      <div>
      <input type='text' placeholder='Add a new Task.....' className='input'
      value={value}
      onChange={(e)=>{setValue(e.target.value)}}
      />
      <button type='button' className='add-btn' onClick={addItem}>ADD</button> 
      </div> 
    </div>
    
  )
}

export default AddTask
