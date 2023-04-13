import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const StorySection = () => {
  return (
    <div className='story-section-container'>
      <div className='story-box' style={{marginTop: '20px'}}>
        <div className='icon-border'>
          <FontAwesomeIcon icon={faQuestionCircle} size='5x' color='grey'/>
        </div>
        <p style={{marginTop: '10px', fontSize:'10px'}}><b>FEASTS</b></p>
      </div>
      <div className='story-box' style={{marginTop: '20px'}}>
        <div className='icon-border'>
          <FontAwesomeIcon icon={faQuestionCircle} size='5x' color='grey'/>
        </div>
        <p style={{marginTop: '10px', fontSize:'10px'}}><b>WORKOUTS</b></p>
      </div>
      <div className='story-box' style={{marginTop: '20px'}}>
        <div className='icon-border'>
          <FontAwesomeIcon icon={faQuestionCircle} size='5x' color='grey'/>
        </div>
        <p style={{marginTop: '10px', fontSize:'10px'}}><b>QUESTIONS</b></p>
      </div>
      <div className='story-box' style={{marginTop: '20px'}}>
        <div className='icon-border'>
          <FontAwesomeIcon icon={faQuestionCircle} size='5x' color='grey'/>
        </div>
        <p style={{marginTop: '10px', fontSize:'10px'}}><b>PROGRESS</b></p>
      </div>
      <div className='story-box' style={{marginTop: '20px'}}>
        <div className='icon-border'>
          <FontAwesomeIcon icon={faQuestionCircle} size='5x' color='grey'/>
        </div>
        <p style={{marginTop: '10px', fontSize:'10px'}}><b>FAM</b></p>
      </div>
    </div>
  )
}

export default StorySection
