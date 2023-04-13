import React from 'react'
import LeftColumn from './LeftColumn'
import ProfilePic from './ProfilePic'
import '../styles/Dashboard.css'
import BioSection from './BioSection'
import TabSection from './TabSection'
import TimeLine from './TimeLine'


const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div>
        <LeftColumn />
      </div>
      <div className='center-container'>
        <div className='center-container-top'>
          <ProfilePic />
          <BioSection />
        </div>
        <span className='divider'></span>
        <TabSection />
        <TimeLine />
      </div>
    </div>
  )
}

export default Dashboard
