"use client"

import { useState } from 'react';
import {
  Add,
  CloseOutlined,
  MenuOutlined,
} from '@mui/icons-material';

import ProfileBar from './ProfileBar'
import Divider from './Divider'
import ChatElement from './ChatElement';
import { useDispatch, useSelector } from 'react-redux';

import { chats } from '@/constants'
import { toggleMenuState } from '@/state';
import { RootState } from '@/state';

const Sidebar = () => {
  const [focused, setFocused] = useState<string>("")
  const { isMenuOpen } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  return (
    <div className={`${isMenuOpen ? "fixed z-50" : "absolute" } overflow-hidden inset-0`}>
      <div className={`absolute h-screen w-screen transition-menu !duration-700 bg-gray-600 md:bg-transparent ${isMenuOpen ? "bg-opacity-75 z-50" : "opacity-0 z-0"}`}></div>
      <div className='fixed md:hidden top-0 left-0 w-full h-11 flex justify-between items-center p-2 text-gray-200 bg-gray-800 z-40'>
        <button
          onClick={() => dispatch(toggleMenuState())}
        >
          <MenuOutlined />
        </button>
        <span>
          Current Chat Name
        </span>
        <button>
          <Add />
        </button>
      </div>

      {/* <div className={`absolute top-0 left-0 flex w-fit h-full transition-menu !duration-700 ${isMenuOpen ? "translate-x-0" : "translate-x-[-100%]"} z-50`}>
        <div className="flex-1 h-full max-w-[20rem] md:max-w-[16rem] bg-gray-900">
          <nav className="flex flex-col h-full p-2">
            <button className="flex gap-3 p-3 border rounded-md transition-colors duration-200 border-neutral-600 hover:cursor-pointer hover:bg-neutral-700 hover:bg-opacity-40">
              <Add className="text-gray-200" />
              <p className="text-gray-200">New chat</p>
            </button>

            <ul className="flex flex-col flex-1 gap-2 mt-4">
              {chats.map((chat, index) => (
                <ChatElement 
                  key={index} 
                  id={index.toString()} 
                  focused={focused} 
                  setFocused={setFocused} 
                  name={chat.name} 
                  />
              ))}
            </ul>
              
            <Divider />

            <ProfileBar />
          </nav>
        </div>

        <div className="flex md:hidden w-14 justify-center p-2">
          <button 
            onClick={() => dispatch(toggleMenuState())}
            className="flex justify-center items-center focus:outline-none h-10 w-10 focus:ring-2 focus:ring-inset focus:ring-white p-2"
          >
            <CloseOutlined className="text-[28px] text-gray-100" />
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default Sidebar