
// import React, { useRef, useState } from 'react'
import {auth} from '../firebase';
import "../Styles/SignUpScreen.css"


function SignUpScreen() {
    

   //  const emailRef = useRef(null);
   //  const passwordRef = useRef(null);
   //  const emailRef =  useRef(document.getElementById("email"))
   //  const passwordRef = useRef (document.getElementById("password"));
   //  console.log(emailRef);

   // const [email   , setEmail] = useState();
   // cosnt [pass , setPass] = useState();

    
   // const  emailRef = document.getElementById('email').value;
   // const passwordRef = document.getElementById('password').value;
   

    
    
     const register= (e)=>{
        e.preventDefault();

       const  emailRef = document.getElementById('email').value;
       const passwordRef = document.getElementById('password').value;

        auth.createUserWithEmailAndPassword(
           emailRef,
           passwordRef
        ) 
        .then((authUser)=>{
           console.log(authUser);
        })
        .catch((error) =>{
            alert(error.message);
        });

     }
 
    const signIn =(e)=>{
        e.preventDefault();
        
       const  emailRef = document.getElementById('email').value;
       const passwordRef = document.getElementById('password').value;
      

        auth.signInWithEmailAndPassword(
         emailRef,
         passwordRef
        ).then((authUser)=>{
         console.log(authUser);
        }).catch((error)=>alert(error.message));
    }

  return (
    <div>
      <div className="signupScreen">
         <form >
            <h1>Sign In</h1>
            <input id="email" type="email" placeholder='Email ' />
            <input id="password" type="password" placeholder='Password' />
            <button type='submit' onClick={signIn} > Sign In</button>
         <h4>
            <span className='signupScreen_grey'> New to Netflix? </span>
             <span className='signupScreen_link' onClick={register} >Sign Up now.</span>  
            </h4>
         </form>
      </div>
     
    </div > 
   

  )
}

export default SignUpScreen
