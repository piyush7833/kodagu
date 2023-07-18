import { AccessTime, CalendarMonth, Cancel, Close, Dashboard, Flag, History, PlaylistAddCheck, Reorder, Sort, TrendingUp } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { Add, Alarm, AttachFile, List, MoreHoriz } from '@mui/icons-material'

const Head = () => {
  return (
    <div className='h-head w-head bg-slate-50 border-2 border-gray-200 rounded-3xl '>

      <div className="headNavBar  h-16 text-gray-400 flex items-center justify-around w-11/12 ml-10 text-sm">
        <div className="content flex w-fit justify-between items-center">
          <PlaylistAddCheck />
          <p>List Tasks</p>
        </div>
        <div className="content flex w-fit justify-between items-center">
          <Dashboard />
          <p>Boards</p>
        </div>
        <div className="content flex w-fit justify-between items-center">
          <CalendarMonth />
          <p>Calendar</p>
        </div>
        <div className="content flex w-fit justify-between items-center">
          <Sort />
          <p>Gantt</p>
        </div>
        <div className="content flex w-fit justify-between items-center">
          <Reorder />
          <p>Timeline</p>
        </div>
        <div className="content flex w-fit justify-between items-center">
          <TrendingUp />
          <p>Activity</p>
        </div>
        <div className="bg-white cursor-pointer search h-12 w-60 border-2 flex justify-between items-center rounded-3xl p-2 text-gray-400">
          <SearchIcon />
          <input className='cursor-pointer w-4/5 rounded-3xl' type="text" name="" id="" placeholder='Search Tasks' />
        </div>
      </div>

      <div className="main flex justify-around">

        <div className="todo flex flex-col justify-around">
          <div className='w-others h-16 bg-white rounded-3xl flex items-center justify-between'>
            <div className="line text-purple-700 text-4xl">
              l
            </div>
            <div className="text-black font-bold">
              To-Do
            </div>
            <div className='cursor-pointer text-gray-400 circle rounded-full h-8 w-8 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
              5
            </div>
            <div className='cursor-pointer text-gray-400 circle rounded-full h-8 w-8 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
              <MoreHoriz />
            </div>
            <div className='cursor-pointer text-gray-400 circle rounded-full h-8 w-8 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify mr-2' >
              <Add />
            </div>
          </div>

          <div className="select flex flex-col justify-around">
            <div className="flex flex-col h-72 bg-white justify-around">
              <div className="img w-others h-44">
                <img src="./1.png" alt="" srcset="" />
              </div>
              <div className="task flex items-center justify-around">
                <div className="taskName text-sm text-gray-400 w-1/2">
                  Space Tasks 2
                </div>
                <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                  <div className='cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                    <Add />
                  </div>
                </div>
              </div>
              <p className='text-sm text-black'>Make Money Online Through</p>
              <div className="icons flex items-center justify-around ">
                <div className="justify-around flex">
                  <div className="icon flex justify-between">
                    <List className='text-gray-400' />
                    List
                  </div>
                  <div className="icon flex justify-between">
                    <AttachFile className='rotate-90 text-gray-400' />
                    2
                  </div>
                  <div className="icon flex justify-between">
                    <Alarm className='text-gray-400' />
                    6 days left
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="normal h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                  <Add />
                </div>
              </div>
            </div>
            <p className='text-sm text-black'>Make Money Online Through</p>
          </div>
          <div className="normal h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                  <Add />
                </div>
              </div>
            </div>
            <p className='text-sm text-black'>Search Engine Optimization ...</p>
          </div>
          <div className="normal h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                  <Add />
                </div>
              </div>
            </div>
            <p className='text-sm text-black'>Characteristics Of A Successful</p>
          </div>
          <div className="normal h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                  <Add />
                </div>
              </div>
            </div>
            <p className='text-sm text-black'>Getting Free Publicity</p>
          </div>
          <div className="normal h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                  <Add />
                </div>
              </div>
            </div>
            <p className='text-sm text-black'>Importance Of The Custom ...</p>
          </div>
          <div className="add text-gray-400 text-sm mt-4">
            <Add />NEW TASK
          </div>
        </div>

        <div className="inWork flex-col justify-around">
          <div className='w-others h-16 bg-white rounded-3xl flex items-center justify-between'>
            <div className="line text-sky-600 text-4xl">
              l
            </div>
            <div className="text-black font-bold">
              In-Work
            </div>
            <div className='cursor-pointer text-gray-400 circle rounded-full h-8 w-8 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
              5
            </div>
            <div className='cursor-pointer text-gray-400 circle rounded-full h-8 w-8 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
              <MoreHoriz />
            </div>
            <div className='cursor-pointer text-gray-400 circle rounded-full h-8 w-8 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify mr-2' >
              <Add />
            </div>
          </div>
          <div className="normal h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                  <Add />
                </div>
              </div>
            </div>
            <p className='text-sm text-black'>Importance Of The Custom ...</p>
          </div>

          <div className="select flex flex-col justify-around">
            <div className="flex flex-col h-72 bg-white justify-around">
              <div className="img w-others h-44">
                <img src="./2.png" alt="" srcset="" />
              </div>
              <div className="task flex items-center justify-around">
                <div className="taskName text-sm text-gray-400 w-1/2">
                  Space Tasks 2
                </div>
                <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                  <div className='cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                    <Add />
                  </div>
                </div>
              </div>
              <p className='text-sm text-black'>Make Money Online Through</p>
              <div className="icons flex items-center justify-around ">
                <div className="justify-around flex">
                  <div className="icon flex justify-between">
                    <List className='text-gray-400' />
                    List
                  </div>
                  <div className="icon flex justify-between">
                    <AttachFile className='rotate-90 text-gray-400' />
                    2
                  </div>
                  <div className="icon flex justify-between">
                    <Alarm className='text-gray-400' />
                    6 days left
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="normal h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                  <Add />
                </div>
              </div>
            </div>
            <p className='text-sm text-black'>Importance Of The Custom ...</p>
          </div>

          <div className="normal h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                  <Add />
                </div>
              </div>
            </div>
            <p className='text-sm text-black'>Make Money Online Through</p>
            <div className="icons flex items-center justify-around ">
              <div className="justify-around flex">
                <div className="icon flex justify-between">
                  <List className='text-gray-400' />
                  List
                </div>
                <div className="icon flex justify-between">
                  <AttachFile className='rotate-90 text-gray-400' />
                  2
                </div>
                <div className="icon flex justify-around font-bold text-red-600">
                  <Alarm />
                  6 days left
                </div>
              </div>
            </div>
          </div>
          <div className="add text-gray-400 text-sm mt-4">
            <Add />NEW TASK
          </div>

        </div>

        <div className="review flex-col justify-around">
          <div className='w-others h-16 bg-white rounded-3xl flex items-center justify-between'>
            <div className="line text-orange-500 text-4xl">
              l
            </div>
            <div className="text-black font-bold">
              Review
            </div>
            <div className='cursor-pointer text-gray-400 circle rounded-full h-8 w-8 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
              5
            </div>
            <div className='cursor-pointer text-gray-400 circle rounded-full h-8 w-8 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
              <MoreHoriz />
            </div>
            <div className='cursor-pointer text-gray-400 circle rounded-full h-8 w-8 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify mr-2' >
              <Add />
            </div>
          </div>

          <div className="normal h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                  <Add />
                </div>
              </div>
            </div>
            <p className='text-sm text-black'>Importance Of The Custom ...</p>
          </div>
          <div className="normal h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                  <Add />
                </div>
              </div>
            </div>
            <p className='text-sm text-black'>Importance Of The Custom ...</p>
          </div>

          <div className="normal h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">

                <div className="search h-12 w-60 border-0 flex justify-between items-center text-gray-400">
                  <Close />
                  <input className='cursor-pointer w-4/5 border-0' type="text" name="" id="" placeholder='Task name or type' />
                </div>
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                  <Add />
                </div>
              </div>
            </div>
            <div className="icons flex items-center justify-around gap-1p">
              <div className="justify-around flex">
                <div className="icon flex justify-between">
                  <Flag className='text-gray-400' />
                </div>
                <div className="icon flex justify-between">
                  <AttachFile className='rotate-90 text-gray-400' />
                </div>
                <div className="icon flex justify-around font-bold text-gray-400">
                  <AccessTime />
                </div>
                <div className="btn bg-blue-600 h-8 px-2 py-1 flex justify-center items-center text-white">
                    Save
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="review flex-col justify-around">
        <div className='w-others h-16 bg-white rounded-3xl flex items-center justify-between'>
            <div className="line text-green-600 text-4xl">
              l
            </div>
            <div className="text-black font-bold">
              Done
            </div>
            <div className='cursor-pointer text-gray-400 circle rounded-full h-8 w-8 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
              5
            </div>
            <div className='cursor-pointer text-gray-400 circle rounded-full h-8 w-8 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
              <MoreHoriz />
            </div>
            <div className='cursor-pointer text-gray-400 circle rounded-full h-8 w-8 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify mr-2' >
              <Add />
            </div>
          </div>
          <div className="normal h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                  <Add />
                </div>
              </div>
            </div>
            <p className='text-sm text-black'>Importance Of The Custom ...</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Head