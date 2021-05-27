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
<p><label class="w-10 mr-20">PH :</label> <input class="shadow-sm w-16 border-2 border-black-500"/> - <input class="shadow-sm w-16 border-2 border-black-500"/> <Button/> </p> 
<p><label class="w-10 mr-20">EC :</label> <input class="shadow-sm w-16 border-2 border-black-500"/> - <input class="shadow-sm w-16 border-2 border-black-500"/><Button/> </p> 
</div>


<div class="ml-2" >
<p><label>Temperature:</label> <input class="shadow-sm w-16 border-2 border-black-500"/> - <input class="shadow-sm w-16 border-2 border-black-500"/>  C </p>
<p><label>Illumination:</label> <input class="shadow-sm w-16 border-2 border-black-500"/> - <input class="shadow-sm w-16 border-2 border-black-500"/> bx</p>
<p><label>CO2 :</label> <input class="shadow-sm w-16 border-2 border-black-500"/> - <input class="shadow-sm w-16 border-2 border-black-500"/> %</p><br/><br/>   
<p><label>Soil moisture  :</label><input class="border-2 border-black-500"/> - <input class="shadow-sm w-16 border-2 border-black-500"/> % </p> <br/><br/>  
<p><label>PH :</label> <input class="shadow-sm w-16 border-2 border-black-500"/> - <input class="shadow-sm w-16 border-2 border-black-500"/> </p> <br/><br/>
<p><label>EC :</label> <input class="shadow-sm w-16 border-2 border-black-500"/> - <input class="shadow-sm w-16 border-2 border-black-500"/> m/s </p> 

</div>
</div>
<div class ="mt-5 mx-64">
<form action="" method="post">
<h4 class="my-8">Enter your credentials for sudden information.</h4>
<input class="w-80 border-2 rounded-xl p-1 px-2" placeholder="Enter your Last Name "/> <br/><br/>
<input class="w-80 border-2 rounded-xl p-1 px-2" placeholder="Enter your Last Name "/><br/><br/>
<input class="w-80 border-2  rounded-xl p-1 px-2" placeholder="Enter your phone number"/><br/><br/>
<input class="w-80 border-2  rounded-xl p-1 px-2" placeholder="Enter your email "/><br/><br/><br/>
<input type="button" value="Submit" className="mx-24 rounded-xl w-44 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 "/>

</form>
    
    </div>
               </div>
       )
   }

export default Condition;