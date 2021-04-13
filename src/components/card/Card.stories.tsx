import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Card as CardType } from '../../@types/Card';
import Card from './Card';

const card: CardType = {
	id: 'aa3e03dc-eb8b-4707-b3e3-9421344d5cb1',
	title: 'Demo card',
	description:
		'Cupidatat fugiat officia laboris nisi culpa cillum esse non occaecat proident culpa. Eiusmod veniam consectetur officia enim laboris sint. Nostrud consectetur non officia adipisicing veniam consectetur cupidatat fugiat et duis magna voluptate. Do esse non esse aliqua deserunt ex eu cillum nostrud voluptate pariatur. Nisi ea mollit ipsum ea. Occaecat voluptate sunt est fugiat excepteur excepteur. Veniam esse veniam eiusmod amet aliquip elit.',

	image: 'https://i.pinimg.com/originals/fd/c8/04/fdc804355709547880ca637ef00bc834.jpg',
};

export default {
	title: 'Components/Card',
	component: Card,
} as Meta;

const Template: Story = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
	card,
};

export const CardNoImage = Template.bind({});
// eslint-disable-next-line no-unused-vars
const { image, ...rest } = card;
CardNoImage.args = {
	rest,
};

export const EmptyCard = Template.bind({});
