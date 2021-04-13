import React from 'react';
import { Card as ICard } from '../../@types/Card';
import defaultImg from './default.png';
import styled from 'styled-components';
import Button from '../button/Button';

const Article = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid darkgray;
	border-radius: 10px;
	margin: 0.5rem;
	boxshadow: 5px 5px 10px darkgray;
	position: relative;
	.actions {
		opacity: 0;
		transition: opacity 200ms ease-in;
	}
	:hover .actions {
		opacity: 1;
	}
`;

const Actions = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 8rem;
	position: absolute;
	right: 1rem;
	bottom: 0;
	margin: 0.5rem;
	gap: 0.5rem;
`;

const CardImage = styled.div`
	background-image: url(${(props) => props.image}), url(${defaultImg});
	background-size: cover;
	background-position: center;
	border-radius: 10px 10px 0 0;
	min-height: 6rem;
`;

interface CardProps {
	card: ICard;
	onDelete?: Function;
	onEdit?: Function;
}

const Card: React.FC<CardProps> = ({ card, onDelete, onEdit }) => {
	const { id, title, description, image } = card;
	return (
		<Article key={id}>
			<CardImage data-test-id="card-image" image={image} />
			<div style={{ padding: '1rem' }}>
				<h3 data-test-id="card-title">{title}</h3>
				<p data-test-id="card-description">{description}</p>
			</div>
			<Actions className="actions">
				<Button
					type="delete"
					onClick={() => {
						onDelete(card);
					}}
				/>
				<Button
					type="edit"
					onClick={() => {
						onEdit(card);
					}}
				/>
			</Actions>
		</Article>
	);
};

export default Card;
