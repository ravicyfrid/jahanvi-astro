"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from 'react-phone-input-2';
import { Logo } from "@/assets/images";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import { setLoggedInUser } from "@/redux/slices/session.slice";
import { authService } from "@/services/auth.service";
import { Footer, Header } from "@/components";
import { Button, InputField } from "@/components/form-inputs";
import { toast } from "react-toastify";
import SEOHead from "@/components/seo";

export default function UpdateProfile() {
	const [suggestions, setSuggestions] = useState<any[]>([]);
	const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);
	const dispatch = useDispatch<AppDispatch>();
	const [loading, setLoading] = React.useState(false);

	const { isUserLoggedIn, loggedInUser } = useSelector(
		(state: any) => state.session
	);


	useEffect(() => {
		if (isUserLoggedIn) {
			dispatch(setLoggedInUser());
		}
	}, [isUserLoggedIn, dispatch]);

	const formik: any = useFormik({
		initialValues: {
			name: loggedInUser?.name || '',
			phone_number: loggedInUser?.phone_number || '',
			gender: loggedInUser.gender || "",
			birth_place: loggedInUser.birth_place || "",
			dob: loggedInUser.dob || "",
			tob: loggedInUser.tob || "",
			lat: loggedInUser.lat || "",
			lon: loggedInUser.lon || "",
			tzone: loggedInUser.tzone || ""
		},
		validationSchema: Yup.object({
			name: Yup.string().label('Name').required(),
			gender: Yup.string().label('Gender').required(),
			birth_place: Yup.string().label('Birth Place').required(),
			dob: Yup.string().label('Date Of Birth').required(),
			tob: Yup.string().label("Time Of Birth").required(),
		}),
		enableReinitialize: true,
		onSubmit: async (values) => {
			setLoading(true)
			try {
				const res = await authService.updateProfile(values)
				setLoading(false)
				console.log('res', res)
				if (res.error === false) {
					dispatch(setLoggedInUser());
					toast.success(res.message)
				}
			} catch (err: any) {
				console.error('err', err)
				toast.error(err.message)
			}
		},
	});

	// Fetch from Nominatim API
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

	const handlePlaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		formik.setFieldValue("birth_place", value);

		if (typingTimeout) clearTimeout(typingTimeout);

		const timeout = setTimeout(() => {
			fetchLocationSuggestions(value);
		}, 600)

		setTypingTimeout(timeout);
	};

	const handleSelectSuggestion = (s: any) => {
		formik.setFieldValue("birth_place", s.display_name);
		formik.setFieldValue("lat", s.lat);
		formik.setFieldValue("lon", s.lon);
		setSuggestions([]);
	};

	return (
		<>
			<SEOHead title={'Update Profile'} />
			<Header />
			<section className="login-auth update-profile align-center d-flex justify-content-center py-5">
				<div className="container">
					<div className="card">
						<div className="row">
							<div className="col-md-6 col-lg-6 col-12">
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

							<div className="col-md-6 col-lg-6 col-12 d-flex align-items-center">
								<div className="update-profile-form-content">
									<div className="text-center mb-3">
										<Image src={Logo} alt="Jahanvi Astro Logo" width={120} height={120} />

										<h5 className="mb-1">Update Profile</h5>

									</div>
									<form onSubmit={formik.handleSubmit} className="row">
										<div className="col-lg-6 col-md-6 col-12">
											<InputField
												label="Full Name"
												type="text"
												name="name"
												required={true}
												onChange={formik.handleChange}
												value={formik.values.name}
												className={` ${formik.errors.name && formik.touched.name ? "is-invalid" : ""
													}`}
												error={formik.errors.name && formik.touched.name && (formik.errors.name)}
											/>
										</div>

										<div className="form-group mb-3 col-lg-6 col-md-6 col-12">
											<label className="form-label">Mobile Number <span className="text-danger">*</span></label>
											<PhoneInput
												country={"in"}
												value={formik.values.phone_number}
												onChange={(phone) =>
													formik.setFieldValue("phone_number", phone)
												}
												inputStyle={{ width: "100%" }}
												disabled
											/>
											{formik.errors.phone_number && formik.touched.phone_number && (
												<div className="text-danger small">
													{formik.errors.phone_number}
												</div>
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
												label="Time of Birth (HH:MM)"
												type="time"
												name="tob"
												required={true}
												onChange={formik.handleChange}
												value={formik.values.tob}
												className={` ${formik.errors.tob && formik.touched.tob ? "is-invalid" : ""
													}`}
												error={formik.errors.tob && formik.touched.tob && (formik.errors.tob)}
											/>
										</div>

										<div className="col-lg-6 col-md-6 col-12">
											<InputField
												label="Date of Birth"
												type="date"
												name="dob"
												required={true}
												onChange={formik.handleChange}
												value={formik.values.dob}
												className={` ${formik.errors.dob && formik.touched.dob ? "is-invalid" : ""
													}`}
												error={formik.errors.dob && formik.touched.dob && (formik.errors.dob)}
											/>
										</div>

										<div className="col-lg-6 col-md-6 col-12">
											<InputField
												label="Birth Place"
												required={true}
												type="text"
												name="birth_place"
												onChange={handlePlaceChange}
												value={formik.values.birth_place}
												className={` ${formik.errors.birth_place && formik.touched.birth_place
													? "is-invalid"
													: ""
													}`}
												autoComplete="off"
												error={formik.errors.birth_place && formik.touched.birth_place && (formik.errors.birth_place)}
											/>

											{suggestions.length > 0 && (
												<ul
													className="list-group position-absolute w-100"
													style={{ zIndex: 1000, maxHeight: "200px", overflowY: "auto" }}
												>
													{suggestions.map((s, i) => (
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
										<div className="mb-3 col-12 text-center mx-auto">
											<Button
												type="submit"
												label="Submit"
												className={`btn btn-primary py-2 ${loading && 'loading'} `}
												disabled={loading}
											/>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
