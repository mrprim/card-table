export default code => ({
  code,
  image: `https://deckofcardsapi.com/static/img/${code}.png`,
  images: {
    png: `https://deckofcardsapi.com/static/img/${code}.png`,
    svg: `https://deckofcardsapi.com/static/img/${code}.svg`
  },
  suit: getSuitFromCode(code),
  value: getValueFromCode(code)
})

const getSuitFromCode = code => {
  const suit = code.charAt(1)

  switch (suit) {
    case 'H': return 'HEARTS'
    case 'S': return 'SPADES'
    case 'C': return 'CLUBS'
    case 'D': return 'DIAMONDS'
    default: return suit
  }
}

const getValueFromCode = code => {
  const value = code.charAt(0)
  switch (value) {
    case 'A': return 'ACE'
    case 'K': return 'KING'
    case 'Q': return 'QUEEN'
    case 'J': return 'JACK'
    case '0': return '10'
    default: return value
  }
}
