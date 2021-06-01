import React from 'react'
import Button from './Button.js'
import './Condition.css'

function Condition() {

    return (
        <div>
      <div className="flex w-full space-x-10 justify-center">
      <div className=" mt-16 w-2/5">
             {/* for row */}
        <div class = "text-xl text-black font-bold text-center" > SET THE VALUE OF PLANT’ S BETTER HEALTH. </div>

        <div class = " flex flex-col space-y-6  relative" >
        
        <div className = "flex space-x-6 relative mt-16" >
                <div className = "w-12 mt-2 mr-3" > Temperature: </div>
                <div> <input class="h-8 ml-5 shadow flex w-16 mt-2"/></div>
                <div>-</div>
                <div ><input class = "h-8 shadow flex w-16  mt-2" />  </div>
                <div><Button/></div>
        
            </div>
            <div className = "flex space-x-6 relative" >
              <div className = "w-12 mt-2 mr-3" > Illumination: </div>
              <div><input class="h-8 ml-5 shadow flex w-16 mt-2  "/> </div>
              <div>-</div>
              <div> <input class = "h-8 shadow flex w-16  mt-2" /> </div>
              <div><Button/></div>
        
               </div>
               <div className = "flex space-x-6 relative mt-24" >
             <div className = "w-12 mt-2 mr-3" > CO2 : </div>
             <div><input class="h-8 ml-5 shadow flex w-16 mt-2  "/> </div>
             <div>-</div>
             <div> <input class = "h-8 shadow flex w-16  mt-2" /> </div>
             <div> <Button/></div>
        
               </div>
               <div className = "flex space-x-6 relative mt-24" >
             <div className = "w-17 mt-2 -m-3" > Soil moisture : </div>
             <div><input class="h-8 shadow flex w-16 mt-2"/> </div>
             <div>-</div>
             <div> <input class = "h-8 shadow flex w-16  mt-2" /> </div>
             <div><Button/> </div> 
        
               </div>
               <div className = "flex space-x-6 relative mt-24" >
             <div className = "w-12 mt-2 mr-3" > PH : </div>
             <div><input class="h-8 ml-5 shadow flex w-16 mt-2 "/> </div>
             <div>-</div>
             <div> <input class = "h-8 shadow flex w-16  mt-2" /> </div>
             <div><Button/></div>
        
               </div>

             <div className = "flex space-x-6 relative mt-24" >
             <div className = "mr-3 w-12 mt-2 " > EC : </div>
             <div > <input className="h-8 ml-5 shadow flex w-16 mt-2 "/> </div>
             <div>-</div>
             <div > <input class = "h-8 shadow flex w-16  mt-2"/></div>
             <div><Button/></div>
        
               </div>
        
      
            

</div>
</div>
        
<div className="mt-5 pt-16 w2/5 text-center relative">

        <div class = " flex flex-col space-y-6  relative" >
            <div className = "flex space-x-6 relative mt-24" >
                <div className = "w-12 mt-2 mr-8" > Temperature: </div>
                <div class="h-8 ml-5  shadow flex w-16 mt-2"> </div>
                <div>-</div>
                <div class="h-8 shadow flex w-16 mt-2">  </div>
                <div>C</div>
        
            </div>
            <div className = "flex space-x-6 relative mt-24" >
              <div className = "w-12 mt-2 mr-8" > Illumination: </div>
              <div class="h-8 ml-5 shadow flex w-16 mt-2  "> </div>
              <div>-</div>
              <div class = "h-8 shadow flex w-16  mt-2" > </div>
              <div>bx</div>
        
               </div>
               <div className = "flex space-x-6 relative mt-24" >
             <div className = "w-12 mt-2 mr-8" > CO2 : </div>
             <div class="h-8 ml-5 shadow flex w-16 mt-2  "> </div>
             <div>-</div>
             <div  class = "h-8 shadow flex w-16  mt-2" > </div>
             <div> %</div>
        
               </div>
               <div className = "flex space-x-6 relative mt-24" >
             <div className = "w-17 h-8 mt-2 -m-3" > Soil moisture : </div>
             <div class="h-8 shadow flex w-16 mt-2"> </div>
             <div>-</div>
             <div class = "h-8 shadow flex w-16  mt-2" > </div>
             <div> % </div>
        
               </div>
               <div className = "flex space-x-6 relative mt-24" >
             <div className = "w-12 mt-2 mr-8" > PH : </div>
             <div  class="h-8 ml-5 shadow flex w-16 mt-2 "> </div>
             <div>-</div>
             <div class = "h-8 shadow flex w-16  mt-2" > </div>
             <div></div>
        
               </div>

             <div className = "flex space-x-6 relative mt-24" >
             <div className = "mr-8 w-12 mt-2 " > EC : </div>
             <div className="h-8 ml-5 shadow flex w-16 mt-2 "> </div>
             <div>-</div>
             <div class = "h-8 shadow flex w-16  mt-2" > </div>
             <div> % </div>
        
               </div>
        
      
                </div>
        
         </div>
         </div>
         <div class ="mt-5 ml-96">
<form action="" method="post">
<h4 class="my-8">Enter your credentials for sudden information.</h4>
<input class="w-80 h-18 border-2 rounded-xl p-1 px-2" placeholder="Enter your Last Name "/> <br/><br/>
<input class="w-80 h-18 border-2 rounded-xl p-1 px-2" placeholder="Enter your Last Name "/><br/><br/>
<input class="w-80 h-18 border-2  rounded-xl p-1 px-2" placeholder="Enter your phone number"/><br/><br/>
<input class="w-80 h-18 border-2  rounded-xl p-1 px-2" placeholder="Enter your email "/><br/><br/><br/>
<input type="button" value="Submit" className=" mb-12 mx-24 rounded-xl w-44 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 "/>

</form>

    </div>


         </div>
    )
}

export default Condition;