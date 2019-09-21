export default async (deckId, count) => {
  const response = await window.fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`)
  return response.json()
}
