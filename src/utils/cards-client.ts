export default {
	loadStoredCards: () => JSON.parse(localStorage.getItem('cards')) || [],
	saveCardsToStorage: (cards) => localStorage.setItem('cards', JSON.stringify(cards)),
};
