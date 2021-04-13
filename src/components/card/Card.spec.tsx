import React from 'react';
import { ApiProvider } from '../../actions/api-context';
import { render } from '@testing-library/react';
import notFoundImg from './default.png';
import Card from './Card';
import { Card as CardType } from '../../@types/Card.ts';

const card: CardType = {
	id: 'aa3e03dc-eb8b-4707-b3e3-9421344d5cb1',
	title: 'Demo card',
	description:
		'Cupidatat fugiat officia laboris nisi culpa cillum esse non occaecat proident culpa. Eiusmod veniam consectetur officia enim laboris sint. Nostrud consectetur non officia adipisicing veniam consectetur cupidatat fugiat et duis magna voluptate. Do esse non esse aliqua deserunt ex eu cillum nostrud voluptate pariatur. Nisi ea mollit ipsum ea. Occaecat voluptate sunt est fugiat excepteur excepteur. Veniam esse veniam eiusmod amet aliquip elit.',

	image: 'https://i.pinimg.com/originals/fd/c8/04/fdc804355709547880ca637ef00bc834.jpg',
};

test('renders the Card component', () => {
	const { queryByTestId } = render(
		<ApiProvider>
			<Card card={card} />
		</ApiProvider>,
	);

	expect(queryByTestId('card-image')).toBeInTheDocument();
	expect(queryByTestId('card-image')).toHaveStyle(`background-image: url(${card.image}), url(${notFoundImg})`);
	expect(queryByTestId('card-title')).toBeInTheDocument();
	expect(queryByTestId('card-title')).toHaveTextContent(card.name);
	expect(queryByTestId('card-description')).toBeInTheDocument();
	expect(queryByTestId('card-description')).toHaveTextContent(card.description);
});

test('renders nothing without data', () => {
	const { queryByTestId } = render(
		<ApiProvider>
			<Card />
		</ApiProvider>,
	);

	expect(queryByTestId('card-image')).toBeInTheDocument();
	expect(queryByTestId('card-title')).toBeInTheDocument();
	expect(queryByTestId('card-title')).not.toHaveTextContent();
	expect(queryByTestId('card-description')).toBeInTheDocument();
	expect(queryByTestId('card-description')).not.toHaveTextContent();
});
