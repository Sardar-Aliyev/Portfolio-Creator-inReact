import React, { useState } from 'react'

const FaqContent = ({ header, body, down }) => {

  const [open, setopen] = useState(false)


  const AccordionPlay = () => {
    setopen(!open);
  }

  return (
    <div className='col-12 col-md-12 col-lg-6'>
      <div className={`accordion ${open ? 'active' : ' '}` }>
        <div className="up" onClick={AccordionPlay}>
          <h1>{header}</h1>
          <img src={down} alt="" className='img-fluid' />
        </div>
      
        <div className="down" style={{ maxHeight: open ? '100px' : '0', transition: 'max-height .8s ease-in-out', overflowy: 'hidden' }}>
          <p>{body}</p>
        </div>
       
      </div>
      <div className="longline"></div>
    </div>
  )
}

export default FaqContent