import React from 'react'
import { _Object } from '@/utils/interfaces'


// eslint-disable-next-line max-len
const InputGroup = ({ name, type = 'text', leftIcon, rightIcon, onChange, value, label, placeholder, required = false, className = '', error, ...props }: _Object) => {
	return (
		<>
			<div className={`form-group mb-3 ${className}`}>
				<div className="input-group">
					{label && <label className="label-form">{label} {required && <span className="text-danger"></span>}</label>}
					{leftIcon ? <span className="input-group-text" id="basic-addon1">&#8377;</span> : ''}

					<input
						type={type}
						name={name}
						onChange={onChange}
						value={value}
						placeholder={placeholder}
						className="form-control"
						{...props} />

					{rightIcon ? <div className="input-group-text">
						<i className="fa fa-magnifying-glass"></i>
					</div> : ''}
				</div>

				{error && <span className="invalid-feedback text-danger d-block mt-1">{error}</span>}
			</div>
		</>
	)
}

export default InputGroup