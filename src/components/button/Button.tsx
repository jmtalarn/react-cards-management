import React from 'react';

export interface ButtonProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary?: boolean;

	/**
	 * Optional click handler
	 */
	onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ primary = false, style, ...props }: ButtonProps) => {
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

	return (
		<button style={buttonStyle} type="button" {...props}>
			<span
				role="img"
				aria-label="The plus sign indicating you can add a new card"
				style={{ top: '0.15rem', position: 'relative' }}
			>
				➕
			</span>
		</button>
	);
};
