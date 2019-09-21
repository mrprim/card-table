import React from 'react'
import { useSelector } from 'react-redux'
import './index.scss'
import Component from './component'
import getPileCards from '../../selectors/getPileCards'
import * as piles from '../../constants/piles'


const HandPile = () => {
  const cards = useSelector(getPileCards(piles.HAND))

  return (
    <Component
      cards={cards}
    />
  )
}
export default HandPile
