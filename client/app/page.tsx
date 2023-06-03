"use client"

import { useSelector } from 'react-redux'

import { RootState } from '@/state'

const Home = () => {
  const { isMenuOpen } = useSelector((state: RootState) => state)

  return (
    <div className={`absolute overflow-y-scroll md:ml-[16rem] mt-11 md:mt-0 p-2 inset-0`}>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
    </div>
  )
}

export default Home