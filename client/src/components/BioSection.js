import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faToolbox } from '@fortawesome/free-solid-svg-icons'
import StorySection from './StorySection'

const BioSection = () => {
  return (
    <div className='bio-section-container'>
      <div className='handle-section'>
        <p style={{fontSize:'20px'}}>bruceleean</p>
        <FontAwesomeIcon icon={faCheckCircle} />
        <button
          title='Edit Profile'
          style={{width: '100px', height: '25px', color: 'black'}}
        >
        Edit Profile
        </button>
        <button
          title='Edit Profile'
          style={{width: '100px', height: '25px', color: 'black'}}
        >
        Ad Tools
        </button>
        <FontAwesomeIcon icon={faToolbox} />
      </div>
      <div className='stat-section'>
          <p><b>408</b> posts</p>
          <p><b>20.5k</b> followers</p>
          <p><b>1,207 </b> following</p>
      </div>
      <div className='about-me-section'>
        <p>Raden Mantuano</p>
        <p style={{color: '#6e6e6e'}}>Fitness Trainer</p>
        <p>✨ I help busy professionals get into the best shape of their lives ✨Become a #LeeanLegend TODAY👇🏼</p>
        <a href="linktr.ee/bruceleean" style={{color: '#6e6e6e', decoration: 'none'}}>
        <b>linktr.ee/bruceleean</b>
        </a>
      </div>
      <StorySection />
    </div>
  )
}

export default BioSection
