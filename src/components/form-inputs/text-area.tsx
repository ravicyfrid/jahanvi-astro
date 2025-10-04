import React from 'react'
import { _Object } from '@/utils/interfaces';

const TextArea = ({ name, onChange, value, disabled, label, onBlur, placeholder, required = false, rows, className = '', error }: _Object) => {
	return (
		<div className={`form-group mb-3 ${className}`}>
			{label && <label className="label-form mb-1">{label} {required && <span className="text-danger">*</span>}</label>}

			<textarea
				className={`form-control ${error && 'invalid'} `}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				rows={rows}
				disabled={disabled}
				onBlur={onBlur}
			/>
			{error && <span className="invalid-feedback text-danger d-block mt-1">{error}</span>}

		</div>
	)
}
export default TextArea;