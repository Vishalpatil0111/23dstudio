import React, { useRef, useState } from 'react'
import CenterLogo from '../Loading/CenterLogo'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Landing from '../Landing/Landing'
import Second from '../Landing/Second'
import Sliding from '../Landing/Sliding'


function Home() {

    const pageRef = useRef(null)



    useGSAP(() => {
        gsap.to(pageRef.current, {
            opacity: 1,
            delay: 1.5,
            duration: 0.3,


        })

    })




    return (
        <div className=''>
            <CenterLogo />
            <div ref={pageRef} className='opacity-0 h-full bg-center bg-cover bg-[url("https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] w-full  '>

            <Landing />
            </div>
            <Second/>
            <Sliding/>
            

        </div>
    )
}

export default Home


