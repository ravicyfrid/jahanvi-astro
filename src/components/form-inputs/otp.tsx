'use client'
import React, { useRef } from "react";

type OtpInputProps = {
	formik: any;               
	name?: string;             // form field name, defaults to "otp"
	length?: number;           // number of boxes, defaults to 6
	onComplete?: (otp: string) => void; // optional callback when filled
};

const OtpInput: React.FC<OtpInputProps> = ({
	formik,
	name = "otp",
	length = 6,
	onComplete,
}) => {
	const inputs = Array.from({ length }, () => useRef<HTMLInputElement>(null));

	const getArr = () =>
		Array.from({ length }, (_, i) => (formik.values[name]?.[i] ?? ""));

	const setAt = (index: number, char: string) => {
		const arr = getArr();
		arr[index] = char;
		const otp = arr.join("");
		formik.setFieldValue(name, otp);
		if (onComplete && otp.length === length && !arr.includes("")) {
			onComplete(otp);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
		const raw = e.target.value.replace(/\D/g, "");
		if (raw) {
			// take the last typed digit (handles IME / multi-char)
			const digit = raw[raw.length - 1];
			setAt(index, digit);
			if (index < length - 1) inputs[index + 1].current?.focus();
		} else {
			// user cleared the box
			setAt(index, "");
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
		const arr = getArr();

		if (e.key === "Backspace") {
			e.preventDefault();
			if (arr[index]) {
				// clear current if it has a digit
				setAt(index, "");
			} else if (index > 0) {
				// move left and clear previous
				setAt(index - 1, "");
				inputs[index - 1].current?.focus();
			}
			return;
		}

		if (e.key === "Delete") {
			e.preventDefault();
			setAt(index, "");
			return;
		}

		if (e.key === "ArrowLeft" && index > 0) {
			e.preventDefault();
			inputs[index - 1].current?.focus();
			return;
		}

		if (e.key === "ArrowRight" && index < length - 1) {
			e.preventDefault();
			inputs[index + 1].current?.focus();
			return;
		}
	};

	const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, index: number) => {
		e.preventDefault();
		const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
		if (!pasted) return;

		const arr = getArr();
		for (let i = 0; i < pasted.length && index + i < length; i++) {
			arr[index + i] = pasted[i];
		}
		const otp = arr.join("");
		formik.setFieldValue(name, otp);

		const last = Math.min(index + pasted.length - 1, length - 1);
		inputs[last].current?.focus();

		if (onComplete && otp.length === length && !arr.includes("")) onComplete(otp);
	};

	return (
		<div className="d-flex justify-content-center gap-2 mt-2 mb-3">
			{Array.from({ length }).map((_, i) => (
				<input
					key={i}
					ref={inputs[i]}
					autoFocus={i === 0}
					type="text"
					inputMode="numeric"
					pattern="\d*"
					autoComplete="one-time-code"
					maxLength={1}
					className="form-control text-center"
					style={{
						width: "48px",
						height: "48px",
						fontSize: "22px",
						borderRadius: "10px",
						border: "2px solid #f0f2f5ff",
						boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
						transition: "border-color 0.15s ease, box-shadow 0.15s ease",
					}}
					value={formik.values[name]?.[i] ?? ""}
					onChange={(e) => handleChange(e, i)}
					onKeyDown={(e) => handleKeyDown(e, i)}
					onPaste={(e) => handlePaste(e, i)}
					onFocus={(e) => {
						// highlight & select for quicker overwrite
						e.currentTarget.select();
						e.currentTarget.style.border = "2px solid #328fe0";
						e.currentTarget.style.boxShadow = "0 0 0 .2rem rgba(13,110,253,.15)";
					}}
					onBlur={(e) => {
						e.currentTarget.style.border = "2px solid #ced4da";
						e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.04)";
					}}
					aria-label={`OTP digit ${i + 1}`}
				/>
			))}
		</div>
	);
};

export default OtpInput;
