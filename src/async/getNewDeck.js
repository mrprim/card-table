export default async () => {
  const response = await window.fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  return response.json()
}
