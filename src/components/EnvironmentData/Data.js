import React from "react";

export const Data = () => {
  return (
    <div className="flex w-full space-x-10 justify-center">
      <div className=" pt-16 mt-5 w-2/5">
      <div className="text-xl text-black font-bold text-center  pb-6 ">
         ENVIRONMENT DATA
        </div>
        {/* <ul className="flex flex-col mt-5 text-center">
          <li className="flex  text-black text-base">
            {" "}
            <li className="pb-6 mt-2">Humidity</li>{" "}
            <li className="number1 ml-5 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <li className="number1 ml-2 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <p className="mt-2">&#176;C</p>{" "}
          </li>

          <li className="flex  text-black text-base">
            {" "}
            <li className="pb-6 mt-2">Illumination</li>{" "}
            <li className="number1 ml-5 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <li className="number1 ml-2 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <p className="mt-2">&#176;C</p>{" "}
          </li>

          <li className="flex  text-black text-base">
            {" "}
            <li className="pb-6 mt-2">Temperature</li>{" "}
            <li className="number1 ml-5 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <li className="number1 ml-2 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <p className="mt-2">&#176;C</p>{" "}
          </li>

          <li className="flex  text-black text-base">
            {" "}
            <li className="pb-6 mt-2">Soil moisture</li>{" "}
            <li className="number1 ml-5 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <li className="number1 ml-2 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <p className="mt-2">&#176;C</p>{" "}
          </li>

          <li className="flex  text-black text-base">
            {" "}
            <li className="pb-6 mt-2">Carbondioxide</li>{" "}
            <li className="number1 ml-5 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <li className="number1 ml-2 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <p className="mt-2">&#176;C</p>{" "}
          </li>

          <li className="flex  text-black text-base">
            {" "}
            <li className="pb-6 mt-2">Potential of H2</li>{" "}
            <li className="number1 ml-5 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <li className="number1 ml-2 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <p className="mt-2">&#176;C</p>{" "}
          </li>

          <li className="flex  text-black text-base">
            {" "}
            <li className="pb-6 mt-2">Soil temperature</li>{" "}
            <li className="number1 ml-5 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <li className="number1 ml-2 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <p className="mt-2">&#176;C</p>{" "}
          </li>
        </ul> */}

<div className="ml-10 flex flex-col space-y-6 relative">
          <div className="flex space-x-10 relative">
            <div className="mt-2">Temperature</div>
            <div className="bg-white shadow flex justify-center align-center py-2 px-7 h-10 text-sm text-black absolute left-32">
              34
            </div>
           
          </div>
          <div className="flex space-x-10 relative">
            <div className="mt-2">Illumination</div>
            <div className="bg-white shadow flex justify-center align-center py-2.5 text-sm px-7 h-10 text-black absolute left-32">
            34
            </div>
         
          </div>
          <div className="flex space-x-10 relative">
            <div className="mt-2">Humidity</div>
            <div className="bg-white shadow flex justify-center align-center py-2.5 text-sm px-7 h-10 text-black absolute left-32">
            34
            </div>
         
          </div>
          <div className="flex space-x-10 relative">
            <div className="mt-2">Carbondioxide</div>
            <div className="bg-white shadow flex justify-center align-center py-2.5 text-sm px-7 h-10 text-black absolute left-32">
            34
            </div>
           
          </div>
          <div className="flex space-x-10 relative">
            <div className="mt-2">Soil moisture</div>
            <div className="bg-white shadow-sm flex justify-center align-center py-2.5 text-sm px-7 h-10 text-white absolute left-32">
            34
            </div>
           
          </div>
      
          <div className="flex space-x-10 relative">
            <div className="mt-2">Soil temperature</div>
            <div className="bg-white shadow-sm flex justify-center align-center py-2.5 text-sm px-7 h-10 text-white absolute left-32">
            34
            </div>
           
          </div>

          <div className="flex space-x-10 relative">
            <div className="mt-2">Potential of H2</div>
            <div className="bg-dgreen shadow-sm flex justify-center align-center py-2.5 text-sm px-7 h-10 text-white absolute left-32">
            34
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
            <div className="bg-dgreen shadow-sm flex justify-center align-center py-2.5 px-7 h-10 text-sm text-white absolute left-32">
              ON
            </div>
            <div className="flex shadow-sm justify-center text-sm align-center py-2.5 px-7 h-10 absolute right-24">
              OFF
            </div>
          </div>
          <div className="flex space-x-10 relative">
            <div className="mt-2">Cooling Fan</div>
            <div className="bg-dgreen shadow-sm flex justify-center align-center py-2.5 text-sm px-7 h-10 text-white absolute left-32">
              ON
            </div>
            <div className="flex shadow-sm justify-center align-center py-2.5 text-sm px-7 h-10 absolute right-24">
              OFF
            </div>
          </div>
          <div className="flex space-x-10 relative">
            <div className="mt-2">Window</div>
            <div className="bg-dgreen shadow-sm flex justify-center align-center py-2.5 text-sm px-7 h-10 text-white absolute left-32">
              ON
            </div>
            <div className="flex shadow-sm justify-center align-center py-2.5 text-sm px-7 h-10 absolute right-24">
              OFF
            </div>
          </div>
          <div className="flex space-x-10 relative">
            <div className="mt-2">Watering System</div>
            <div className="bg-dgreen shadow-sm flex justify-center align-center py-2.5 text-sm px-7 h-10 text-white absolute left-32">
              ON
            </div>
            <div className="flex shadow-sm justify-center align-center py-2.5 text-sm px-7 h-10 absolute right-24">
              OFF
            </div>
          </div>
          <div className="flex space-x-10 relative">
            <div className="mt-2">LED Lamp</div>
            <div className="bg-dgreen shadow-sm flex justify-center align-center py-2.5 text-sm px-7 h-10 text-white absolute left-32">
              ON
            </div>
            <div className="flex shadow-sm justify-center align-center py-2.5 text-sm px-7 h-10 absolute right-24">
              OFF
            </div>
          </div>
      
        </div>
      </div>
    </div>
  );
};
