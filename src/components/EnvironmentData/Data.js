import React from 'react'

export const Data = () => {
    return (
        <div className=" h-screen pt-24 fixed overflow-auto">
        <h1 className="recorded text-xl text-black text-center">
          Recorded Values
        </h1>

        <ul className="flex flex-col justify-center items-center">

        <li className="flex  text-black text-sm">
            {" "}
            <li className="pb-6 mt-2">Humidity</li>{" "}
            <li className="number1 ml-5 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <li className="number1 ml-2 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <p className="mt-2">&#176;C</p>{" "}
          </li>

          <li className="flex  text-black text-sm">
            {" "}
            <li className="pb-6 mt-2">Illumination</li>{" "}
            <li className="number1 ml-5 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <li className="number1 ml-2 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <p className="mt-2">&#176;C</p>{" "}
          </li>

          <li className="flex  text-black text-sm">
            {" "}
            <li className="pb-6 mt-2">Temperature</li>{" "}
            <li className="number1 ml-5 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <li className="number1 ml-2 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <p className="mt-2">&#176;C</p>{" "}
          </li>

          
          <li className="flex  text-black text-sm">
            {" "}
            <li className="pb-6 mt-2">Soil moisture</li>{" "}
            <li className="number1 ml-5 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <li className="number1 ml-2 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <p className="mt-2">&#176;C</p>{" "}
          </li>


          <li className="flex  text-black text-sm">
            {" "}
            <li className="pb-6 mt-2">Carbondioxide</li>{" "}
            <li className="number1 ml-5 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <li className="number1 ml-2 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <p className="mt-2">&#176;C</p>{" "}
          </li>
        
          <li className="flex  text-black text-sm">
            {" "}
            <li className="pb-6 mt-2">Potential of H2</li>{" "}
            <li className="number1 ml-5 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <li className="number1 ml-2 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <p className="mt-2">&#176;C</p>{" "}
          </li>


          <li className="flex  text-black text-sm">
            {" "}
            <li className="pb-6 mt-2">Soil temperature</li>{" "}
            <li className="number1 ml-5 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <li className="number1 ml-2 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <p className="mt-2">&#176;C</p>{" "}
          </li>
        
         
        </ul>
      </div>
    )
}
