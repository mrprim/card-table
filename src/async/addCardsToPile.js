export default async (deckId, pileId, ...cardCodes) => {
  const cardString = cardCodes.join(',')
  const response = await window.fetch(`https://deckofcardsapi.com/api/deck/${deckId}/pile/${pileId}/add/?cards=${cardString}`)
  return response.json()
}
