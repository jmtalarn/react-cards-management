import React, { useRef, useState } from 'react';
import { Card as CardType } from '../../@types/Card';
import { generateUUID } from '../../utils';
interface FormProps {
	card?: CardType;
	onSubmit: Function;
	isOpen: boolean;
}

const Card: React.FC<FormProps> = ({ card, onSubmit, isOpen }) => {
	const formTitle = card ? 'Editar targeta' : 'Nueva targeta';
	const formActionText = card ? 'Guardar cambios' : 'Añadir';
	const { id = generateUUID(), title: titleValue = '', description: descriptionValue = '', image: imageValue = '' } =
		card || {};

	const [title, setTitle] = useState(titleValue);
	const [description, setDescription] = useState(descriptionValue);
	const [image, setImage] = useState(imageValue);

	const formRef = useRef(null);
	const action = (event) => {
		event.preventDefault();
		const form = { id };

		formRef.current.querySelectorAll('.input-field').forEach((element) => {
			form[element.name] = element.value.trim();
		});
		onSubmit(form);
	};
	const fieldStyle = {
		display: 'flex',
		flexDirection: 'column',
		gap: '.5rem',
		margin: '1rem',
		fontWeight: 'bold',
	};

	const inputStyle = {
		border: 'none',
		borderBottom: '2px solid darkgray',
		fontSize: '1rem',
		lineHeight: '1.5rem',
		fontWeight: 'light',
		maxWidth: '100%',
	};

	const buttonStyle = {
		width: '10rem',
		fontSize: '1rem',
		padding: '1rem',
		border: '2px solid var(--primaryColor)',
		backgroundColor: 'var(--primaryColor)',
		color: 'var(--textColor)',
		margin: '2rem auto',
		borderRadius: '4px',
		boxShadow: '2px 2px 5px darkgray',
	};
	return (
		<dialog
			open={isOpen}
			style={{
				border: 'none',
				position: 'absolute',
				width: '100%',
				height: '100%',
				top: '0',
				left: '0',
				backgroundColor: '#c0c0c055',
			}}
		>
			<form
				method="dialog"
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					border: '1px solid darkgray',
					borderRadius: '10px',
					margin: '1rem auto',
					padding: '1rem',
					boxShadow: '10px 10px 20px black',
					maxWidth: '800px',
					backgroundColor: 'white',
				}}
				ref={formRef}
			>
				<h1 style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>{formTitle}</h1>
				<input className="input-field" type="hidden" name="id" value={id} />
				<label style={fieldStyle}>
					Title
					<input
						className="input-field"
						style={inputStyle}
						type="text"
						name="title"
						value={title}
						onChange={(evt) => {
							setTitle(evt.target.value);
						}}
					></input>
				</label>
				<label style={fieldStyle}>
					Description
					<textarea
						className="input-field"
						style={inputStyle}
						name="description"
						value={description}
						onChange={(evt) => {
							setDescription(evt.target.value);
						}}
					></textarea>
				</label>
				<label style={fieldStyle}>
					Image
					<input
						className="input-field"
						style={inputStyle}
						type="text"
						name="image"
						value={image}
						onChange={(evt) => {
							setImage(evt.target.value);
						}}
					></input>
				</label>
				<button onClick={action} style={buttonStyle}>
					{formActionText}
				</button>
			</form>
		</dialog>
	);
};

export default Card;
