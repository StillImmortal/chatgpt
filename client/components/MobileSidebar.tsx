"use client"

import { useState } from 'react'
import {
  Add,
  CloseOutlined,
} from '@mui/icons-material';
import { useSelector, useDispatch } from "react-redux"

import { RootState } from '@/state'
import { toggleMenuState } from '@/state'
import ChatElement from './ChatElement';
import { chats } from '@/constants';
import Divider from './Divider';
import ProfileBar from './ProfileBar';

const MobileSidebar = () => {
  const [focused, setFocused] = useState<string>("")
  const { isMenuOpen } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  return (
    <div className="absolute h-screen">
      <div className={`fixed top-0 left-0 h-screen w-screen transition-menu !duration-700 bg-gray-600 md:bg-transparent ${isMenuOpen ? "bg-opacity-80 z-50" : "opacity-0 z-0"}`}></div>
      <div className={`relative flex h-full transition-menu !duration-700 ${isMenuOpen ? "translate-x-0" : "translate-x-[-100%]"} z-50 pr-6`}>
        <div className="bg-gray-900">
          <nav className="flex flex-col h-full p-2">
            <button className="relative flex gap-3 p-3 border rounded-md transition-colors duration-200 border-neutral-600 hover:cursor-pointer hover:bg-neutral-700 hover:bg-opacity-40">
                <Add className="text-gray-200" />
                <p className="text-gray-200 whitespace-nowrap">New chat</p>
            </button>

            <div className="flex-col flex-1 overflow-y-auto">
              <div className="flex flex-col gap-2 mt-4">
                <div>
                  <div className='px-3 py-2 text-sm font-semibold text-gray-500'>
                    Today
                  </div>
                  <ol className='flex flex-col gap-1'>
                    {chats.map((chat, index) => (
                      <ChatElement 
                        key={index} 
                        id={index.toString()} 
                        focused={focused} 
                        setFocused={setFocused} 
                        name={chat.name} 
                      />
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            <Divider />

            <ProfileBar />
          </nav>
        </div>

        <div className="flex w-14 justify-center p-2">
          <button 
            onClick={() => dispatch(toggleMenuState())}
            className="flex justify-center items-center focus:outline-none h-10 w-10 focus:ring-2 focus:ring-inset focus:ring-white p-2"
          >
            <CloseOutlined className="text-[28px] text-gray-100" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileSidebar