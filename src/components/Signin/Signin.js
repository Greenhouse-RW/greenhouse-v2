import React, { Component } from 'react';
import { Link } from "react-router-dom";
import leaves from "../../assets/images/greenpic.png";
import "./signin.css";

// import MetaTags from 'react-meta-tags';

class Signin extends Component{
    state = {
        email:" ",
        password:" " 
    };

    
     /*
     we can create a method that takes the inputed values intead of
     repeating the codes many time.
     */


     change = e => {
         this.setState({
             [e.target.name]:e.target.value
         });
     };

      onSubmit = e => {
          e.preventDefault();
          console.log(this.state);
      };
    
    render(){
        return(
           
          
            <div className=" flex signinform  w-screen h-screen ">

       
                <form class="r" action="#" method="GET">


                <div id="left" >
                 
                <h1 class="ml-44 font-semibold">Ready! Login</h1>

                <div class="svg flex space-x-4  mt-4">
                <a href="https://www.facebook.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" class="flex-1 m-1" viewBox="0 0 24 24" fill="#6d736e">
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 
                    10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"/>
                    </svg>
                </a>

                <a href="google.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" class="flex-1 m-1" viewBox="0 0 24 24" fill="#6d736e">
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 
                    5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.5 11.5v1.2h1.985c-.08.514-.601 1.51-1.985 1.51-1.194 0-2.17-.99-2.17-2.21s.976-2.21 2.17-2.21c.681 0 
                    1.135.29 1.396.541l.949-.916c-.61-.57-1.401-.915-2.345-.915-1.936 0-3.5 1.565-3.5 3.5s1.564 3.5 3.5 3.5c2.02 0 3.359-1.419 3.359-3.419 0-.23-.024-.405-.055-.58h-3.304zm0 0
                     8.5 1h-1.5v1.5h-1v-1.5h-1.5v-1h1.5v-1.5h1v1.5h1.5v1z"/>
                     </svg>
                </a>
                <a href="linkedin.com"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" class="flex-1 m-1" viewBox="0 0 24 24" fill="#6d736e">
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 
                    5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447
                     1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 
                     0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/>
                     </svg>
                </a>
                </div>

                <p className="mt-8 ml-48">or use your email account : </p>
                <input className="ml-40 mb-6 mt-8 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Email" name="email" type="email"
                value={this.state.email}
                onChange={e => this.change(e)}
                required /><br></br>
                 {/* 
                 if it was not a function used to get input of the values this input would be considered
                 value={this.state.email}
                 onChange={e =>this.setState({email:e.target.value})}
                 */}

                <input className="ml-40 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Password" name="password" type="password" 
                // value={this.state.password}
                onChange={e =>this.change(e)}   
                required/>
                <button className="focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">SIGN IN</button><br></br>

                 <div className="">
                <Link className="text-lg cursor-pointer ml-44" to="/signup">Don't have an account? <span className="text-blue-400 ">Sign up</span></Link>

                {/* <svg className="ml-4 mt-0.5 cursor-pointer " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#9CA3AF"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"/></svg> */}
                
                </div>
                <a className="text-base ml-40 cursor-pointer text-blue-400">forgot your password?</a><br></br>

                </div>


                <div id="right" >
                 <img class="h-screen" src={leaves} alt="green" ></img>
                 <div className="centered grid justify-items-center">
                     <h2 className="font-black text-5xl mb-8">Welcome Back!</h2>
                     <p id="lastP" className="grp"> To keep connected with us please login with your personal info.</p>
                     <button className="but focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"  onClick={ e =>this.onSubmit(e)}>SIGN UP</button>
                 </div>
                </div>

                </form>
            </div>
         
        );
    }

}

export  default  Signin;  