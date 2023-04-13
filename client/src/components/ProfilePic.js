import React from 'react'
import profilePic from '../assets/profile.jpg';
import '../styles/ProfilePic.css'


const ProfilePic = () => {
  return (
    <div className='profile-pic-container'>
      <img
        src={profilePic}
        alt='profile-pic'
        style={{width: '150px', height: '150px', borderRadius: '50%'}} 
      />
    </div>
  )
}

export default ProfilePic
