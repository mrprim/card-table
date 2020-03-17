import React from 'react'
import { useSelector } from 'react-redux'
import getPileCards from '../../selectors/getPileCards'
import * as piles from '../../constants/piles'
import Pile from '../Pile'
import Card from '../Card'
import './index.scss'
import useDropCard from '../../hooks/useDropCard'
import * as dragTypes from '../../constants/dragTypes'

const HandPile = ({ cards, dropRef, isOver }) =>
  <Pile className='hand' dropRef={dropRef} isOver={isOver} title={`Drawn [${cards.length}]`}>
    {cards.map(c => <Card key={c.code} {...c} pile={piles.HAND} />)}
  </Pile>

export default () => {
  const pile = piles.HAND
  const cards = useSelector(getPileCards(pile))
  const { dropRef, isOver } = useDropCard({ accept: dragTypes.DRAW, pile })

  return <HandPile isOver={isOver} dropRef={dropRef} cards={cards} />
}
