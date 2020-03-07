import React from 'react'
import './index.scss'

const Card = ({ image, suit, value, clickDiscard }) =>
  <div className='card'>
    <img src={image} alt={`${value} of ${suit}`} />

    <div className='discardButton' onClick={clickDiscard}>
      ✖
    </div>
  </div>
export default Card
