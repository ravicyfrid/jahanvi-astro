import React from 'react'

interface buttonProps {
	name?: string,
	className?: string
	type?: 'button' | 'submit' | undefined
	loading?: boolean,
	label?: string,
	iconPosition?: string
	children?: React.ReactNode
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onClick?: any
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	disabled?: boolean | any
}

// eslint-disable-next-line max-len
const Button = ({ type = 'submit', disabled, className = 'primary', name = '', iconPosition = 'right', loading = false, onClick, ...props }: buttonProps) => {
	return (
		<>
			<button
				name={name}
				type={type}
				className={`btn btn-${className} ${loading ? 'btn-loading' : ''} `}
				disabled={disabled ? disabled : loading}
				onClick={onClick}
				{...props}>
				{props?.label}
				<span className="btn-text">
					{iconPosition === 'right' && name}
					{/* {children} */}
					{iconPosition === 'left' && name}
				</span>
				
			</button>
		</>
	)
}
export default Button