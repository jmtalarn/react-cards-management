import React, { useContext, useEffect } from 'react';
import { Content, Button, Grid, Loader, ErrorMessage, Main, Form, Card } from './components';
import StateContext, { StateProvider } from './actions/state-context';
import styled from 'styled-components';

const NewCardButton = styled(Button)`
	transform: scale(1.5);
	position: absolute;
	right: 2rem;
	bottom: 2rem;
`;

function AppWrapped() {
	return (
		<StateProvider>
			<App />
		</StateProvider>
	);
}

function App() {
	const { cards, saveCard, removeCard, loadCards, loading, openForm, closeForm, formState } = useContext(
		StateContext,
	);

	useEffect(() => {
		loadCards();
	}, []);

	return (
		<Main>
			<ErrorMessage />
			<Content>
				{cards.length > 0 && (
					<Grid>
						{cards.map((card) => (
							<Card
								key={card.id}
								card={card}
								onDelete={() => {
									removeCard(card);
								}}
								onEdit={() => {
									openForm(card);
								}}
							/>
						))}
					</Grid>
				)}
				{loading && <Loader show />}
				<NewCardButton
					type="add"
					onClick={() => {
						openForm();
					}}
				/>
			</Content>

			{formState.isOpen && (
				<Form
					card={formState.cardData}
					isOpen={formState.isOpen}
					onSubmit={saveCard}
					onClickOutside={closeForm}
				/>
			)}
		</Main>
	);
}

export default AppWrapped;
