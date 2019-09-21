import React from 'react'
import './index.scss'

const DrawPile = ({ count, drawClick }) =>
  <div>
    Draw Pile: {count}
    { count ? <button onClick={drawClick}>Draw</button> : null }
  </div>

export default DrawPile
