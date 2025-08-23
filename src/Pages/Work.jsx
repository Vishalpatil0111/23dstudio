import React from 'react'
import Hero from '../Components/Home/Hero'
import FirstLayout from '../Components/Work/FirstLayout';
import SecondLayout from '../Components/Work/SecondLayout';
import ThirdLayout from '../Components/Work/ThirdLayout';

export default function Work() {
    const WorkImages = [
    "/images/showcase6.jpg",
    "/images/showcase7.jpg",
    "/images/showcase8.jpg",
  ];
  return (
    <div className='w-full font-[bituml]  '>
      <Hero images={WorkImages}/>
      <h1 className='text-4xl font-bold text-center mt-8 tracking-widest uppercase'>Work We Do</h1>
      <FirstLayout/>
      <SecondLayout/>
      <ThirdLayout/>
      
    </div>
  )
}
