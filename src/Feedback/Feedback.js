import React from 'react'
import './feedback.css'

export default function feedback() {
    return (
        <div className="feedback">
              <div>

<div className="flex justify-between">

<div>
    <form className="feedback-form">      
  <input name="name" type="text" class="feedback-input" placeholder="Name" />   
  <input name="email" type="text" class="feedback-input" placeholder="Email" />
  <textarea name="text" class="feedback-input" placeholder="Feedback"></textarea>
  <input class="feed" type="submit" value="SUBMIT"/>
</form>
    </div>
  

    <div className="svg-container">
    <ul class="slides">
<input type="radio" name="radio-btn" id="img-1" checked />
<li class="slide-container">
<div class="slide">
    <img src="http://farm9.staticflickr.com/8072/8346734966_f9cd7d0941_z.jpg" />
</div>
<div class="nav">
    <label for="img-6" class="prev">&#x2039;</label>
    <label for="img-2" class="next">&#x203a;</label>
</div>
</li>

<input type="radio" name="radio-btn" id="img-2" />
<li class="slide-container">
<div class="slide">
  <img src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg" />
</div>
<div class="nav">
    <label for="img-1" class="prev">&#x2039;</label>
    <label for="img-3" class="next">&#x203a;</label>
</div>
</li>

<input type="radio" name="radio-btn" id="img-3" />
<li class="slide-container">
<div class="slide">
  <img src="http://farm9.staticflickr.com/8068/8250438572_d1a5917072_z.jpg" />
</div>
<div class="nav">
    <label for="img-2" class="prev">&#x2039;</label>
    <label for="img-4" class="next">&#x203a;</label>
</div>
</li>

<input type="radio" name="radio-btn" id="img-4" />
<li class="slide-container">
<div class="slide">
  <img src="http://farm9.staticflickr.com/8061/8237246833_54d8fa37f0_z.jpg" />
</div>
<div class="nav">
    <label for="img-3" class="prev">&#x2039;</label>
    <label for="img-5" class="next">&#x203a;</label>
</div>
</li>

<input type="radio" name="radio-btn" id="img-5" />
<li class="slide-container">
<div class="slide">
  <img src="http://farm9.staticflickr.com/8055/8098750623_66292a35c0_z.jpg" />
</div>
<div class="nav">
    <label for="img-4" class="prev">&#x2039;</label>
    <label for="img-6" class="next">&#x203a;</label>
</div>
</li>

<input type="radio" name="radio-btn" id="img-6" />
<li class="slide-container">
<div class="slide">
  <img src="http://farm9.staticflickr.com/8195/8098750703_797e102da2_z.jpg" />
</div>
<div class="nav">
    <label for="img-5" class="prev">&#x2039;</label>
    <label for="img-1" class="next">&#x203a;</label>
</div>
</li>

</ul>
    </div>

  
</div>
</div>
        </div>
        
    )
}
