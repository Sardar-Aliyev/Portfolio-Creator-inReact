import React from 'react'
import edu from '../assets/images/education.png'
import work from '../assets/images/education.png'
const ExperienceContent = ({ header, time, picture, uni, sekil, edu }) => {
  return (
    <div className='col-12 col-md-12 col-lg-6 '>  
      <div class="content-experience">
        <div class="e-left">
          <div class="images">
            {/* <img src={sekil} alt="" /> */}
            {header === 'SpaceFleet' && <img src={sekil} alt="" />}
            {header === 'Kingdom' && <img src={sekil} alt="" />}
            {header === 'MusicMash' && <img src={sekil} alt="" />}
          </div>
          <div class="uni">
            <h2>{header}</h2>
            <p>{uni}</p>
          </div>
        </div>
      

        <div class="e-right">
          <div class="top-p">
            <img src={picture} alt="" />
          </div>
          <small>{time}</small>
        </div>
      </div>
    </div>






  )
}

export default ExperienceContent