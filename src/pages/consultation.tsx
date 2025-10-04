import { Logo } from "@/assets/images";
import { Footer, Header } from "@/components";
import { InputField } from "@/components/form-inputs";
import { ordersService } from "@/services/orders.service";
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

	useEffect(() => {
		ordersService.getConsultationFees().then((res: any) => {
			console.log('res>>>>>>>>>>>>.', res);
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
			belongs_to: "",
			order_note: ""
		},
		enableReinitialize: true,
		validationSchema: Yup.object({
			full_name: Yup.string().required("Required"),
			phone_number: Yup.string().required("Required"),
			email: Yup.string().email("Invalid email").required("Required"),
			gender: Yup.string().required("Required"),
			birth_place: Yup.string().required("Required"),
			dob: Yup.string().required("Required"),
			tob: Yup.string().required("Required"),
		}),
		onSubmit: async (values) => {
			try {
				const response = await ordersService.CreateOrder(values);

				if (!response.error && response.data?.id) {
					toast.success(response.message);

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
				}
			} catch (error) {
				console.error("Order Submit Error:", error);
				toast.error('Sumthing went wrong')
			}
		}

	});

	return (
		<>
			<Header />
			<section className="login-auth consultation-section  align-center d-flex justify-content-center py-3">
				<div className="container">
					<div className="card">
						<div className="row justify-content-center align-items-center">
							<div className="col-md-5 col-lg-5 col-12">
								<div className="left-panel">
									<h2>Welcome to Credit Mitra!</h2>
									<p className="mt-3 text-white"><strong>“Financing Dreams, Simplifying Lives”</strong></p>
									<p className='text-white'>
										Our digital lending platform simplifies borrowing with fast approvals,
										flexible loans, and transparent terms. Whether you’re growing your
										business, funding education, or managing unexpected expenses.
									</p>
								</div>
							</div>

							<div className="col-md-7 col-lg-7 col-12">
								<div className="consultation-form-content">
									<div className="text-center mb-3">
										<Image src={Logo} alt="Jahanvi Astro Logo" width={120} height={120} />
										<h5 className="mb-1">Book a Consultation</h5>
										<p>Fill in the details below and our team will get back to you shortly.</p>
									</div>
									<form className="row consultation-form" onSubmit={formik.handleSubmit}>
										<div className="col-lg-6 col-md-6 col-12">
											<InputField
												label="Full Name"
												required={true}
												type="text"
												name="full_name"
												onChange={formik.handleChange}
												value={formik.values.full_name}
												className={`${formik.errors.full_name && formik.touched.full_name ? "is-invalid" : ""
													}`}
											/>
											{formik.errors.full_name && formik.touched.full_name && (
												<div className="invalid-feedback">{formik.errors.full_name}</div>
											)}
										</div>

										<div className="form-group mb-3 col-lg-6 col-md-6 col-12">
											<label className="form-label">Mobile Number<span className="text-danger">*</span></label>
											<PhoneInput
												country={"in"}
												value={formik.values.phone_number}
												onChange={(phone) =>
													formik.setFieldValue("phone_number", phone)
												}
												inputStyle={{ width: "100%" }}
											/>
											{formik.errors.phone_number && formik.touched.phone_number && (
												<div className="text-danger small">
													{formik.errors.phone_number}
												</div>
											)}
										</div>

										<div className="mb-3 col-lg-6 col-md-6 col-12">
											<InputField
												label="Email"
												required={true}
												type="email"
												name="email"
												onChange={formik.handleChange}
												value={formik.values.email}
												placeholder="Email"
												className={`${formik.errors.email && formik.touched.email ? "is-invalid" : ""
													}`}
											/>
											{formik.errors.email && formik.touched.email && (
												<div className="invalid-feedback">{formik.errors.email}</div>
											)}
										</div>

										<div className="form-group mb-3 col-lg-6 col-md-6 col-12">
											<label className="form-label">Gender<span className="text-danger">*</span></label>
											<select
												name="gender"
												onChange={formik.handleChange}
												value={formik.values.gender}
												className={`form-select ${formik.errors.gender && formik.touched.gender
													? "is-invalid"
													: ""
													}`}
											>
												<option value="">Select Gender</option>
												<option value="male">Male</option>
												<option value="female">Female</option>
											</select>
											{formik.errors.gender && formik.touched.gender && (
												<div className="invalid-feedback">{formik.errors.gender}</div>
											)}
										</div>

										<div className="col-lg-6 col-md-6 col-12">
											<InputField
												label="Time of Birth HH:MM)"
												required={true}
												type="time"
												name="tob"
												onChange={formik.handleChange}
												value={formik.values.tob}
												className={`${formik.errors.tob && formik.touched.tob ? "is-invalid" : ""
													}`}
											/>
											{formik.errors.tob && formik.touched.tob && (
												<div className="invalid-feedback">{formik.errors.tob}</div>
											)}
										</div>

										<div className="col-lg-6 col-md-6 col-12">
											<InputField
												label="Date of Birth"
												required={true}
												type="date"
												name="dob"
												onChange={formik.handleChange}
												value={formik.values.dob}
												className={` ${formik.errors.dob && formik.touched.dob ? "is-invalid" : ""
													}`}
											/>
											{formik.errors.dob && formik.touched.dob && (
												<div className="invalid-feedback">{formik.errors.dob}</div>
											)}
										</div>
										
										<div className="col-lg-12 col-md-12 col-12">
											<InputField
												label="Birth Place"
												required={true}
												type="text"
												name="birth_place"
												placeholder="Birth Place"
												onChange={handlePlaceChange}
												value={formik.values.birth_place}
												className={`${formik.errors.birth_place && formik.touched.birth_place
													? "is-invalid"
													: ""
													}`}
												autoComplete="off"
											/>
											{formik.errors.birth_place && formik.touched.birth_place && (
												<div className="invalid-feedback">
													{formik.errors.birth_place}
												</div>
											)}

											{/* Suggestions dropdown */}
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
										<div className="form-group mb-3 col-lg-12 col-md-12 col-12">
											<label htmlFor="text" className="form-label">Order Notes</label>
											<textarea
												className="form-control"
												placeholder="Order Notes"
												name="order_note"
												onChange={formik.handleChange}
												value={formik.values.order_note}
											/>
										</div>

										

										<div className="consultation-fees form-group mb-2 col-lg-12 col-md-6 col-12">

											<ul className="list-inline">

												<li className="list-inline-item border-end me-3">
													<label htmlFor="text" className="form-label d-block mb-0">Consulation & Fees</label>
													{fees?.items?.map((item: any) => {
														console.log('item', item);

														if (item.status === 'active') {
															return (
																<div className="form-check form-check-inline" key={item.id}>
																	<input
																		className="form-check-input"
																		type="radio"
																		name="fees_id"
																		onChange={() => {
																			formik.setFieldValue("fees_id", item.id);
																			formik.setFieldValue("type", item.title === "Guru Maa" ? '1' : '0')
																		}}
																		value="myself"
																	/>
																	<label className="form-check-label" htmlFor="inlineRadio1">
																		{item.title} ₹{item.fees}
																	</label>
																</div>
															);
														}

														return null; // Always return something for map()
													})}

												</li>


												<li className="list-inline-item">
													<label htmlFor="text" className="form-label d-block mb-0">Belongs To</label>
													<div className="form-check form-check-inline">
														<input
															className="form-check-input"
															type="radio"
															name="belongs_to"
															onChange={formik.handleChange}
															value="myself"

														/>

														<label className="form-check-label" htmlFor="inlineRadio1">My Self </label>
													</div>

													<div className="form-check form-check-inline">
														<input
															className="form-check-input"
															type="radio"
															name="belongs_to"
															onChange={formik.handleChange}
															value="other"

														/>
														{/* <label htmlFor="text" className="form-label">Belongs To</label> */}
														<label className="form-check-label" htmlFor="inlineRadio1">Other </label>
													</div>
												</li>
											</ul>
										</div>

										<div className="col-12">
											<button type="submit" className="btn btn-primary m-auto d-block">Submit</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer/>
		</>

	);
};

export default Consultation


// {
//     "data": {
//         "id": "88a1d838-02dd-463a-9b98-26f6b42efc03",
//         "status": "upcoming",
//         "payment_mode": "online",
//         "full_name": "ravi sha",
//         "phone_number": "916654875987",
//         "email": "ravi@chs.com",
//         "gender": "male",
//         "birth_place": "Isagarh, Isagarh Tahsil, Ashoknagar, Madhya Pradesh, India",
//         "dob": "2024-01-01",
//         "tob": "00:00:00",
//         "lat": 24.8366074,
//         "lon": 77.8899032,
//         "tzone": "5.5",
//         "fees_id": "7fa30543-842d-4174-8dd5-bf011bc2ccee",
//         "type": "0",
//         "belongs_to": "myself",
//         "order_note": "dfdsfd",
//         "total_price": 700,
//         "user_id": "218d6887-e7a7-4b7f-a04e-32cfd7d3046c",
//         "order_number": 35096,
//         "payment_status": "unpaid",
//         "updated_at": "2025-10-01T11:47:40.492Z",
//         "created_at": "2025-10-01T11:47:40.492Z",
//         "horoscope_chart_image": null,
//         "mahadasha": null,
//         "cashfree_order_id": null,
//         "assign_id": null
//     },
//     "message": "Booking successfully created",
//     "error": false
// }