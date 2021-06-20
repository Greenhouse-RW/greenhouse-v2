import React from 'react';
import './landpage.css';
import svgone from '../../images/plant.png';

const LandingPage = () => {
    return ( 
        <div>

        <div className="flex justify-between">
            
            <div className="more ml-40">
             <h1 className="text-6xl font-bold tracking-wider mt-24 text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-600">WELCOME TO <br></br>AUTO-GREEN</h1>
             <p className="explain text-lg leading-relaxed mt-8 tracking-wide">Auto-green is an automated greenhouse that <br></br>  involves the automatic monitoring and controlling of <br></br> climatic  parameters which directly or indirectly govern <br></br> the plant growth and increase the productivity.</p>
            <p className="explain text-lg leading-relaxed tracking-wide">Enjoy watching your plant grow healthy and productive <br></br> in the simplest way by interacting with our application.</p>
            <div className="flex flex-row nav-links mt-8">
            {/* <img src={signup} alt="signup icon" className="w-8"></img>  */}
            <ul className="flex flex-row">
                
            <li className="flex flex-row">
                <a href="/signin"><button class="button_left" type="submit" name="button">CONNECT</button></a>              
                </li>
                <li>
                <a href="/faq"><button class="button_right" type="submit" name="button">EXPLORE</button></a>
                </li>
                
            </ul>

            </div>
            </div>
            <div className="svg-container">
            {/* <img src={svgtwo} alt="signup icon" className="image1 mt-10 transform skew-y-6 transform rotate-45"></img>
            <img src={svgone} alt="signup icon" className=" image2 transform rotate-45"></img> */}
            <img src={svgone} alt="signup icon" className="image2 h-screen"></img> 
            </div>
        </div>
        </div>
    )
}

export default LandingPage
