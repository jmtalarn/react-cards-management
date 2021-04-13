import React from 'react';
import { render } from '@testing-library/react';
import Main from './Main';

test('renders the Main component with children', () => {
	const { queryByTestId } = render(
		<Main>
			<div data-test-id="main-content">
				Aliqua fugiat cillum in excepteur ullamco aliqua. Sunt laboris deserunt veniam mollit velit est. Velit
				magna labore laboris et aliquip eiusmod tempor commodo dolor id reprehenderit aliquip laboris. Mollit
				minim ut aute qui incididunt ullamco est amet.
			</div>
		</Main>,
	);

	expect(queryByTestId('main-content')).toBeInTheDocument();
});
