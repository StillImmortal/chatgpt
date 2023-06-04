"use client"

import {useState, ChangeEvent, useRef } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import {
  CachedOutlined,
  SendRounded,
} from "@mui/icons-material"

const Prompt = () => {
  const [textareaValue, setTextareaValue] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setTextareaValue(value);
    setIsDisabled(value.trim().length === 0)
  }

  const handleClick = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }

  return (
    <div className="absolute bottom-0 left-0 w-full">
      <form 
        className="flex flex-col flex-1 justify-center mx-2 md:mx-4 lg:mx-auto lg:max-w-2xl xl:max-w-3xl"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="bg-white rounded">
            <button 
              type="button"
              className="flex gap-1 justify-center items-center text-sm text-[rgb(64,65,79)] p-2"
            >
              <CachedOutlined className="!w-4 !h-4" />
              <span className="font-medium">Regenerate response</span>
            </button>
          </div>

          <div
            onClick={handleClick}
            className="relative flex justify-center flex-1 h-auto group w-full rounded-xl bg-white p-[10px] pr-0 md:py-4 md:pl-4"
          >
            <TextareaAutosize
              ref={textareaRef}
              rows={1}
              onChange={handleChange}
              placeholder="Send a message..."
              className="w-full max-h-[200px] group-focus resize-none outline-none focus:ring-0 focus-visible:ring-0 pr-10 md:pr-12"
            />
            <button
              disabled={isDisabled}
              type="button"
              className={`absolute md:bottom-3 md:right-3 right-2 bottom-1.5 flex-center w-8 h-8 rounded-md ${isDisabled ? "text-gray-300" : "bg-green-500 text-white"} `}
            >
              <SendRounded className={`text-md`} />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Prompt