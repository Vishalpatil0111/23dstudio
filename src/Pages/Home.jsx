import React from 'react'
import Hero from '../Components/Home/Hero'
import Second from '../Components/Home/Second'
import SlideUp from '../Components/Home/SlideUp'
import HeroNav from '../Components/Home/HeroNav'
import Third from '../Components/Home/Third'

function Home({ setCursorText }) {
  const homeImages = [
    "/images/showcase9.jpg",
    "/images/showcase10.jpg",
    "/images/showcase7.jpg",
    "/images/showcase8.jpg",
  ];
  const caption = "Design should be simple, beautiful, and tell a story."
  return (
    <div className='w-full text-var(--color-text) bg-var(--color-bg)'>
      <Hero images={homeImages} setCursorText={setCursorText}  caption= {caption}/>
      <Second/>
      <SlideUp setCursorText={setCursorText}/>
      <HeroNav setCursorText={setCursorText} />
      <Third/>
      
    </div>
  )
}

export default Home
