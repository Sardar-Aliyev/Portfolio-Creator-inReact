import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../assets/css/Experience.css'
import edu from '../assets/images/education.png'
import work from '../assets/images/work.png'
import ExperienceContent from './ExperienceContent'

const Experience = () => {

  const [info, setinfo] = useState("");

  useEffect(() => {
    axios.get('src/experience.json')
      .then(i => setinfo(i.data))
  }, [])
  return (
    <div className='container py-3'>
      
      <div className="row">
  
        {
          info && info.map((i, index) => (
            <ExperienceContent key={index} edu={i.pic}   header={i.title} uni={i.body} picture={i.vector_img} time={i.date} sekil={i.image} />
          ))
        }

      </div>
    </div >

  )
}

export default Experience