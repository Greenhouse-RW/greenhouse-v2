import React from 'react'
import menu from '../../images/menu.svg';
import i from '../../images/i.svg';
import cam from '../../images/cam.svg';
import video from '../../images/greenhouse.jpg';
import downCamera from '../../images/down-camera.svg';
import dropDown from '../../images/drop-down-icon.svg';
import leftArrow from '../../images/left-arrow.svg';
import rightArrow from '../../images/right-arrow.svg';
import tom from '../../images/tomatoes.jpg';

import "./Homepage.css";

const Homepage = () => {
    return (
        <div className="container flex flex-row">
          
  {/* ########################################################################## */}
  <div className="session1 w-full mt-10">
                {/* *********************** */} 
                <div className="text-white">
                {/* <img src={menu} alt="menu-icon" className="w-8 ml-8	mt-6"></img> */}
            <h1 className="font-bold ml-40	text-xl">GREENHOUSE CCTV CONTROL</h1>
                </div>
          
<div className="generalstructure w-10/12 ">
              {/* *********************** */}
            <div className="text-white">
                <div className="subdiv">
                <div className="subheading">
                    <h1 className="ml-14 mt-2 pt-2 pb-2 text-sm	"> camera1-mp4</h1>
                   <h2 className="w-60 ml-56 mt-2 pt-2 pb-2 text-sm	">145/678</h2>
                </div>             
                   <img src={i} alt="i-sign" className="w-6 ml-14 mt-6"></img>
                   <img src={cam} alt="cctv-camera" className="w-6 ml-14 mt-6"></img>
                </div>
             </div>
                 {/* *********************** */}


             <div>
                 <img src={video} alt="video" className="video-img ml-20 mt-2 "></img>
             </div>
                 {/* *********************** */}
             <div className="footer">
            <div className="down-footer ml-20 mt-4">
                <img src={downCamera} alt="down-camera" className="w-8 ml-6 mt-4 pt-1 pb-1"></img>
                <p className="text-white mt-4 ml-4 ">cam 1</p>
                <img src={dropDown} alt="drop-down" className="w-2 mt-1 ml-4"></img>
            </div>

          
            <img src={leftArrow} alt="left-arrow" className="w-8 ml-40 mt-4" ></img>
            <img src={rightArrow} alt="right-arrow" className="w-8 ml-14 mt-4"></img>
            <img src={downCamera} alt="down-camera" className="w-6 ml-80 mt-4"></img>
            </div>
                   {/* *********************** */}
                   </div>
                   </div>
 {/* ########################################################################## */}
 {/* <div className="session2   text-xs	w-auto mr-0">

 
                <div className="street-info mt-20 flex flex-row">

                 <div className="text-white street-data ">
                <h1 className="cam-title mr-10">Cam 1</h1>
                <h2>VG-PTR-45KLN</h2>
                <h3>13:30 SAT 14 JULY</h3>
                 </div>
                 <div>
                 <img src={tom} alt="street-cam" className="w-40	 h-20 "></img>
                 </div>
                 </div>
                




 </div> */}



{/* ########################################################################## */}

               

        </div> 
    )
}

export default Homepage
