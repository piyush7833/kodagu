import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Navbar = () => {
  return (
    <div className='bg-slate-50 h-20 items-center flex justify-center border-2 border-gray-200 text-sm'>
      <div className='w-sw flex items-center justify-between'>
        <div className='cursor-pointer text-gray-400 circle rounded-full h-12 w-12 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
          <MenuIcon />
        </div>
        <div className="text-gray-800 font-bold cursor-pointer">
          Constructor
        </div>
        <div className="text-gray-400 cursor-pointer">
          Dashboard
        </div>
        <div className="text-gray-400 cursor-pointer">
          About Us
        </div>
        <div className="text-gray-400 cursor-pointer">
          News
        </div>
        <div className="text-gray-400 cursor-pointer">
          User Policy
        </div>
        <div className="text-gray-400 cursor-pointer">
          Contacts
        </div>
        <div className='cursor-pointer text-gray-400 circle rounded-full h-12 w-12 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
          <MoreHorizIcon />
        </div>
        <div className="cursor-pointer search h-12 w-sl border-2 flex justify-between items-center rounded-3xl p-2 text-gray-400 bg-white">
          <SearchIcon />
          <input className='cursor-pointer w-4/5 rounded-3xl' type="text" name="" id="" placeholder='Search Products, Orders, Clients' />
          <KeyboardArrowRightIcon />
        </div>
        <div className="cursor-pointer flex text-gray-400 justify-between">
          <AccountCircleIcon />
          <p>Clayton Santos</p>
        </div>
        <div className='cursor-pointer text-gray-400 circle rounded-full h-12 w-12 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
          <NotificationsIcon />
        </div>
        <div className='cursor-pointer text-gray-400 circle rounded-full h-12 w-12 shadow-md shadow-gray-200 items-center flex justify-center justify-items-center text-justify' >
          <CancelIcon />
        </div>
      </div>
    </div>
  )
}

export default Navbar
