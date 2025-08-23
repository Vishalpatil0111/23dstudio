import React from 'react';
import ButtonN from '../../Utils/ButtonN';
import { useNavigate } from 'react-router-dom';

export default function Third() {
  const navigate = useNavigate()
  return (
    <div className="w-full h-fit flex flex-col font-[bituml] py-14 items-center justify-start text-white bg-[#24292D]">

      {/* Heading & Text */}
      <div className="w-full mt-8 px-4 sm:px-8 md:px-21 flex flex-col  space-y-3 text-center md:text-left">
        <h1 className="text-[6vw] sm:text-[4vw] md:text-[3vw] uppercase">
          From thought to creation — made simple
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-4xl mx-auto md:mx-0">
          At 23D Studio, we help brands tell their stories and stand out with fresh strategies and creative services that actually work.
          Our goal is straightforward: build brands people love and deliver results that help your business grow.
        </p>
        <div className='w-fit h-fit self-center sm:self-start inline-block group'>
          <ButtonN onClick={()=> navigate('/work')} text="View Work" color="white" variant="primary" /></div>
      </div>
      {/* Images */}
      <div className="w-full flex flex-wrap justify-center gap-4 mt-10 px-4 py-8">
        {["showcase4.jpg", "showcase6.jpg", "showcase7.jpg", "showcase8.jpg"].map((img, i) => (
          <div
            key={i}
            className="relative transition-transform duration-500 hover:z-20"
          >
            <img
              src={`/images/${img}`}
              className={`transform transition-transform duration-500 hover:scale-110
          w-[40vw] sm:w-[22vw] md:w-75 
          h-[40vw] sm:h-[22vw] md:h-75
          ${i % 2 === 0 ? "rotate-0 lg:rotate-6" : "rotate-0 lg:-rotate-6"}`}
              alt=""
            />
          </div>
        ))}
      </div>


      {/* Clients Section */}
      <div className="px-4 sm:px-8 md:px-15 text-base sm:text-lg md:text-xl w-full md:w-[90%] py-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-50">
        <h1 className="text-2xl font-bold">Clients</h1>
        <p className="max-w-3xl">
          We’re proud to partner with businesses of all sizes, offering services designed around their unique needs.
          Clients choose us because we listen, keep things simple, and consistently deliver work that makes a real impact.
        </p>
      </div>

    </div>
  );
}
