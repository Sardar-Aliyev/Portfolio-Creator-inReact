import React from 'react'
import Button from './Button'
import Man from '../assets/images/man.svg'
import { FaArrowRight } from "react-icons/fa";

import { ReactTyped } from "react-typed";
import '../assets/css/Introduction.css'

const Introduction = () => {
  return (
    <div className='introduction container py-4'>
      <div className="row">
        
          <div className="left-side col-12 col-md-6 ">


            <ReactTyped
              strings={[
                "I design products",
                "Coding every day",
                "Search for brands",
              ]}
              typeSpeed={70}
              backSpeed={90}

              loop
            >
              <span></span>
            </ReactTyped>

            <h2>that delight and inspire people.</h2>
            <p>Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups.</p>
            <Button text='Book a call' nameOfclass='book-btn' />
            <Button text='Download CV' nameOfclass='download-btn ' /><FaArrowRight />
          </div>
          <div className="right-side col-12 col-md-6">
            <img src={Man} alt="" className='img-fluid'/>
          </div>
        </div>
      </div>
    
  )
}

export default Introduction