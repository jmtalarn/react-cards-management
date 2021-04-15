import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
	title: 'Components/Button',
	component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const NewPrimary = Template.bind({});
NewPrimary.args = {
	primary: true,
	label: 'Button',
	type: 'new',
};

export const EditPrimary = Template.bind({});
EditPrimary.args = {
	primary: true,
	label: 'Button',
	type: 'edit',
};

export const DeletePrimary = Template.bind({});
DeletePrimary.args = {
	primary: true,
	label: 'Button',
	type: 'delete',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Button',
};
export const AscSecondary = Template.bind({});
AscSecondary.args = {
	label: 'Button',
	type: 'asc',
};
export const DescSecondary = Template.bind({});
DescSecondary.args = {
	label: 'Button',
	type: 'desc',
};
