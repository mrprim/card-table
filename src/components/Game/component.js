import React from 'react'
import './index.scss'
import DrawPile from '../DrawPile'
import DiscardPile from '../DiscardPile'
import HandPile from '../HandPile'
import DeckView from '../DeckView'

const Game = ({ mode, toggleDeckView }) =>
  <div>
    <button onClick={toggleDeckView}>Deck</button>
    {getMode(mode)}
  </div>

const getMode = mode => {
  switch (mode) {
    case 'manageDeck': return <ManageDeckMode />
    default: return <GameMode />
  }
}

const GameMode = () =>
  <>
    <div style={{ textAlign: 'center' }}>
      <DrawPile />
      <DiscardPile />
    </div>
    <HandPile />
  </>

const ManageDeckMode = () =>
  <DeckView />

export default Game
