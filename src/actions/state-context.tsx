import { createContext, useState } from 'react';
import cardsClient from '../utils/cards-client';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [cards, setCards] = useState([]);
	const [error, setError] = useState(null);
	// eslint-disable-next-line no-unused-vars
	const [formState, setFormState] = useState({ isOpen: false, cardData: null });

	function openForm(cardData) {
		setFormState({ isOpen: true, cardData: cardData });
	}
	function closeForm() {
		setFormState({ isOpen: false, cardData: null });
	}
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
	function saveCard(data) {
		setLoading(true);
		if (cards.find((card) => card.id === data.id)) {
			setCards(cards.map((card) => (card.id === data.id ? data : card)));
		} else {
			const moarCards = [...cards, data];
			setCards(moarCards);
			cardsClient.saveCardsToStorage(moarCards);
		}
		closeForm();
		setLoading(false);
	}
	function removeCard(data) {
		setLoading(true);
		setCards(cards.filter((card) => card.id !== data.id));
		setLoading(false);
	}
	return (
		<StateContext.Provider
			value={{
				loading,
				cards,
				loadCards,
				saveCard,
				removeCard,
				dismissError,
				openForm,
				closeForm,
				formState,
				error,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export default StateContext;
