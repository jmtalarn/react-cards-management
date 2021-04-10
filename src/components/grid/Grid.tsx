import React from 'react';
import { Card as ICard } from '../../@types/Card';
import Card from '../card/Card';

export interface GridProps {
	items?: ICard[];
}

const Grid = ({ items }: GridProps) => (
	<div
		data-testid="grid"
		style={{ display: 'grid', gridTemplateColumns: 'repeat( auto-fill, minmax(20rem, 1fr))', gap: '1rem' }}
	>
		{items &&
			items?.map((item, index) => {
				return <Card key={`item_index_${index}`} {...item} />;
			})}
	</div>
);

export default Grid;
