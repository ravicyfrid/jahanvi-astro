

import { SearchIcon } from "@/assets/images";
import { Button, InputField } from "@/components";
import SEOHead from "@/components/seo";
import Image from "next/image";
import * as Yup from "yup";
import { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { kundliService } from "@/services";
import Link from "next/link";


const AddHoroscope = () => {

	const [suggestions, setSuggestions] = useState<any[]>([]);
	const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);
	const [loading, setLoading] = useState(false);

	const formik = useFormik({
		initialValues: {
			full_name: "",
			email: "",
			gender: "",
			birth_place: "",
			dob: "",
			tob: "",
			lat: "",
			lon: "",
			tzone: "5.5"
		},
		validationSchema: Yup.object({
			full_name: Yup.string().required("Required"),
			gender: Yup.string().required("Required"),
			email: Yup.string().email("Invalid email").required("Required"),
			birth_place: Yup.string().required("Required"),
			dob: Yup.string().required("Required"),
			tob: Yup.string().required("Required"),
		}),
		onSubmit: async (values) => {
			setLoading(true);
			try {
				const results = await kundliService.creatKundli(values);
				console.log('reulst', results);

			} catch (error) {
				console.error(error);
				toast.error("Something went wrong, please try again.");
			} finally {
				setLoading(false);
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

	// Handle typing with debounce
	const handlePlaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		formik.setFieldValue("birth_place", value);

		if (typingTimeout) clearTimeout(typingTimeout);

		const timeout = setTimeout(() => {
			fetchLocationSuggestions(value);
		}, 600);

		setTypingTimeout(timeout);
	};

	const handleSelectSuggestion = (s: any) => {
		formik.setFieldValue("birth_place", s.display_name);
		formik.setFieldValue("lat", s.lat);
		formik.setFieldValue("lon", s.lon);
		setSuggestions([]); // clear dropdown after selection
	};


	return (
		<>
			<SEOHead title={'Add Horoscope'} />
			<section className="horoscope-page-mobile bg-white">
				<div className="card-header border-bottom  bg-white p-3 sticky-sidebar">
					<h5 className="card-title text-black d-flex align-items-center gap-2">
						<Link href='/horoscope'>
							<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="23" height="20" x="0" y="0" viewBox="0 0 24 24" >
								<g><path d="M21 11H5.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L5.414 13H21a1 1 0 0 0 0-2z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg>
						</Link>
						Add Horoscope</h5>


				</div>

				<div className="container pt-4">
					<div className="row">
						<form onSubmit={formik.handleSubmit}>
							<div className="col-12">
								<InputField
									// label="Full Name"
									required={true}
									type="text"
									name="full_name"
									placeholder="Full Name"
									onChange={formik.handleChange}
									value={formik.values.full_name}
								/>
							</div>
							<div className="col-12">
								<InputField
									label="Email"
									required={true}
									type="email"
									name="email"
									onChange={formik.handleChange}
									value={formik.values.email}

								/>
							</div>
							<div className="form-group mb-3 col-12">
								{/* <label className="form-label">Gender<span className="text-danger">*</span></label> */}
								<select
									name="gender"
									className="form-select"
									onChange={formik.handleChange}
									value={formik.values.gender}
								>
									<option value="">Gender</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="other">Other</option>
								</select>
								{formik.errors.gender && formik.touched.gender && (
									<div className="invalid-feedback">{formik.errors.gender}
									</div>
								)}
							</div>

							<div className="col-12">
								<InputField
									// label="Time of Birth HH:MM)"
									required={true}
									type="time"
									name="tob"
									onChange={formik.handleChange}
									value={formik.values.tob}
									placeholder="Time of Birth"
								/>
							</div>

							<div className="col-12">
								<InputField
									// label="Date of Birth"
									required={true}
									type="date"
									name="dob"
									onChange={formik.handleChange}
									value={formik.values.dob}
									placeholder="Date of Birth"
								/>
							</div>

							<div className="col-12">
								<div className="brith-place-flied position-relative">
									<InputField
										// label="Birth Place"
										required={true}
										type="text"
										name="birth_place"
										onChange={handlePlaceChange}
										value={formik.values.birth_place}
										placeholder="Birth Place"
										autoComplete="off"
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
									<button type="button"
										className="border-0 p-0 search-button"


									><Image src={SearchIcon} alt="search icon" width={16} height={16} /> </button>
								</div>
							</div>
							<div>
								<Button
									type="submit"
									label='Create Horoscope'
									className={`primary w-100 rounded-pill mt-3 ${loading && 'loading'} `}
									disabled={loading || !formik.isValid || !formik.dirty}
								/>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>

	);
};

export default AddHoroscope
