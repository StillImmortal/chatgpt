"use client"

import { Dispatch, FC, SetStateAction } from "react"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

type ChatElementProps = {
  id: string,
  name: string,
  focused: string,
  setFocused: Dispatch<SetStateAction<string>>,

}

const ChatElement: FC<ChatElementProps> = ({ id, name, focused, setFocused }) => {

  return (
    <li 
      onClick={() => setFocused(id)}
      className={`relative z-10 flex overflow-hidden whitespace-nowrap items-center gap-3 p-3 rounded-md hover:cursor-pointer ${focused === id ? "bg-gray-800 hover:bg-gray-800" : "bg-gray-900 hover:bg-[#2A2B32]"}`}
    >
      <ChatBubbleOutlineRoundedIcon className="text-gray-200 w-4 h-4" />
      <p className="text-gray-200">{name}</p>
      <div className="absolute hidden z-15 bg-gray-800  px-1 right-0 h-full items-center gap-1">
        <DriveFileRenameOutlineOutlinedIcon className="w-5 h-5 text-gray-400 hover:text-gray-300" />
        <DeleteOutlinedIcon className="w-5 h-5 text-gray-400 hover:text-gray-300"/>
      </div>
    </li>
  )
}

export default ChatElement