import React from 'react'
import './index.scss'
import * as piles from '../../constants/piles'
import Card from '../Card'

const HandPile = ({ cards }) =>
  <div className='hand'>
    <div className='title'>Drawn [{cards.length}]</div>
    <div className='cards'>
      {cards.map(c => <Card key={c.code} {...c} pile={piles.HAND} />)}
    </div>
  </div>

export default HandPile
