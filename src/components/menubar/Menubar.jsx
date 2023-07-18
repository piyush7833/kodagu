import React from 'react'
import ExploreIcon from '@mui/icons-material/Explore';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddIcon from '@mui/icons-material/Add';
const Menubar = () => {
  return (
    <div className="bg-slate-50 text-gray-400 w-20 h-screen justify-between border-2 border-gray-200 border-t-0">
    <div className="icons flex flex-col h-3/5 items-center">
    <div className='cursor-pointer text-blue-600 circle rounded-full h-12 w-12 shadow-md shadow-gray-200 items-center flex justify-center text-justify' >
        <ExploreIcon/>
    </div>
    <div className='cursor-pointer text-gray-400 circle rounded-full h-12 w-12 shadow-md shadow-gray-200 items-center flex justify-center text-justify' >
        <StarIcon/>
    </div>
    <div className='cursor-pointer text-gray-400 circle rounded-full h-12 w-12 shadow-md shadow-gray-200 items-center flex justify-center text-justify' >
        
    </div>
    <div className='cursor-pointer text-gray-400 circle rounded-full h-12 w-12 shadow-md shadow-gray-200 items-center flex justify-center  text-justify' >
        <TrendingUpIcon/>
    </div>
    <div className='cursor-pointer text-gray-400 circle rounded-full h-12 w-12 shadow-md shadow-gray-200 items-center flex justify-center  text-justify' >
        <PublicIcon/>
    </div>
    <div className='cursor-pointer text-gray-400 circle rounded-full h-12 w-12 shadow-md shadow-gray-200 items-center flex justify-center  text-justify' >
        <ApartmentIcon/>
    </div>
    </div>

    <div className="icons flex flex-col h-2/5 items-center justify-between">
    <div className='bg-orange-400 overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-12 w-12 shadow-md shadow-gray-200 items-center flex justify-center  text-justify' >
        <img src="./4.png" alt="" srcset="" />
    </div>
    <div className=' bg-pink-400 overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-12 w-12 shadow-md shadow-gray-200 items-center flex justify-center  text-justify' >
    <img src="./5.png" alt="" srcset="" />
    </div>
    <div className='bg-purple-400 overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-12 w-12 shadow-md shadow-gray-200 items-center flex justify-center  text-justify' >
    <img src="./6.png" alt="" srcset="" />
    </div>
    <div className='bg-yellow-400 overflow-hidden cursor-pointer text-gray-400 circle rounded-full h-12 w-12 shadow-md shadow-gray-200 items-center flex justify-center  text-justify' >
    <img src="./8.png" alt="" srcset="" />
    </div>
    <div className='cursor-pointer text-gray-400 circle rounded-full h-12 w-12 shadow-md shadow-gray-200 items-center flex justify-center  text-justify' >
        <AddIcon/>
    </div>
    </div>
  </div>
  )
}

export default Menubar
