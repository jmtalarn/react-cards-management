import React from 'react';
import { Card as ICard } from '../../@types/Card';
import defaultImg from './default.png';

const Card: React.FC<ICard> = ({ id, title, description, image }) => {
	return (
		<article
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				border: '1px solid darkgray',
				borderRadius: '10px',
				margin: '.5rem',
				boxShadow: '5px 5px 10px darkgray',
			}}
			key={id}
		>
			<div
				data-test-id="card-image"
				style={{
					backgroundImage: `url(${image}), url(${defaultImg})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					borderRadius: '10px 10px 0 0',
					minHeight: '6rem',
				}}
			></div>
			<div style={{ padding: '1rem' }}>
				<h3 data-test-id="card-title">{title}</h3>
				<p data-test-id="card-description">{description}</p>
			</div>
		</article>
	);
};

export default Card;
