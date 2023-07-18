import { Add, Alarm, AttachFile, List, MoreHoriz } from '@mui/icons-material'
import React from 'react'

const Todo = () => {
  return (
    <div className='flex text-gray-400'>
      
    

    <div className="select">
      
      <div className="img w-others h-44">
          <img src="./1.png" alt="" srcset="" />
      </div>

      <div className="title flex flex-col">
        <div className="task flex justify-between items-center">
          <div className="taskName text-sm text-gray-400 w-1/2">
              Space Tasks 2
          </div>
          <div className="Avatrs flex flex-shrink w-1/2 items-center">
          <div className='cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
           <Add/>
          </div>
          </div>
        </div>
        <p className='text-sm text-black'>Make Money Online Through</p>
      </div>

      <div className="icons flex items-center justify-around">
        <div className="w-10/12 justify-between flex">
        <div className="icon flex justify-between">
          <List/>
          List
        </div>
        <div className="icon flex justify-between">
          <AttachFile className='rotate-90'/>
          2
        </div>
        <div className="icon flex justify-between">
          <Alarm/>
          6 days left
        </div>
      </div>
      </div>

    </div>

    </div>
  )
}

export default Todo
