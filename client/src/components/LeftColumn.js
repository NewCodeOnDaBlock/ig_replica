import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faSearch,
  faEarth,
  faPlayCircle,
  faMessage,
  faBell,
  faPlusSquare
} from '@fortawesome/free-solid-svg-icons'
import ProfilePic from '../assets/profile.jpg'

const LeftColumn = () => {
  return (
    <div className='left-column-container' style={{marginLeft: '20px'}}>
      <p style={{marginLeft: '10px'}}><em><b>Instagram</b></em></p>
      <div>
        <ul>
          <li className='left-icons-box'>
            <FontAwesomeIcon icon={ faHome }/>
            <p style={{marginLeft: '5px'}}>Home</p>
          </li>
          <li className='left-icons-box'>
            <FontAwesomeIcon icon={ faSearch }/>
            <p style={{marginLeft: '5px'}}>Search</p>
          </li>
          <li className='left-icons-box'>
            <FontAwesomeIcon icon={ faEarth }/>
            <p style={{marginLeft: '5px'}}>Explore</p>
          </li>
          <li className='left-icons-box'>
            <FontAwesomeIcon icon={ faPlayCircle }/>
            <p style={{marginLeft: '5px'}}>Reels</p>
          </li>
          <li className='left-icons-box'>
            <FontAwesomeIcon icon={  faMessage }/>
            <p style={{marginLeft: '5px'}}>Messages</p>
          </li>
          <li className='left-icons-box'>
            <FontAwesomeIcon icon={ faBell }/>
            <p style={{marginLeft: '5px'}}>Notifications</p>
          </li>
          <li className='left-icons-box'>
            <FontAwesomeIcon icon={ faPlusSquare }/>
            <p style={{marginLeft: '5px'}}>Create</p>
          </li>
          <li className='profile-box'>
            <div className='profile-pic-hugger'>
              <img
                src={ProfilePic} 
                alt='pic' 
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%'
              }}
              />
            </div>
            <b>Profile</b>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LeftColumn
