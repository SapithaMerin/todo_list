import React, { Fragment, useState } from 'react'


const ListTask = ({task,index,removeTask}) => {
    

  return (
    <div className='list-task'>
    <div className='title'>{task.title}
    <button type='button' className='delete-btn' onClick={()=>{removeTask(index)}}
    >DELETE</button>
    </div>
    </div>
  )
  
}

export default ListTask
