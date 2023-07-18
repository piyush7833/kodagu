"use client"
import React from 'react'
import Person2Icon from '@mui/icons-material/Person2';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Build, ChromeReaderMode, Cloud, Dashboard, Email, Event, Group, LocalPhone, Message, PlaylistAddCheck, Telegram, WhatsApp } from '@mui/icons-material';
const Sidebar = () => {
  return (
    <div className="bg-slate-50 text-gray-400 w-60 h-fit justify-between ">
      <div className="head w-60">
        <div className="icon flex justify-between">
          <div className='cursor-pointer text-gray-400 circle rounded-full h-12 w-12 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
            <Person2Icon />
          </div>
          <div className='cursor-pointer text-gray-400 circle rounded-full h-12 w-12 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
            <MoreHorizIcon />
          </div>
        </div>
        <div className="profile flex justify-center">
          <div className="circle bg-transparent  h-hcprofile w-wcprofile border-2 border-blue-700 border-separate border-t-blue-200 rotate-45 flex justify-center rounded-full items-center">
            <div className='bg-yellow-200 cursor-pointer circle rounded-full h-hprofile w-wprofile shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify -rotate-45 overflow-hidden' >
              <img  src="./3.png" alt="" srcset="" />
            </div>
          </div>
        </div>
        <div className="text-gray-400 text-center font-bold mt-2">Hello Alfred Bryant</div>
        <div className="text-gray-400 text-center mt-2">adrain.nader@yahoo.com</div>
      </div>

      <div className="menu flex mt-2 justify-between text-sm">
        <div className="box h-menu w-menu rounded-tl-3xl border-2 border-gray-200 flex flex-col items-center justify-center hover:scale-110 hover:bg-white  hover:text-blue-600 focus:scale-110 focus:bg-white cursor-pointer">
          <Dashboard />
          <p className='mt-2' >Dashboard</p>
        </div>
        <div className="box h-menu w-menu  border-2 border-gray-200 flex flex-col items-center justify-center hover:scale-110 hover:bg-white hover:text-blue-600  focus:scale-110 focus:bg-white cursor-pointer">
          <PlaylistAddCheck />
          <p className='mt-2' >Tasks</p>
        </div>
      </div>
      <div className="menu flex flex-shrink justify-center">
        <div className="box h-menu w-menu border-2 border-gray-200 flex flex-col items-center justify-center hover:scale-110 hover:bg-white hover:text-blue-600  focus:scale-110 focus:bg-white cursor-pointer">
          <PlaylistAddCheck/>
          <p className='mt-2' >Notes</p>
        </div>
        <div className="box h-menu w-menu border-2 border-gray-200 flex flex-col items-center justify-center hover:scale-110 hover:bg-white hover:text-blue-600  focus:scale-110 focus:bg-white cursor-pointer">
          <Cloud />
          <p className='mt-2' >Files</p>
        </div>
      </div>
      <div className="menu flex flex-shrink justify-center">
        <div className="box h-menu w-menu border-2 border-gray-200 flex flex-col items-center justify-center hover:scale-110 hover:bg-white hover:text-blue-600  focus:scale-110 focus:bg-white cursor-pointer">
          <Email />
          <p className='mt-2' >Email</p>
        </div>
        <div className="box h-menu w-menu border-2 border-gray-200 flex flex-col items-center justify-center hover:scale-110 hover:bg-white hover:text-blue-600  focus:scale-110 focus:bg-white cursor-pointer">
          <Group />
          <p className='mt-2' >Contacts</p>
        </div>
      </div>
      <div className="menu flex flex-shrink justify-center">
        <div className="box h-menu w-menu border-2 border-gray-200 rounded-bl-3xl flex flex-col items-center justify-center hover:scale-110 hover:text-blue-600  hover:bg-white focus:scale-110 focus:bg-white cursor-pointer">
          <Event />
          <p className='mt-2' >Calendars</p>
        </div>
        <div className="box h-menu w-menu border-2 border-gray-200 rounded-br-3xl flex flex-col items-center justify-center hover:scale-110 hover:text-blue-600  hover:bg-white focus:scale-110 focus:bg-white cursor-pointer">
          <Build />
          <p className='mt-2' >Settings</p>
        </div>
      </div>

      <div className="social h-social w-social rounded-3xl border-2 border-gray-200 mt-4 items-center justify-center flex">
        <div className="w-5/6 items-center justify-between flex">
        <LocalPhone className='text-red-700'/>
        <Message className='text-green-500'/>
        <ChromeReaderMode className='text-violet-600'/>
        <Telegram className='text-blue-500'/>
        <WhatsApp className='text-green-500'/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
