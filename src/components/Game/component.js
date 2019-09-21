import React from 'react'
import './index.scss'
import DrawPile from '../DrawPile'
import DiscardPile from '../DiscardPile'
import HandPile from '../HandPile'

const Game = () =>
  <div>
    <DrawPile/>
    <DiscardPile/>
    <HandPile />
  </div>

export default Game
