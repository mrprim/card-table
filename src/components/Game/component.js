import React from 'react'
import './index.scss'
import DrawPile from '../DrawPile'
import DiscardPile from '../DiscardPile'
import HandPile from '../HandPile'
import DeckView from '../DeckView'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

const Game = ({ mode, toggleDeckView }) =>
  <DndProvider backend={Backend}>
    <div>
      <button onClick={toggleDeckView}>Deck</button>
      {getMode(mode)}
    </div>
  </DndProvider>

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
