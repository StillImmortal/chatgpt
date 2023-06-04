"use client"
import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react"
import {
  DeleteOutlined,
  DriveFileRenameOutlineOutlined,
  ChatBubbleOutlineRounded,
} from "@mui/icons-material"

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
      className="relative"
    >
      <Link
        href={`/?${id}`}
        className={`relative flex items-center break-all rounded-md hover:cursor-pointer ${focused === id ? "bg-gray-800 hover:bg-gray-800 pr-[60px]" : "bg-gray-900 hover:bg-[#2A2B32]"} group gap-3 p-3`}
      >
        <ChatBubbleOutlineRounded className="text-gray-200 !w-4 !h-4" />
        <div className="relative flex-1 overflow-hidden max-h-6 break-all text-ellipsis text-gray-200">
          {name}
          <div className={`absolute inset-y-0 right-0 w-8 bg-gradient-to-l ${focused === id ? "from-gray-800" : "from-gray-900 group-hover:from-[#2A2B32]"}`}></div>
        </div>
        <div className={`absolute right-1 flex-center bg-gray-800 ${focused === id ? "visible" : "invisible"} gap-1 px-2`}>
          <DriveFileRenameOutlineOutlined className="text-gray-400 hover:text-gray-200 !w-5 !h-5" />
          <DeleteOutlined className="text-gray-400 hover:text-gray-200 !w-5 !h-5" />
        </div>
      </Link>
    </li>
  )
}

export default ChatElement