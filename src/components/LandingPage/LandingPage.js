import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return ( 
        <div>

        <div className="flex justify-between">
            
            <div className="more ml-40">
             <h1 className="text-6xl font-bold tracking-wider mt-24 text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-600">WELCOME TO <br></br>AUTO-GREEN</h1>
             <p className="explain text-lg leading-relaxed mt-8 tracking-wide">AUTO-GREEN is an automated greenhouse that <br></br>  involves the automatic monitoring and controlling of <br></br> climatic  parameters which directly or indirectly govern <br></br> the plant growth and increase the productivity.</p>
            <p className="explain text-lg leading-relaxed tracking-wide">Enjoy watching your plant grow healthy and productive <br></br> in the simplest way by interacting with our application.</p>
            <div className="flex flex-row nav-links mt-8">
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
            <ul class="slides">
    <input type="radio" name="radio-btn" id="img-1" checked />
    <li class="slide-container">
		<div class="slide">
			<img src="https://images.unsplash.com/photo-1534430449256-b8a0d6d86a41?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzAyfHxncmVlbmhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </div>
		<div class="nav">
			<label for="img-6" class="prev">&#x2039;</label>
			<label for="img-2" class="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-2" />
    <li class="slide-container">
        <div class="slide">
          <img src="https://images.unsplash.com/photo-1566208541413-b8575e37587d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTgyfHxncmVlbmhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </div>
		<div class="nav">
			<label for="img-1" class="prev">&#x2039;</label>
			<label for="img-3" class="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-6" />
    <li class="slide-container">
        <div class="slide">
          <img src="https://images.unsplash.com/photo-1533322069166-aa4d608459df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM3fHxncmVlbmhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
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
    </li>
</ul>
            </div>
        </div>
        </div>
    )
}

export default LandingPage
