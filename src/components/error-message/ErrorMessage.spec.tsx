import React from 'react';
import { StateProvider } from '../../actions/state-context';
import { render } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

test('renders the error message component', () => {
	const { getByTestId } = render(
		<StateProvider>
			<ErrorMessage error={Error('TEST ERROR')} />
		</StateProvider>,
	);

	expect(getByTestId('error-message')).toHaveTextContent('ERROR:');
});
