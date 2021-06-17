import React from 'react'
import './feedback.css'

export default function feedback() {
    return (
        <div className="feedback">
              <div>

<div className="flex justify-between">

<div>
    <form className="feedback-form">  
    <h1 className="grid justify-items-center text-base mb-8 font-bold ">Share With Us Your Feedback.</h1>    
  <input name="name" type="text" class="feedback-input" placeholder="Name" />   
  <input name="email" type="text" class="feedback-input" placeholder="Email" />
  <textarea name="text" class="feedback-input" placeholder="Feedback"></textarea>
  <input class="feed" type="submit" value="SUBMIT"/>
</form>
    </div>
  

    <div className="svg-container">
    <ul className="slides">
<input type="radio" name="radio-btn" id="img-1" checked />
<li className="slide-container">
<div className="slide">
    <img className="h-screen" src="http://farm9.staticflickr.com/8072/8346734966_f9cd7d0941_z.jpg" />
</div>
<div className="nav">
    <label for="img-6" class="prev">&#x2039;</label>
    <label for="img-2" class="next">&#x203a;</label>
</div>
</li>

<input type="radio" name="radio-btn" id="img-2" />
<li className="slide-container">
<div className="slide">
  <img className="h-screen" src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg" />
</div>
<div className="nav">
    <label for="img-1" className="prev">&#x2039;</label>
    <label for="img-3" className="next">&#x203a;</label>
</div>
</li>

</ul>
</div>
</div>
</div>
        </div>
        
    )
}
