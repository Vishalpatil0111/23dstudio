import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

function Landing() {

  const textRef = useRef(null)
  const subRef = useRef(null)

  useGSAP(() => {

    let clutter = ''
    const splittedText = textRef.current.textContent.split('')

    splittedText.forEach(function (e) {
      clutter += `<span>${e}<span>`
    })

    textRef.current.innerHTML = clutter
    gsap.from("h1 span", {
      y:100,
      opacity: 0,
      delay: 0.7,
      stagger:0.1
      
    })
    gsap.to(subRef.current, {
        opacity:1,
        delay:1.9,
        duration:0.6,
         
        
    })
   
  }, [])


  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <div className='flex flex-col h-fit  justify-center items-center '>
        <h1 ref={textRef} className='whitespace-nowrap px-7 leading-none text-[#f7efcd] text-[10vh] sm:text-[15vh] md:text-[24vh] font-bold uppercase'>23DStudio</h1>
        
      </div>
      
      <h3 ref={subRef} className='opacity-0 text-md sm:text-xl px-1 sm:px-2 md:px-4 bg-zinc-100 text-center'>Design Is Everywhere — We Make It Exceptional</h3>
      
      
     
      
    </div>
  )
}

export default Landing
