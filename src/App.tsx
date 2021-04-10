import React from 'react';
import { Header, Content, Footer, Loader, ErrorMessage } from './components';
import { StateProvider } from './actions/state-context';

function AppWrapped() {
	return (
		<StateProvider>
			<App />
		</StateProvider>
	);
}

function App() {
	return (
		<main style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '100vh' }}>
			<ErrorMessage />
			<Header />

			<Content></Content>
			<Footer />

			<Loader />
		</main>
	);
}

export default AppWrapped;
