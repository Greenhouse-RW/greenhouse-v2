import React from "react";
import "./SidebarCalendar.css";
import bgPic from "../../assets/images/greenpic.png";

export default function SidebarCalendar() {
  return (
    <>
      <div className="img-cover fixed">
        <img src={bgPic} alt="bg-back" />
      </div>
      <div className="MySideCale h-screen pt-24 fixed overflow-auto">
        <h1 className="recorded text-xl text-white font-bold text-center">
          RECORDED VALUES.
        </h1>
        <hr className="border-black opacity-20 mt-8" />

        <ul className="sidebardata flex flex-col justify-center items-center">

        <li className="flex  text-white text-sm">
            {" "}
            <li className="pb-6 mt-2">Humidity</li>{" "}
            <li className="number1 ml-5 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <li className="number1 ml-2 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <p className="mt-2">&#176;C</p>{" "}
          </li>

          <li className="flex  text-white text-sm">
            {" "}
            <li className="pb-6 mt-2">Illumination</li>{" "}
            <li className="number1 ml-5 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <li className="number1 ml-2 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <p className="mt-2">&#176;C</p>{" "}
          </li>

          <li className="flex  text-white text-sm">
            {" "}
            <li className="pb-6 mt-2">Temperature</li>{" "}
            <li className="number1 ml-5 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <li className="number1 ml-2 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <p className="mt-2">&#176;C</p>{" "}
          </li>

          
          <li className="flex  text-white text-sm">
            {" "}
            <li className="pb-6 mt-2">Soil moisture</li>{" "}
            <li className="number1 ml-5 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <li className="number1 ml-2 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <p className="mt-2">&#176;C</p>{" "}
          </li>


          <li className="flex  text-white text-sm">
            {" "}
            <li className="pb-6 mt-2">Carbondioxide</li>{" "}
            <li className="number1 ml-5 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <li className="number1 ml-2 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <p className="mt-2">&#176;C</p>{" "}
          </li>
        
          <li className="flex  text-white text-sm">
            {" "}
            <li className="pb-6 mt-2">Potential of H2</li>{" "}
            <li className="number1 ml-5 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <li className="number1 ml-2 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <p className="mt-2">&#176;C</p>{" "}
          </li>


          <li className="flex  text-white text-sm">
            {" "}
            <li className="pb-6 mt-2">Soil temperature</li>{" "}
            <li className="number1 ml-5 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <li className="number1 ml-2 mr-4 mb-6 pl-3 pr-3 py-2">34.5</li>{" "}
            <p className="mt-2">&#176;C</p>{" "}
          </li>
        
         
        </ul>
      </div>
    </>
  );
}
