import React from 'react'
import './index.scss'

const Card = ({ image, suit, value, clickDiscard }) =>
  <div>
    <img src={image} width='60px' alt={`${value} of ${suit}`} />
    <button onClick={clickDiscard}>Discard</button>
  </div>
export default Card
