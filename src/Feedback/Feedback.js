import React from 'react'
import './feedback.css'
import svgone from '../images/plant.jpeg'

export default function feedback() {
    return (
        <div className="feedback">
              <div>

<div className="grid justify-items-center">

<div>
    <form className="feedback-form">  
    <h1 className="grid justify-items-start text-3xl mb-8 font-bold text-gray-600">Share With Us Your Feedback.</h1>    
  <input name="name" type="text" class="feedback-input" placeholder="Name" />   
  <input name="email" type="text" class="feedback-input" placeholder="Email" />
  <textarea name="text" class="feedback-input" placeholder="Feedback"></textarea>
  <input class="feed" type="submit" value="SUBMIT"/>
</form>
    </div>
  
</div>
</div>
        </div>
        
    )
}
