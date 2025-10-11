import Image from 'next/image'
import React, { useState } from 'react'

const InputField = ({ name, type = 'text', onChange, value, label, placeholder = 'Enter here', required = false, className = '', icon = '', error, ...props }: any) => {
	const [eyeOn, setEyeOn] = useState(false)
	const [fieldType, setFieldType] = useState(type)

	const toggleEyeOn = () => {
		if (eyeOn === false) {
			setEyeOn(true)
			setFieldType('text')
		} else {
			setEyeOn(false)
			setFieldType('password')
		}
	}
	return (
		<div className={`form-group mb-3 ${className}`}>
			{label && <label className="label-form mb-1">{label}{required && <span className="text-danger">*</span>}</label>}

			<input
				type={fieldType ? fieldType : 'text'}
				autoComplete="off"
				name={name}
				placeholder={placeholder}
				value={value ?? ''}
				onChange={onChange}
				required={required}
				className={`form-control ${error && 'invalid'} `}
				{...props}
			/>

			{icon && <Image src={icon} alt="Icon" className="position-absolute translate-middle-y form-control-icon top-50 px-3" />}

			{type === 'password' &&
				<button
					type="button"
					className="btn show-password border-0"
					onClick={() => toggleEyeOn()}
				>
				</button>
			}
			{error && <span className="invalid-feedback text-danger d-block mt-1">{error}</span>}
		</div >
	)
}

export default InputField