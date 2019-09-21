export default pileName => store => {
  const pile = store.piles[pileName] || {}
  return pile.cards || []
}
