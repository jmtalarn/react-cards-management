import React from 'react';

export interface ButtonProps {
	primary?: boolean;

	type?: 'new' | 'edit' | 'delete';

	onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({ primary = false, type, style, ...props }: ButtonProps) => {
	const color = primary ? 'var(--primaryColor)' : 'var(--secondaryColor)';

	const buttonStyle = {
		color: 'var(--textColor)',
		display: 'inline-block',
		cursor: 'pointer',
		fontSize: '1.5rem',
		backgroundColor: color,
		padding: '0.25rem 0',
		border: `2px solid ${color}`,
		width: '3rem',
		height: '3rem',
		borderRadius: '50%',
		...style,
		boxShadow: '2px 2px 5px 1px dimgray',
	};
	let content = '';
	switch (type) {
		case 'add':
			content = (
				<span
					role="img"
					aria-label="The plus sign indicating you can add a new card"
					style={{ top: '0.15rem', position: 'relative' }}
				>
					➕
				</span>
			);
			break;
		case 'edit':
			content = (
				<span
					role="img"
					aria-label="A pencil indicating you can edit the card"
					style={{ top: '0.15rem', position: 'relative' }}
				>
					✏️
				</span>
			);
			break;
		case 'delete':
			content = (
				<span
					role="img"
					aria-label="A trash bin indicating you can delete the card"
					style={{ top: '0.15rem', position: 'relative' }}
				>
					🗑
				</span>
			);
			break;
	}
	return (
		<button style={buttonStyle} type="button" {...props}>
			{content}
		</button>
	);
};
export default Button;
