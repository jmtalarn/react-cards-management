import React from 'react';
import { Story, Meta } from '@storybook/react';

import Main from './Main';

export default {
	title: 'Components/Main',
	component: Main,
} as Meta;

const Template: Story = (args) => <Main {...args} />;

export const DefaultMain = Template.bind({});
DefaultMain.args = {
	children: (
		<div>
			Aliqua fugiat cillum in excepteur ullamco aliqua. Sunt laboris deserunt veniam mollit velit est. Velit magna
			labore laboris et aliquip eiusmod tempor commodo dolor id reprehenderit aliquip laboris. Mollit minim ut
			aute qui incididunt ullamco est amet.
		</div>
	),
};
