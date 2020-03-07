import React from 'react'
import './index.scss'

const DiscardPile = ({ count, reshuffleClick }) =>
  <div className='discardPile'>
    <div className='title'>Discard [{count}]</div>
    {
      count
      ? <img className='card' onClick={reshuffleClick} src='./cardBack.png' alt='discard pile'/>
      : <img className='card' src='./noCard.png' alt='discard pile'/>
    }
  </div>

export default DiscardPile
