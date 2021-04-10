import React from 'react';
import { Header, Content, Button, Grid, Footer, Loader, ErrorMessage } from './components';
import StateContext, { StateProvider } from './actions/state-context';

function AppWrapped() {
	return (
		<StateProvider>
			<App />
		</StateProvider>
	);
}

function App() {
	const { cards, loadCards, loading } = useContext(StateContext);

	useEffect(() => {
		loadCards();
	}, []);

	return (
		<main style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '100vh' }}>
			<ErrorMessage />
			<Header />

			<Content>
				{cards.length > 0 && <Grid items={cards} />}
				{loading && <Loader show />}
				<Button />
			</Content>
			<Footer />
		</main>
	);
}

export default AppWrapped;
