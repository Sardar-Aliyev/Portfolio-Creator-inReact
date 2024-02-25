import React, { useEffect, useState } from 'react'
import ServiceContent from './ServiceContent'
import axios from 'axios'
import '../assets/css/Services.css'



const Services = () => {

  const [data, setdata] = useState([])

  useEffect(() => {
    axios.get('src/services.json')
      .then(res => setdata(res.data))
  }, [])
  


  return (
    <div className='services container '>
      <h5>Services</h5>
      <h1>Design that solves problems,<br /> one product at a time.</h1>
      <div className="row ">

        {
          data && data.map((service, index) => (
            <ServiceContent
              key={index}
              servicePicture={service.service_img} serviceTitle={service.service_title}
              serviceText={service.service_text} serviceInfo1={service.service_info1}
              serviceInfo2={service.service_info2} serviceInfo3={service.service_info3}
            />
          ))

        }
      </div>
    </div>
  )
}

export default Services