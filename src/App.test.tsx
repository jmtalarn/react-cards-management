import React from 'react';
import { StateProvider } from './actions/state-context';
import { render } from '@testing-library/react';
import App from './App';

test('renders the whole App', () => {
	const { getByText, queryByTestId } = render(
		<StateProvider>
			<App />
		</StateProvider>,
	);
	const element = getByText(/Phone Catalog/i);
	expect(element).toBeInTheDocument();

	expect(queryByTestId('header')).toBeInTheDocument();
	expect(queryByTestId('main')).toBeInTheDocument();
	expect(queryByTestId('footer')).toBeInTheDocument();
});
