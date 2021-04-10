import React from 'react';
import { Story, Meta } from '@storybook/react';

import Grid from './Grid';

export default {
	title: 'Components/Grid',
	component: Grid,
} as Meta;

const Template: Story = (args) => <Grid {...args} />;

export const DefaultGrid = Template.bind({});
DefaultGrid.args = {
	items: [
		{
			id: 'aa3e03dc-eb8b-4707-b3e3-9421344d5cb1',
			title: 'Demo card',
			description:
				'Cupidatat fugiat officia laboris nisi culpa cillum esse non occaecat proident culpa. Eiusmod veniam consectetur officia enim laboris sint. Nostrud consectetur non officia adipisicing veniam consectetur cupidatat fugiat et duis magna voluptate. Do esse non esse aliqua deserunt ex eu cillum nostrud voluptate pariatur. Nisi ea mollit ipsum ea. Occaecat voluptate sunt est fugiat excepteur excepteur. Veniam esse veniam eiusmod amet aliquip elit.',

			image: 'https://i.pinimg.com/originals/fd/c8/04/fdc804355709547880ca637ef00bc834.jpg',
		},
		{
			id: 'fb5ce75c-296c-4560-83ca-4bb2ce5adf13',
			title: 'Demo card II',
			description:
				'Eu commodo occaecat enim exercitation adipisicing culpa ad in ex. Laboris culpa est elit cillum quis exercitation enim ipsum. Aliquip sint magna id proident fugiat consectetur dolor. Aliquip irure nisi nisi aute id. Nulla nisi id ipsum enim amet esse proident. Voluptate aliqua reprehenderit Lorem occaecat. Tempor esse quis non aute nulla in qui cillum magna nulla id irure.',

			image: 'https://i.pinimg.com/originals/e1/a8/32/e1a832b1f4d101fbd6d8a2cdcbcb0f7e.png',
		},
		{
			id: '4efde031-90fb-403f-b69c-e78cfcca4eb0',
			title: 'Demo card III',
			description:
				'Deserunt consequat fugiat deserunt ex labore voluptate mollit irure fugiat. Cupidatat et non qui tempor id sunt ad ad aliquip exercitation duis nisi nisi. Incididunt exercitation irure pariatur exercitation.',

			image: 'https://noescinetodoloquereluce.com/wp-content/uploads/2016/01/batman-superman-header2-1.jpg',
		},
		{
			id: 'c504f26e-619c-4e1f-8522-51b8df7cdf95',
			title: 'Demo card IV',
			description:
				'Incididunt labore est ullamco deserunt laboris ipsum quis amet aliqua id excepteur exercitation duis. Minim cillum elit commodo adipisicing cillum anim excepteur eiusmod cillum sunt pariatur. Aliquip magna non sunt excepteur qui nisi sit ut est. Occaecat reprehenderit veniam adipisicing incididunt tempor sint. Dolor ad qui est laborum in eiusmod dolor occaecat exercitation dolor. Dolore et quis ullamco ullamco enim quis do reprehenderit deserunt ut officia aute irure et.',

			image:
				'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/02/MS_Marvel_header.jpg',
		},
		{
			id: '17d93fb0-f996-4d03-8b41-3113c7649b43',
			title: 'Demo card II',
			description:
				'Anim amet pariatur consequat consequat nulla incididunt ullamco incididunt deserunt. Veniam est pariatur irure voluptate consequat aliquip sit ex eu. Nisi officia velit sint proident aliqua eu velit. Nostrud eu duis aliquip labore elit ex elit.',

			image:
				'https://cdn.shopify.com/s/files/1/2013/2287/collections/2020_JusticeLeague_Collection_Header.jpg?v=1591030352',
		},
	],
};
