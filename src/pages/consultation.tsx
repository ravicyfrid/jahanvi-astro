

import { SearchIcon } from "@/assets/images";
import { Button, Footer, InputField } from "@/components";
import SEOHead from "@/components/seo";
import { ordersService } from "@/services";
import { useFormik } from "formik";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { toast } from "react-toastify";
import * as Yup from "yup";

const Consultation = () => {

	const [fees, setFees] = React.useState<any>({})
	const [suggestions, setSuggestions] = useState<any[]>([]);
	const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);
	const [loading, setLoading] = useState(false);

	console.log('loading', loading);

	useEffect(() => {
		ordersService.getConsultationFees().then((res: any) => {
			setFees(res)
		})
	}, [])

	const fetchLocationSuggestions = async (place: string) => {
		if (!place) {
			setSuggestions([]);
			return;
		}
		try {
			const res = await fetch(
				`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
					place
				)}`,
				{
					headers: {
						"User-Agent": "abc@astro.com",
					},
				}
			);
			const data = await res.json();
			setSuggestions(data);
		} catch (err) {
			console.error("Location fetch error", err);
		}
	};

	const handleSelectSuggestion = (s: any) => {
		formik.setFieldValue("birth_place", s.display_name);
		formik.setFieldValue("lat", s.lat);
		formik.setFieldValue("lon", s.lon);
		setSuggestions([]); // clear dropdown after selection
	};

	const handlePlaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		formik.setFieldValue("birth_place", value);

		if (typingTimeout) clearTimeout(typingTimeout);

		const timeout = setTimeout(() => {
			fetchLocationSuggestions(value);
		}, 600); // wait 600ms after typing stops

		setTypingTimeout(timeout);
	};

	const formik = useFormik({
		initialValues: {
			full_name: "",
			phone_number: "",
			email: "",
			gender: "",
			birth_place: "",
			dob: "",
			tob: "",
			lat: "",
			lon: "",
			"tzone": "5.5",
			fees_id: "",
			type: "",
			belongs_to: "myself",
			order_note: ""
		},
		enableReinitialize: true,
		validationSchema: Yup.object({
			fees_id: Yup.string().label("Consultation Fees").required(),
			full_name: Yup.string().label("Full Name").required(),
			phone_number: Yup.string().label("Phone Number").required(),
			email: Yup.string().label("Email").email("Invalid email").required(),
			gender: Yup.string().label("Gender").required(),
			birth_place: Yup.string().label("Birth Place").required(),
			dob: Yup.string().label("Date Of Birth").required(),
			tob: Yup.string().label("Time Of Birth").required(),
		}),
		onSubmit: async (values) => {
			setLoading(true)
			try {
				const response = await ordersService.CreateOrder(values);

				if (!response.error && response.data?.id) {

					const cashfree = await ordersService.Cashfree(response.data.id);

					if (!cashfree.error && cashfree.payment_link) {

						if (cashfree.cf_order_id) {
							await ordersService.MarkPaid({
								order_id: response.data.id,
								cf_order_id: cashfree.cf_order_id,
							});
						}
						window.location.href = cashfree.payment_link;
					}
					setLoading(false)
				}
			} catch (error) {
				toast.error('Sumthing went wrong')
			}
		}

	});
	return (
		<>
			<SEOHead title={'Consultation'} />
			<section className="consultation-page-mobile pt-4 bg-white">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center pb-3">
							<h6>Consultation</h6>

						</div>
						<form onSubmit={formik.handleSubmit}>
							<p className="mb-1">Consultation & fees</p>

							<div className="col-12 mb-3">
								{fees?.items?.map((item: any) => {
									if (item.status === 'active') {
										return (
											<div className="form-check form-check-inline" key={item.id}>
												<input
													className="form-check-input"
													type="radio"
													name="fees_id"
													id={item.id}
													value="myself"
													required
													onChange={() => {
														formik.setFieldValue("fees_id", item.id);
														formik.setFieldValue("type", item.title === "Guru Maa" ? '1' : '0')
													}}

												/>
												<label className="form-check-label" htmlFor={item.id}>
													{item.title} ₹{item.fees}</label>
											</div>
										);
									}

									return null; // Always return something for map()
								})}

								{/* <div className="form-check form-check-inline">
									<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
									<label className="form-check-label" htmlFor="inlineRadio2">Student
										₹700</label>
								</div>
								<div className="form-check form-check-inline">
									<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
									<label className="form-check-label" htmlFor="inlineRadio3">
										Tapasvi D/O Guru Maa
										₹2100
									</label>
								</div> */}
							</div>

							<div className="col-12">
								<InputField
									// label="Full Name"
									required={true}
									type="text"
									name="full_name"
									onChange={formik.handleChange}
									value={formik.values.full_name}
									onBlur={formik.handleBlur}
									placeholder="Full Name"
									error={formik.errors.full_name && formik.touched.full_name && (formik.errors.full_name)}
									className={`${formik.errors.full_name && formik.touched.full_name ? "is-invalid" : ""}`}
								/>
							</div>
							<div className="col-12">
								<InputField
									// label="Full Name"
									required={true}
									type="email"
									name="email"
									onChange={formik.handleChange}
									value={formik.values.email}
									onBlur={formik.handleBlur}
									placeholder="Email"
									error={formik.errors.email && formik.touched.email && (formik.errors.email)}
									className={`${formik.errors.email && formik.touched.email ? "is-invalid" : ""}`}
								/>
							</div>

							<div className='form-group mb-3'>
								{/* <label className="form-label">Mobile Number</label> */}
								<PhoneInput
									country={"in"}
									value={formik.values.phone_number}
									onChange={(phone) =>
										formik.setFieldValue("phone_number", phone)
									}
									countryCodeEditable={false}
									inputStyle={{ width: "100%" }}
								/>
								{formik.touched.phone_number && formik.errors.phone_number ? (
									<p className="text-danger mb-0" style={{ fontSize: "12px" }}>
										{formik.errors.phone_number}
									</p>
								) : <p className="text-danger mb-0" style={{ fontSize: "12px" }}>
								</p>}
							</div>

							<div className="form-group mb-3 col-12">
								{/* <label className="form-label">Gender<span className="text-danger">*</span></label> */}
								<select
									name="gender"
									onChange={formik.handleChange}
									value={formik.values.gender}
									onBlur={formik.handleBlur}
									required
									className="form-select">
									<option value="">Gender</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="other">Other</option>
								</select>
								{formik.errors.gender && formik.touched.gender && (
									<div className="invalid-feedback">{formik.errors.gender}</div>
								)}
							</div>


							<div className="col-12">
								<InputField
									// label="Time of Birth HH:MM)"
									required={true}
									type="time"
									name="tob"
									placeholder="Time of Birth"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.tob}
									error={formik.errors.tob && formik.touched.tob && (formik.errors.tob)}
									className={` ${formik.errors.tob && formik.touched.tob ? "is-invalid" : ""
										}`}
								/>
							</div>

							<div className="col-12">
								<InputField
									// label="Date of Birth"
									required={true}
									type="date"
									name="dob"
									placeholder="Date of Birth"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.dob}
									error={formik.errors.dob && formik.touched.dob && (formik.errors.dob)}
									className={` ${formik.errors.dob && formik.touched.dob ? "is-invalid" : ""
										}`}
								/>
								{suggestions.length > 0 && (
									<ul
										className="list-group position-absolute w-100"
										style={{ zIndex: 1000, maxHeight: "200px", overflowY: "auto" }}
									>
										{suggestions.map((s: any, i: number) => (
											<li
												key={i}
												className="list-group-item list-group-item-action"
												onClick={() => handleSelectSuggestion(s)}
												style={{ cursor: "pointer" }}
											>
												{s.display_name}
											</li>
										))}
									</ul>
								)}
							</div>

							<div className="col-12">
								<div className="brith-place-flied position-relative">
									<InputField
										// label="Birth Place"
										required={true}
										type="text"
										name="birth_place"
										placeholder="Birth Place"
										autoComplete="off"
										onChange={handlePlaceChange}
										value={formik.values.birth_place}
										error={formik.errors.birth_place && formik.touched.birth_place && (formik.errors.birth_place)}
									/>
									<button type="submit" className="border-0 p-0 search-button"><Image src={SearchIcon} alt="search icon" width={16} height={16} /> </button>
								</div>
							</div>
							<div className="form-group mb-3 col-12">
								{/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
								<textarea
									className="form-control"
									placeholder="Message"
									name="order_note"
									onChange={formik.handleChange}
									value={formik.values.order_note}
									rows={3}
								>
								</textarea>
							</div>

							<div>
								<Button
									label='Submit'
									className='primary w-100 rounded-pill mt-3'
									loading={loading}
								/>
							</div>
						</form>
					</div>
				</div>
			</section>
			<Footer />

		</>

	);
};

export default Consultation
