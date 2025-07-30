import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

function LoadChild() {

  const lineRef = useRef(null)
  const tl = gsap.timeline()


  useGSAP(()=>{
    tl.to(lineRef.current,{
        width:'100%',
        duration:1.3,
        delay:0.6,
        ease:"expo.out"
    }
    ).to(lineRef.current,{
        opacity:0
    })
  })
  return (
    <div ref={lineRef} className='w-0 h-full bg-zinc-900'>
      
    </div>
  )
}

export default LoadChild
