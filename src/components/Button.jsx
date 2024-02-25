import React from 'react'

const Button = ({ text, nameOfclass}) => {
  return (
    <button className={`btn-all  ${nameOfclass}`}>{text}</button>
  )
}

export default Button