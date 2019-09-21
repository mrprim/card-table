import React from 'react'
import './index.scss'
import * as piles from '../../constants/piles'
import Card from '../Card'

const HandPile = ({ cards }) =>
<div>
Drawn Cards:
<div>
  {cards.map(c => <Card key={c.code} {...c} pile={piles.HAND} />)}
</div>
</div>

export default HandPile
