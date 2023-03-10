import React, { useState } from 'react'

import "../Styles/LoginScreen.css"
import netflix from '../Assets/netflix.png'
import SignUpScreen from './SignUpScreen';

function LoginScreen() {
   const[singIn  , setSingIn] =useState(false);




  return (
    <div className='LoginScreen'>
      <div className="LoginScreenBackground">
         
         <img className='LoginScreen_logo' 
         src={netflix} alt="logo" />
        
         {/* <img className='LoginScreen_back' 
         src="https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png" alt="background_image" /> */}
        
        <button onClick={()=>setSingIn(true)} className='LoginScreen_button' >Sign in</button>

         <div className="LoginScreen_gradient"></div>
       
          <div className="LoginScreen_body">
            {singIn ?(
              <SignUpScreen/>
            ):(
              <>
              <h1>Unlimited films ,TV programmes and more.</h1>
              <h2>Watch anywhere . Cancle at any time</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership</h3>

              <div className="LoginScreen_input">
                <form >
                  <input type="text" placeholder='Email Address' />
                  <button onClick={()=>setSingIn(true)} className='LoginScreen_getStarted'>GET STARTED</button>
                </form>
              </div>
            </>

            ) }
            
          </div>



      </div>

     
      
    </div>
  )
}

export default LoginScreen;
