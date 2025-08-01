import React, { useRef, useState } from 'react'
import CenterLogo from '../Loading/CenterLogo'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Landing from '../Landing/Landing'
import Second from '../Landing/Second'
import Sliding from '../Landing/Sliding'
import Third from '../Landing/Third'


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
            <div ref={pageRef}>

                <Landing />
            </div>
            <Second />
            <Sliding />
            <Third />


        </div>
    )
}

export default Home


