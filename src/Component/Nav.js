import React, { useEffect, useState } from 'react'
import "../Styles/Nav.css"
import netflix from '../Assets/netflix.png'
import { useNavigate } from "react-router-dom"



export default function Nav() {
    
    const [show , handleShow]= useState(false);
    const navigate =useNavigate();
    
    // const handleNavigate =()=>{
    //     navigate("/Profile")
    // }
     
    const transitionNavBar= ()=>{
        if(window.scrollY>100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar)
        return()=>window.removeEventListener("scroll", transitionNavBar);
    },[])


  return (
    <div 
   
    className={`nav  ${show && "nav_black"}`}>
        <div className="nav_contents">
       <img
        onClick={()=>navigate("/")} 
        className='nav_logo' 
       src={netflix} alt="netflix_logo" />

       <img
       onClick={()=>navigate("/Profile")}
       className='nav_avatar'
       src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user_logo" />
       

       </div> 
    </div>
  )
}
