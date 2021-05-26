import React from 'react'
import Button from './Button.js'

function Condition (){

       return (
           <>
<div class="grid grid-cols-2 divide-x ">
<div>
<p>Temperature: <input class="shadow-2xl border-2 border-black-500"/> - <input class="border-2 border-black-500"/> <Button/></p> 
<p>Illumination: <input class="border-2 border-black-500"/> - <input class="border-2 border-black-500"/> <Button/></p>



</div>


<div >
<p>Temperature: <input class="shadow-2xl border-2 border-black-500"/> - <input class="border-2 border-black-500"/>  C </p><br/><br/>
<p>Illumination: <input class="border-2 border-black-500"/> - <input class="border-2 border-black-500"/> bx</p><br/><br/>


</div>
</div>
<div>
<form action="" method="post">
<h4>Enter your credentials for sudden information.</h4>
<label for="lname">Last Name :</label><input class="border-2 border-black-500"/> <br/><br/>
<label for="fname">First Name :</label><input class="border-2 border-black-500"/><br/><br/>
<label for="phone">Telephone No:</label><input class="border-2 border-black-500"/><br/><br/>
<label for="mail">Email:</label> <input class="border-2 border-black-500"/><br/><br/><br/>
<input type="button" value="Submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"/>

</form>
    
    </div>
               </>
       )
   }

export default Condition;