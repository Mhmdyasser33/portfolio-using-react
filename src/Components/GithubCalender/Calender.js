import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import './Calender.css'
const Calender = () => {

  return (
    <div className='calender' data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500">
    <GitHubCalendar
    username="Mhmdyasser33"
    blockSize={12}
    blockMargin={5}
    fontSize={18}
    />
    </div>
  )
}

export default Calender