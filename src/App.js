import React, { useEffect } from 'react';

import './App.css';
import Homescreen from './Screens/Homescreen';
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/ProfileScreen';
import { Route, Routes} from "react-router-dom"
import { auth } from '../src/firebase';
import {useDispatch , useSelector} from "react-redux"
import { login, logout, selectUser } from './features/counter/userSlice';
import { useNavigate } from "react-router-dom"




function App() {
  // const user={
  //   name:"vivek"
  // }
  const navigate =useNavigate();
  const user= useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(()=>{
    const usSubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        
        dispatch(
          login ({
            uid:userAuth.uid , 
            email: userAuth.email}));

      }else{
        //logged out
        dispatch(logout(), navigate("/") );
      
    
          }
    })
    return usSubscribe;
  },[dispatch])

  return (
    <div className="App">

      
      <Routes>
        {!user ?(
          <Route exact path='/' element={<LoginScreen/>}/>
        ):
        <Route exact path="/" element={<Homescreen/>}/>
       }
        <Route exact path="/Profile" element={<ProfileScreen/>}/> 
      </Routes>
       
      
 
    </div>
  );
}

export default App;
