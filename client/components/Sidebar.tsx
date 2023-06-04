"use client"

import { useState } from 'react';
import {
  Add,
} from '@mui/icons-material';

import ProfileBar from './ProfileBar'
import Divider from './Divider'
import ChatElement from './ChatElement';

import { chats } from '@/constants'

const Sidebar = () => {
  const [focused, setFocused] = useState<string>("")

  return (
    <div className={`overflow-x-hidden flex-shrink-0 bg-gray-900`}>
      <div className="w-[16rem] h-full">
        <nav className="flex flex-col w-full h-full p-2">
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
    </div>
  )
}

export default Sidebar