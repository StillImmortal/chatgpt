"use client"

import {
  MenuOutlined,
  Add,
} from '@mui/icons-material';
import { useDispatch } from "react-redux"

import { toggleMenuState } from "@/state"

const MobileHeader = () => {
  const dispatch = useDispatch()

  return (
    <header className='fixed top-0 left-0 w-screen h-11 flex justify-between items-center p-2 text-gray-200 bg-gray-800 z-40'>
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
    </header>
  )
}

export default MobileHeader