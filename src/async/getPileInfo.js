export default async (deckId, pileId) => {
  const response = await window.fetch(`https://deckofcardsapi.com/api/deck/${deckId}/pile/${pileId}/list/`)
  return response.json()
}
