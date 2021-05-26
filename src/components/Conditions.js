import React from 'react'
import Button from './Button.js'

function Condition (){

       return (
           <div class="ml-10">
           <h3 class="ml-3">SET THE VALUE OF PLANT’S BETTER  HEALTH </h3>
<div class=" grid grid-cols-2 divide-x ">
<div>
<p><label class="w-10 mr-5">Temperature:</label> <input class="w-16 border-2 border-black-500"/> - <input class="shadow-sm w-16 border-2 border-black-500"/> <Button/></p> 
<p><label class="w-10 mr-5">Illumination:</label> <input class="w-16 border-2  border-black-500"/> - <input class="shadow-sm w-16 border-2 border-black-500"/> <Button/></p>
 <p><label class="w-10 mr-20">CO2 :</label> <input class="shadow-sm w-16 border-2 border-black-500"/> - <input class="shadow-sm w-16 border-2 border-black-500"/><Button/></p>
<p><label class="w-10 mr-5">Soil moisture  :</label><input class="shadow-sm w-16 border-2 border-black-500"/> - <input class="shadow-sm w-16 border-2 border-black-500"/><Button/> </p>   
{/*<p><label class="w-20 mr-5">PH :</label> <input class="shadow-sm w-16 border-2 border-black-500"/> - <input class="shadow-sm w-16 border-2 border-black-500"/> <Button/> </p> 
<p><label class="w-20 mr-5">EC :</label> <input class="shadow-sm w-16 border-2 border-black-500"/> - <input class="shadow-sm w-16 border-2 border-black-500"/><Button/> </p>  */}
</div>


<div class="ml-2" >
{/* <p>Temperature: <input class="shadow-sm w-16 border-2 border-black-500"/> - <input class="shadow-sm w-16 border-2 border-black-500"/>  C </p>
<p>Illumination: <input class="shadow-sm w-16 border-2 border-black-500"/> - <input class="shadow-sm w-16 border-2 border-black-500"/> bx</p>
<p>CO2 : <input class="shadow-sm w-16 border-2 border-black-500"/> - <input class="shadow-sm w-2 border-2 border-black-500"/> %</p><br/><br/>   
<p>Soil moisture  :<input class="border-2 border-black-500"/> - <input class="shadow-sm w-16 border-2 border-black-500"/> % </p> <br/><br/>  
<p>PH : <input class="shadow-sm w-16 border-2 border-black-500"/> - <input class="shadow-sm w-16 border-2 border-black-500"/> </p> <br/><br/>
<p>EC : <input class="shadow-sm w-16 border-2 border-black-500"/> - <input class="shadow-sm w-16 border-2 border-black-500"/> m/s </p>  */}

</div>
</div>
<div>
<form action="" method="post">
<h4>Enter your credentials for sudden information.</h4>
<label for="lname">Last Name :</label><input class="w-23 border-2 border-black-500"/> <br/><br/>
<label for="fname">First Name :</label><input class="w-23 border-2 border-black-500"/><br/><br/>
<label for="phone">Telephone No:</label><input class="w-23 border-2 border-black-500"/><br/><br/>
<label for="mail">Email:</label> <input class="w-23 border-2 border-black-500"/><br/><br/><br/>
<input type="button" value="Submit" className="w-23 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"/>

</form>
    
    </div>
               </div>
       )
   }

export default Condition;