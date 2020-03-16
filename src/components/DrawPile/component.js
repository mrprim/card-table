import React from 'react'
import './index.scss'

const DrawPile = ({ count, dragRef, drawClick }) =>
  <div className='drawPile'>
    <div className='title'>Draw [{count}]</div>
    {
      count
        ? <img className='card' ref={dragRef} onClick={drawClick} src='./cardBack.png' alt='draw pile' />
        : <img className='card' src='./noCard.png' alt='discard pile' />
    }
  </div>

export default DrawPile
