import React from 'react'
import './index.scss'

const DiscardPile = ({ count, reshuffleClick }) =>
  <div>
    Discard Pile: {count}
    { count ? <button onClick={reshuffleClick}>Reshuffle</button> : null}
  </div>

export default DiscardPile
