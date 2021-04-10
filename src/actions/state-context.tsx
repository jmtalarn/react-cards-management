import { createContext, useState } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [cards, setCards] = useState([]);
	const [error, setError] = useState(null);

	function dismissError() {
		// eslint-disable-next-line no-console
		console.log('ERROR DISMISSED');
		setLoading(false);
		setError(null);
	}
	function loadCards() {
		setLoading(true);
		setCards(cardsClient.loadStoredCards());
		setLoading(false);
	}
	function addCard(data) {
		setLoading(true);
		setCards(...cards, data);
		setLoading(false);
	}
	function removeCard(data) {
		setLoading(true);
		setCards(cards.filter((card) => card !== data)); //@TODO: Filter the card we want to delete
		setLoading(false);
	}
	return (
		<StateContext.Provider value={{ loading, cards, loadCards, addCard, removeCard, dismissError, error }}>
			{children}
		</StateContext.Provider>
	);
};

export default StateContext;
