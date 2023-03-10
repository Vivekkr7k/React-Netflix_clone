import React from 'react'
import "../Styles/ProfileScreen.css"
import Nav from '../Component/Nav'
import { selectUser } from '../features/counter/userSlice'
import { useSelector  } from 'react-redux'
import { auth } from '../firebase'
function ProfileScreen() {

  const user =useSelector(selectUser);
  return (
    <div className='profileScreen'>
     <Nav/>
     <div className="profileScreen_body">
      <h1>Edit Profile</h1>
       <div className="profileScreen_info">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar_logo" />
        <div className="profileScreen_details">
              <h2>{user.email}</h2>
              <div className="profileScreen_plans">
                <h3>Plans</h3>
                <div className="plansScreen_plan">
                 
                    <h4>Premium</h4>
                    <h6>4k + HDR</h6>
                   
                    <h4>Basic</h4>
                    <h6>720p</h6>
                   
                    <h4>Standard</h4>
                    <h6>480p</h6>

                    <button>submit</button>
                   

                 
                </div>
                <button onClick={()=> auth.signOut()} className="profileScreen_signOut">Sign Out</button> 
              </div>
        </div>
       </div>
     </div>
    </div>
  )
}

export default ProfileScreen
