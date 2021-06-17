import React from 'react'
import './feedback.css'

export default function feedback() {
    return (
        <div className="feedback">
              <div>

<div className="flex justify-between">
    
    <div className="more ml-40">
     <h1 className="text-6xl font-bold tracking-wider mt-24 text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-600">WELCOME TO <br></br>AUTO-GREEN</h1>
     <p className="explain text-lg leading-relaxed mt-8 tracking-wide">AUTO-GREEN is an automated greenhouse that <br></br>  involves the automatic monitoring and controlling of <br></br> climatic  parameters which directly or indirectly govern <br></br> the plant growth and increase the productivity.</p>
    <p className="explain text-lg leading-relaxed tracking-wide">Enjoy watching your plant grow healthy and productive <br></br> in the simplest way by interacting with our application.</p>
    <div className="flex flex-row nav-links mt-8">
    {/* <img src={signup} alt="signup icon" className="w-8"></img>  */}
    <ul className="flex flex-row">
        
        <li className="flex flex-row">
        <a href="/signin"><button class="button_left" type="submit" name="button">JOIN US</button></a>              
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
    {/* <img src={svgone} alt="signup icon" className="image2 h-screen"></img>  */}
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

<li class="nav-dots">
<label for="img-1" class="nav-dot" id="img-dot-1"></label>
<label for="img-2" class="nav-dot" id="img-dot-2"></label>
<label for="img-3" class="nav-dot" id="img-dot-3"></label>
<label for="img-4" class="nav-dot" id="img-dot-4"></label>
<label for="img-5" class="nav-dot" id="img-dot-5"></label>
<label for="img-6" class="nav-dot" id="img-dot-6"></label>
</li>
</ul>
    </div>
</div>
</div>
        </div>
        
    )
}
