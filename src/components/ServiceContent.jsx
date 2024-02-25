import React from 'react'

const ServiceContent = ({ servicePicture, serviceTitle, serviceText, serviceInfo1, serviceInfo2, serviceInfo3 }) => {
  return (
    <div className='service-content col-12 col-md-6 col-lg-4 '>
      <div className="service">
        <img src={servicePicture} alt="" className='servPic' />
        <h2>{serviceTitle}</h2>
        <p>{serviceText}</p>
        <li>{serviceInfo1}</li>
        <li>{serviceInfo2}</li>
        <li>{serviceInfo3}</li>

      </div>

    </div>

  )
}

export default ServiceContent