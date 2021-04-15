import React, { useRef, useState } from 'react';
import { Card as CardType } from '../../@types/Card';
import { generateUUID } from '../../utils';
import styled, { css } from 'styled-components';

interface FormProps {
	card?: CardType;
	onSubmit: Function;
	onClickOutside: Function;
	isOpen: boolean;
}

const Field = styled.label`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin: 1rem;
	font-weight: bold;
`;

const FormButton = styled.button`
	width: 10rem;
	font-size: 1rem;
	padding: 1rem;
	border: 2px solid var(--primaryColor);
	background-color: var(--primaryColor);
	color: var(--textColor);
	margin: 2rem auto;
	border-radius: 4px;
	box-shadow: 2px 2px 5px darkgray;
`;

const inputCss = css`
	border: none;
	border-bottom: 2px solid darkgray;
	font-size: 1rem;
	line-height: 1.5rem;
	font-weight: light;
	max-width: 100%;
`;

const InputField = styled.input`
	${inputCss}
`;
const TextAreaField = styled.textarea`
	${inputCss}
`;
const Dialog = styled.dialog`
	border: none;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	padding: 0;
	background-color: #00000088;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid darkgray;
	border-radius: 10px;
	margin: 1rem auto;
	padding: 1rem;
	box-shadow: 10px 10px 20px black;
	max-width: 800px;
	background-color: white;
`;

const Card: React.FC<FormProps> = ({ card, onSubmit, onClickOutside, isOpen }) => {
	const formTitle = card ? 'Editar targeta' : 'Nueva targeta';
	const formActionText = card ? 'Guardar cambios' : 'Añadir';
	const { id = generateUUID(), title: titleValue = '', description: descriptionValue = '', image: imageValue = '' } =
		card || {};

	const [title, setTitle] = useState(titleValue);
	const [description, setDescription] = useState(descriptionValue);
	const [image, setImage] = useState(imageValue);

	const dialogRef = useRef(null);
	const formRef = useRef(null);
	const action = (event) => {
		event.preventDefault();
		const form = { id };

		formRef.current.querySelectorAll('.input-field').forEach((element) => {
			form[element.name] = element.value.trim();
		});
		onSubmit(form);
	};

	return (
		<Dialog
			open={isOpen}
			ref={dialogRef}
			onClick={(evt) => {
				// eslint-disable-next-line no-console
				if (evt.target == dialogRef.current) {
					onClickOutside();
				}
			}}
		>
			<Form method="dialog" ref={formRef}>
				<h1 style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>{formTitle}</h1>
				<input className="input-field" type="hidden" name="id" value={id} />
				<Field>
					Title
					<InputField
						className="input-field"
						type="text"
						name="title"
						value={title}
						onChange={(evt) => {
							setTitle(evt.target.value);
						}}
					></InputField>
				</Field>
				<Field>
					Description
					<TextAreaField
						className="input-field"
						name="description"
						value={description}
						onChange={(evt) => {
							setDescription(evt.target.value);
						}}
					></TextAreaField>
				</Field>
				<Field>
					Image
					<InputField
						className="input-field"
						type="text"
						name="image"
						value={image}
						onChange={(evt) => {
							setImage(evt.target.value);
						}}
					></InputField>
				</Field>
				<FormButton onClick={action}>{formActionText}</FormButton>
			</Form>
		</Dialog>
	);
};

export default Card;
