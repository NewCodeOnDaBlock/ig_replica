import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faPlayCircle, faSave, faTag } from '@fortawesome/free-solid-svg-icons'

const TabSection = () => {
  return (
    <div className='tab-section-container'>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '70px'}}>
        <FontAwesomeIcon icon={ faCalendar } />
        <p><b>Posts</b></p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '70px'}}>
        <FontAwesomeIcon icon={ faPlayCircle } />
        <p><b>Reels</b></p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '70px'}}>
        <FontAwesomeIcon icon={ faSave } />
        <p><b>Saved</b></p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '70px'}}>
        <FontAwesomeIcon icon={ faTag } />
        <p><b>Tagged</b></p>
      </div>
    </div>
  )
}

export default TabSection
