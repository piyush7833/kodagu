import { AccessTime, AssistantPhoto, CalendarMonth, Cancel, Close, Cloud, Dashboard, FiberManualRecord, Flag, History, InsertComment, PlayArrow, PlaylistAddCheck, Reorder, Sort, SubdirectoryArrowRight, TrendingUp } from '@mui/icons-material'
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

          <div className="select flex flex-col justify-around mt-2">
            <div className="flex flex-col h-72 bg-white justify-around">
              <div className="img w-others h-44">
                <img src="./1.png" alt="" srcset="" />
              </div>
              <div className="task flex items-center justify-around px-4">
                <div className="taskName text-sm text-gray-400 w-1/2">
                  Space Tasks 2
                </div>
                <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                  <div className='overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                    <img src="./7.png" alt="" srcset="" />
                  </div>
                </div>
              </div>
              <p className='text-sm text-black px-4'>Make Money Online Through</p>
              <div className="icons flex items-center justify-around ">
                <div className="justify-around flex">
                  <div className="icon flex justify-between mx-1">
                    <List className='text-gray-400' />
                    List
                  </div>
                  <div className="icon flex justify-between mx-1">
                    <AttachFile className='rotate-90 text-gray-400' />
                    2
                  </div>
                  <div className="icon flex justify-between mx-1">
                    <Alarm className='text-gray-400' />
                    6 days left
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="normal px-4 h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                <img src="./7.png" alt="" srcset="" />
                </div>
                <div className='overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                <img src="./8.png" alt="" srcset="" />
                </div>
                <div className='overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                <img src="./9.png" alt="" srcset="" />
                </div>
              </div>
            </div>
            <p className='text-sm text-black'>Make Money Online Through</p>
          </div>
          <div className="normal px-4 h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                <img src="./7.png" alt="" srcset="" />
                </div>
              </div>
            </div>
            <p className='text-sm text-black'>Search Engine Optimization ...</p>
          </div>
          <div className="normal px-4 h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                <img src="./7.png" alt="" srcset="" />
                </div>
              </div>
            </div>
            <p className='text-sm text-black'>Characteristics Of A Successful</p>
          </div>
          <div className="normal px-4 h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                <img src="./7.png" alt="" srcset="" />
                </div>
              </div>
            </div>
            <p className='text-sm text-black'>Getting Free Publicity</p>
          </div>
          <div className="normal px-4 h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                <img src="./7.png" alt="" srcset="" />
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
          <div className="normal px-4 h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                  <img src="./7.png" alt="" srcset="" />
                </div>
              </div>
            </div>
            <p className='text-sm text-black'>Importance Of The Custom ...</p>
          </div>

          <div className="select mt-2 flex flex-col">
            <div className="flex flex-col h-72 bg-white justify-around">
              <div className="img w-others h-44">
                <img src="./2.png" alt="" srcset="" />
              </div>
              <div className="task flex items-center justify-around px-4">
                <div className="taskName text-sm text-gray-400 w-1/2">
                  Space Tasks 2
                </div>
                <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                  <div className='overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                  <img src="./7.png" alt="" srcset="" />
                  </div>
                </div>
              </div>
              <p className='text-sm text-black px-4'>Make Money Online Through</p>
              <div className="icons flex items-center justify-around ">
                <div className="justify-around flex">
                  <div className="icon flex justify-between mx-1">
                    <List className='text-gray-400' />
                    List
                  </div>
                  <div className="icon flex justify-between mx-1">
                    <AttachFile className='rotate-90 text-gray-400' />
                    2
                  </div>
                  <div className="icon flex justify-between mx-1">
                    <Alarm className='text-gray-400' />
                    6 days left
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="normal px-4 h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around ">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                <img src="./7.png" alt="" srcset="" />
                </div>
              </div>
            </div>
            <p className='text-sm text-black'>Importance Of The Custom ...</p>
          </div>

          <div className="normal px-4 h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                <img src="./7.png" alt="" srcset="" />
                </div>
              </div>
            </div>
            <p className='text-sm text-black'>Make Money Online Through</p>
            <div className="icons flex items-center justify-around ">
              <div className="justify-around flex">
                <div className="icon flex justify-between mx-1">
                  <List className='text-gray-400' />
                  List
                </div>
                <div className="icon flex justify-between mx-1">
                  <AttachFile className='rotate-90 text-gray-400' />
                  2
                </div>
                <div className="icon flex justify-around font-bold text-red-600 mx-1">
                  <Alarm />
                  1 days left
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

          <div className="normal w-others px-4 h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                <img src="./7.png" alt="" srcset="" />
                </div>
              </div>
            </div>
            <p className='text-sm text-black'>Importance Of The Custom ...</p>
          </div>
          <div className="normal w-others px-4 h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                <img src="./7.png" alt="" srcset="" />
                </div>
                <div className='overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                <img src="./8.png" alt="" srcset="" />
                </div>
              </div>
            </div>
            <p className='text-sm text-black'>Importance Of The Custom ...</p>
          </div>

          <div className="normal w-others px-4 h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">

                <div className="search h-12  border-0 flex justify-between items-center text-gray-400">
                  <Close />
                  <input className='cursor-pointer w-36 border-0' type="text" name="" id="" placeholder='Task name or type' />
                </div>
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                <img src="./7.png" alt="" srcset="" />
                </div>
              </div>
            </div>
            <div className="icons flex items-center justify-around gap-1p">
              <div className="justify-around flex">
                <div className="icon flex justify-between mx-2">
                  <Flag className='text-gray-400' />
                </div>
                <div className="icon flex justify-between mx-2">
                  <AttachFile className='rotate-90 text-gray-400' />
                </div>
                <div className="icon flex justify-around font-bold text-gray-400 mx-2">
                  <AccessTime />
                </div>
                <div className="btn bg-blue-600 h-8 px-2 py-1 flex justify-center items-center text-white mx-2">
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
          <div className="normal px-4 h-20 bg-white flex flex-col justify-around mt-4">
            <div className="task flex items-center justify-around">
              <div className="taskName text-sm text-gray-400 w-1/2">
                Space Tasks 2
              </div>
              <div className="Avatrs flex flex-shrink w-1/2 items-center justify-end">
                <div className='overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-4 w-4 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                <img src="./7.png" alt="" srcset="" />
                </div>
              </div>
            </div>
            <p className='text-sm text-black'>Importance Of The Custom ...</p>
          </div>
        </div>
      </div>

      <div className="popUp h-last w-last bg-white p-8 right-0 bottom-0 fixed">
        <div className="first flex">
          <div className="title w-2/3 flex items-center justify-around">
            <div className="dot text-blue-400">
              <FiberManualRecord className='text-xs' />
            </div>
            <div className="font-bold text-black">
              Development Apps
            </div>
            <div className="icon">
              <AttachFile className='rotate-90 text-gray-400' />
            </div>
          </div>
          <div className="cross w-1/3 flex justify-end">
            <Close />
          </div>
        </div>
        <div className="flex justify-around mt-8">
          <div className="second flex w-32 h-32 text-base">
            <div className="first flex flex-col gap-4">
              <div className="sub flex items-center justify-around w-32 text-black">
                <SubdirectoryArrowRight className='text-gray-400' />
                4 SubTasks
              </div>
              <div className="sub flex items-center justify-around w-32 text-black">
                <Cloud className='text-gray-400 ' />
                3 Files
              </div>
              <div className="sub flex items-center justify-around w-36 text-black">
                <div className="Avatrs flex flex-shrink items-center justify-end">
                  <div className='bg-purple-400 overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-8 w-8 shadow-md shadow-gray-200 items-center flex justify-center' >
                    <img src="./13.png" alt="" srcset="" />
                  </div>
                </div>
                <div className="name">
                  Tyler Norman
                </div>
              </div>
            </div>
          </div>
          <div className="second flex w-32 h-32 text-base">
            <div className="first flex flex-col gap-4">
              <div className="sub flex items-center justify-around w-32 text-black">
                <AssistantPhoto className='text-gray-400' />
                4 SubTasks
              </div>
              <div className="sub flex items-center justify-around w-32 text-black">
                <InsertComment className='text-gray-400 ' />
                7 Comments
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-around h-28">
          <div className="first flex flex-col h-12 justify-evenly">
            <div className="title text-gray-400 font-bold text-sm">
              START DATE
            </div>
            <div className="date text-sm text-black">
              Sep3, 9:00 p.m.
            </div>
          </div>
          <div className="second flex flex-col h-12 justify-evenly">
            <div className="title text-gray-400 font-bold text-sm">
              Due DATE
            </div>
            <div className="date text-sm text-black">
              Sep4, 9:00 p.m.
            </div>
          </div>
          <div className="btn h-24 flex items-center justify-around w-24">
                <div className='bg-green-500 cursor-pointer text-white circle rounded-full h-10 w-10 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
                  <PlayArrow />
                </div>
            <p>0:00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Head
