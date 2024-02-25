import React from 'react'


const Company = ({logos}) => {
  return (
    <div className='logos d-flex justify-content-center '>
        <img src={logos} alt="" />
    </div>

  )
}

export default Company