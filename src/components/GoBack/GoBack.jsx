import React from 'react'
import './GoBack.css'
export const GoBack = ({ returnName }) => {
  return (
    <div className="go-back">
      <i className='bx bx-left-arrow-alt go-back__icon'></i>
      <h3 className="go-back__title">{returnName}</h3>
    </div>
  )
}
