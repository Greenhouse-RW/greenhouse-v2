import React from "react";

export const Data = () => {
  return (
    <div className="flex w-full space-x-10 justify-center">
      <div className=" pt-16 mt-5 w-2/5">
      <div className="text-xl text-black font-bold text-center  pb-6 ">
         ENVIRONMENT DATA
        </div>

<div className="ml-28 flex flex-col space-y-6 relative">
          <div className="flex space-x-10 relative">
            <div className="mt-2">Temperature</div>
            <div className="bg-white shadow flex justify-center align-center py-2 px-7 h-10 text-sm text-black absolute left-32">
              34
            </div>
            <div className="flex  text-md h-10 absolute left-56 top-4">
            &#176;C
            </div>
          </div>
          <div className="flex space-x-10 relative">
            <div className="mt-2">Illumination</div>
            <div className="bg-white shadow flex justify-center align-center py-2.5 text-sm px-7 h-10 text-black absolute left-32">
            34
            </div>
            <div className="flex  text-md h-10 absolute left-56 top-4">
            lx
            </div>
          </div>
          <div className="flex space-x-10 relative">
            <div className="mt-2">Humidity</div>
            <div className="bg-white shadow flex justify-center align-center py-2.5 text-sm px-7 h-10 text-black absolute left-32">
            34
            </div>
            <div className="flex  text-md h-10 absolute left-56 top-4">
            %
            </div>
          </div>
          <div className="flex space-x-10 relative">
            <div className="mt-2">Carbondioxide</div>
            <div className="bg-white shadow flex justify-center align-center py-2.5 text-sm px-7 h-10 text-black absolute left-32">
            34
            </div>
            <div className="flex  text-md h-10 absolute left-56 top-4">
            &#176;C
            </div>
          </div>
          <div className="flex space-x-10 relative">
            <div className="mt-2">Soil moisture</div>
            <div className="bg-white shadow flex justify-center align-center py-2.5 text-sm px-7 h-10 text-black absolute left-32">
            34
            </div>
            <div className="flex  text-md h-10 absolute left-56 top-4">
            %
            </div>
          </div>
      
          <div className="flex space-x-10 relative">
            <div className="mt-2">Soil temperature</div>
            <div className="bg-white shadow flex justify-center align-center py-2.5 text-sm px-7 h-10 text-black absolute left-32">
            34
            </div>
            <div className="flex  text-md h-10 absolute left-56 top-4">
            &#176;C
            </div>
          </div>

          <div className="flex space-x-10 relative">
            <div className="mt-2">Potential of H2</div>
            <div className="bg-white shadow flex justify-center align-center py-2.5 text-sm px-7 h-10 text-black absolute left-32">
            34
            </div>

            <div className="flex  text-md h-10 absolute left-56 top-4">
            ψ
            </div>
          </div>
        </div>

      </div>

      
      <div className="pt-16 mt-5 w-2/5 text-center relative">
        <div className="text-xl text-black font-bold text-center  pb-6 ">
          FACILITY CONTROL
        </div>
        <div className="ml-10 flex flex-col mt-5 space-y-12 relative">
          <div className="flex space-x-10 relative">
            <div className="mt-2">Heating Fan</div>
            <button className="focus:outline-none hover:bg-green-700  rounded-md tracking-widest font-bold bg-dgreen shadow-lg flex justify-center align-center py-2.5 px-7 h-10 text-sm text-white absolute left-32">
              ON
            </button>
            <button className="focus:outline-none hover:bg-gray-800 rounded-md tracking-widest font-bold bg-gray-700 text-white flex shadow-lg justify-center text-sm align-center py-2.5 px-7 h-10 absolute right-24">
              OFF
            </button>
          </div>
          <div className="flex space-x-10 relative">
            <div className="mt-2">Cooling Fan</div>
            <button className="focus:outline-none hover:bg-green-700  rounded-md tracking-widest font-bold bg-dgreen shadow-lg flex justify-center align-center py-2.5 text-sm px-7 h-10 text-white absolute left-32">
              ON
            </button>
            <button className="focus:outline-none hover:bg-gray-800 rounded-md tracking-widest bg-gray-700 text-white font-bold flex shadow-lg justify-center align-center py-2.5 text-sm px-7 h-10 absolute right-24">
              OFF
            </button>
          </div>
          <div className="flex space-x-10 relative">
            <div className="mt-2">Window</div>
            <button className="focus:outline-none hover:bg-green-700  rounded-md tracking-widest font-bold bg-dgreen shadow-lg flex justify-center align-center py-2.5 text-sm px-7 h-10 text-white absolute left-32">
              ON
            </button>
            <button className="focus:outline-none hover:bg-gray-800 rounded-md tracking-widest font-bold bg-gray-700 text-white flex shadow-lg justify-center align-center py-2.5 text-sm px-7 h-10 absolute right-24">
              OFF
            </button>
          </div>
          <div className="flex space-x-10 relative">
            <div className="mt-2">Watering System</div>
            <button className="focus:outline-none hover:bg-green-700  rounded-md tracking-widest font-bold bg-dgreen shadow-lg flex justify-center align-center py-2.5 text-sm px-7 h-10 text-white absolute left-32">
              ON
            </button>
            <button className="focus:outline-none hover:bg-gray-800 rounded-md tracking-widest font-bold bg-gray-700 text-white flex shadow-lg justify-center align-center py-2.5 text-sm px-7 h-10 absolute right-24">
              OFF
            </button>
          </div>
          <div className="led flex space-x-10 relative">
            <div className="mt-2">LED Lamp</div>
            <button className="focus:outline-none hover:bg-green-700  rounded-md tracking-widest font-bold bg-dgreen shadow-lg flex justify-center align-center py-2.5 text-sm px-7 h-10 text-white absolute left-32">
              ON
            </button>
            <button className="focus:outline-none hover:bg-gray-800 rounded-md tracking-widest font-bold bg-gray-700 text-white flex shadow-lg justify-center align-center py-2.5 text-sm px-7 h-10 absolute right-24">
              OFF
            </button>
          </div>
      
        </div>
      </div>
    </div>
  );
};

