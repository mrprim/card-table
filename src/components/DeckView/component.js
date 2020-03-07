import React from 'react'
import './index.scss'
import Card from '../Card'

const DeckView = ({ cards }) =>
  <div className='deckView'>
    {cards.map(c => <Card key={c.code} {...c} />)}
  </div>

export default DeckView
