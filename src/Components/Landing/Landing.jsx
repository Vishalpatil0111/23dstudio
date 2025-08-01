import React from 'react';

function Landing() {
  return (
    <div className="relative flex justify-center items-center w-full h-screen">

      <div className="w-full h-full">
        <img className="absolute w-full h-full object-cover" src="" alt="Background" />
      </div>


      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      flex flex-col gap-4 justify-center items-center px-4 text-center">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-light drop-shadow-lg">
          Aesthetic Storytelling, Powered By
        </h2>
        <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold  drop-shadow-lg">
          Smart tech
        </h1>


        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-blue-300 mt-2" />
      </div>
    </div>
  );
}

export default Landing;
