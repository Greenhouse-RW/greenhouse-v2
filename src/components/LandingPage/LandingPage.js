import React from 'react';
import './landpage.css';
import home from '../../images/home.svg';
import signup from '../../images/signup.svg'
const LandingPage = () => {
    return (
        <div>
            <div className="flex flex-row nav-links mt-6">
            <img src={signup} alt="signup icon" className="w-8"></img>
            <ul className="flex flex-row">
                <li className="flex flex-row">
                <a href="#signup" target="_blank" className="text-white px-2 signup">Sign up</a>
                <p className="text-white mt-1 w-4"> &#47;</p>
                </li>
                <li>
                <a href="#login" target="_blank" className="text-white login"> Login</a>
                </li>
                
            </ul>

            </div>
        <div>
        <img src={home} alt="home icon" className="w-24 home-icon"></img>
        </div>
            
        </div>
    )
}

export default LandingPage
