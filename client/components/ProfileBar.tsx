"use client"

import { useState } from 'react'

import {
  MoreHorizOutlined,
  LogoutOutlined,
  SettingsOutlined,
  DeleteOutlined,
  LaunchOutlined,
} from "@mui/icons-material"


import { menu } from '@/constants'
import Divider from './Divider'

const ProfileBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <>
      <div className="relative h-12 w-full">
        <div
          onClick={() => setIsMenuOpen(prev => !prev)}
          className={`flex h-full w-full p-2 justify-between gap-12 items-center transition-colors duration-200 rounded-md hover:bg-gray-800 hover:cursor-pointer ${isMenuOpen && "bg-gray-800"}`}
        >
          <div className="h-8 w-8 rounded-lg bg-green-200">
          </div>
          <MoreHorizOutlined className="h-4 w-4 text-gray-500" />
        </div>

        <div className={`absolute bottom-full left-0 mb-2 w-full py-[6px] rounded-md bg-[#050509] shadow-fade-in transition-menu z-50 ${isMenuOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-[5px]"}`}>
          <nav w-full h-full>
            <ul className="flex flex-col">
              <li className="menu-link">
                <LaunchOutlined className="w-5 h-5" /> <span>Help & FAQ</span>
              </li>

              <Divider />

              <li className="menu-link">
                <DeleteOutlined className="w-5 h-5" /> <span>Clear conversations</span>
              </li>
              <li className="menu-link">
                <SettingsOutlined className="w-5 h-5" /> <span>Settings</span>
              </li>

              <Divider />

              <li className="menu-link">
                <LogoutOutlined className="w-5 h-5" /> <span>Log out</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default ProfileBar