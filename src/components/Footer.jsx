import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Footer =()=> {
  return (
    <div className="flex md:hidden bg-[#0a192f] pb-4 justify-center">
        <ul className='flex'>
          <li className="w-[60px] hover:w-[64px] h-[60px] flex justify-center items-center   bg-blue-600">
            <a
              className=" w-full flex justify-center items-center text-gray-300"
              href="https://www.linkedin.com/in/altaf-patel-95244624b/"
            >
               <FaLinkedin className='fill-white' size={30} />
            </a>
          </li>
          <li className="w-[60px] hover:w-[64px] h-[60px] flex justify-center items-center   bg-[#333333]">
            <a
              className=" w-full flex justify-center items-center text-gray-300"
              href="https://github.com/altafpatel01"
            >
               <FaGithub className='fill-white' size={30} />
            </a>
          </li>
          <li className="w-[60px] hover:w-[64px] h-[60px] flex justify-center items-center    bg-[#6fc2b0]">
            <a
              className=" w-full flex justify-center items-center text-gray-300"
              href="mailto:altafpatel8485@gmail.com"
            >
               <HiOutlineMail className='fill-white' size={30} />
            </a>
          </li>
          <li className="w-[60px] hover:w-[64px] h-[60px] flex justify-center items-center   bg-[#565f69]">
            <a
              className=" w-full flex justify-center items-center text-gray-300"
              href="https://www.linkedin.com/in/altaf-patel-95244624b/"
            >
               <BsFillPersonLinesFill className='fill-white' size={30} />
            </a>
          </li>

        </ul>
      </div>
    
  )
}

export default Footer