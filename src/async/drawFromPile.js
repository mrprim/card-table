export default async (deckId, pileId, count = 1) => {
  const response = await window.fetch(`https://deckofcardsapi.com/api/deck/${deckId}/pile/${pileId}/draw/?count=${count}`)
  return response.json()
}
