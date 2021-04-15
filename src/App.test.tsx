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
	const element = getByText(/➕/i);
	expect(element).toBeInTheDocument();

	expect(queryByTestId('content')).toBeInTheDocument();
});
