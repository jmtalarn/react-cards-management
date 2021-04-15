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

const SortButton = styled(Button)`
	transform: scale(1.5);
	position: absolute;
	right: 8rem;
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
	const {
		cards,
		saveCard,
		removeCard,
		loadCards,
		loading,
		openForm,
		closeForm,
		formState,
		invertOrder,
		order,
	} = useContext(StateContext);

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
					primary
					type="add"
					onClick={() => {
						openForm();
					}}
				/>
				<SortButton type={order === 'ASC' ? 'asc' : 'desc'} onClick={invertOrder} />
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
