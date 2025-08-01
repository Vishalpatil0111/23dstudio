import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

function CenterLogo() {

    const divRef = useRef(null)
    const textRef = useRef(null)
    

    useGSAP(() => {
        gsap.to(divRef.current, {
            y: '-100%',
            delay: 1.7,
            duration: 0.8

        }

        )

        gsap.to(textRef.current, {
            delay: 1,
            duration: 0.6,
            opacity: 0,
            scale:1.3
        })
        
        

    })

    return (
        <div>
            <div ref={divRef} className='h-screen flex  justify-center items-center bg-zinc-50 w-full z-20 fixed'>

                <div ref={textRef} className='w-30 h-30 sm:w-50 sm:h-50 flex items-center justify-center z-20'>
                    <img className='w-full h-full object-cover' srcSet="./images/Logo.png" alt="firm Logo"  />
                </div>


            </div>
        </div>
    )
}

export default CenterLogo
