"use client"

import { useMediaQuery } from '@mui/material'

import Prompt from '@/components/Prompt'
import Sidebar from '@/components/Sidebar'
import MobileSidebar from '@/components/MobileSidebar'
import MobileHeader from '@/components/MobileHeader'

const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:768px)");

  return (
      <>
        {!isNonMobileScreens && <MobileHeader />}
        {isNonMobileScreens ? <Sidebar /> : <MobileSidebar />}
        <div className="relative h-full flex-1 max-w-full pb-8 bg-blue-200 overflow-y-auto">
          <div className="relative h-full w-full">

            <Prompt />
          </div>
        </div>
      </>
  )
}

export default Home