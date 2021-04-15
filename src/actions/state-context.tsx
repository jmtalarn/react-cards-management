import { createContext, useState } from 'react';
import cardsClient from '../utils/cards-client';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [cards, setCards] = useState([]);
	const [order, setOrder] = useState('ASC');
	const [error, setError] = useState(null);
	// eslint-disable-next-line no-unused-vars
	const [formState, setFormState] = useState({ isOpen: false, cardData: null });

	function sortCards(cards) {
		return sortByOrderCards(cards, order);
	}
	function sortByOrderCards(cards, order) {
		return cards.sort((a, b) => {
			if (order === 'DESC') {
				return b.title > a.title ? 1 : -1;
			} else {
				return b.title < a.title ? 1 : -1;
			}
		});
	}

	function invertOrder() {
		if (order === 'ASC') {
			setOrder('DESC');
			const orderedCards = sortByOrderCards(cards, 'DESC');
			setCards(orderedCards);
		} else {
			setOrder('ASC');
			const orderedCards = sortByOrderCards(cards, 'ASC');
			setCards(orderedCards);
		}
	}
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
		const orderedCards = sortCards(cardsClient.loadStoredCards());
		setCards(orderedCards);
		setLoading(false);
	}
	function saveCard(data) {
		setLoading(true);
		if (cards.find((card) => card.id === data.id)) {
			const orderedCards = sortCards(cards.map((card) => (card.id === data.id ? data : card)));
			setCards(orderedCards);
		} else {
			const orderedCards = sortCards([...cards, data]);
			setCards(orderedCards);
			cardsClient.saveCardsToStorage(moarCards);
		}
		closeForm();
		setLoading(false);
	}
	function removeCard(data) {
		setLoading(true);
		const orderedCards = sortCards(cards.filter((card) => card.id !== data.id));
		setCards(orderedCards);
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
				error,
				openForm,
				closeForm,
				formState,
				invertOrder,
				order,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export default StateContext;
