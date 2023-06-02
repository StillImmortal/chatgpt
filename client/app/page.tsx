"use client"

import { useSelector } from 'react-redux'

import { RootState } from '@/state'

const Home = () => {
  const { isMenuOpen } = useSelector((state: RootState) => state)

  return (
    <div className={``}>
      <div className={``}>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quos quibusdam architecto voluptatem asperiores corrupti accusantium hic eveniet voluptatum autem qui vitae exercitationem, harum quas tempore ipsam quam modi error?</div>
      </div>
    </div>
  )
}

export default Home