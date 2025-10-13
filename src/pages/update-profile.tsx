
import SEOHead from "@/components/seo";
import Image from "next/image";

import PhoneInput from "react-phone-input-2";
import { PensilIcon, UserProfile } from "@/assets/images";
import { Button, InputField } from "@/components";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import { setLoggedInUser } from "@/redux/slices/session.slice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authService } from "@/services";

export default function UpdateProfile() {

	// const [suggestions, setSuggestions] = useState<any[]>([]);
	// const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);
	const dispatch = useDispatch<AppDispatch>();
	const [loading, setLoading] = React.useState(false);
	console.log(loading);
	

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

		},
		validationSchema: Yup.object({
			name: Yup.string().label('Name').required(),
			gender: Yup.string().label('Gender').required(),

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
				}
			} catch (err: any) {
				console.error('err', err)
			}
		},
	});



	return (
		<>
			<SEOHead title={'Update Profile'} />
			<section className="update-profile-mobile">
				<div className="card-header bg-white border-bottom p-3 sticky-sidebar">
					<h5 className="card-title text-black d-flex align-items-center gap-2">
						<Link href='/user-profile'>
							<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="23" height="20" x="0" y="0" viewBox="0 0 24 24" ><g><path d="M21 11H5.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L5.414 13H21a1 1 0 0 0 0-2z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg>
						</Link>
						Update Profile</h5>
				</div>
				<div className="container pt-5 mt-5">
					<div className="card text-center">
						<div className="row">
							<div className="update-user-icon">
								<Image src={UserProfile} alt="User Profile" width={70} height={70} className="mb-4 relative" />
								<button type="button" className="border-0 pensil-icon bg-primary" >
									<Image src={PensilIcon} alt="User Profile" width={15} height={15} />
								</button>
							</div>
							<div className="col-12 py-2">
								<form className="login-form" onSubmit={formik.handleSubmit}>
									<div className="col-12">
										<InputField
											// label="Full Name"
											required={true}
											type="text"
											name="name"
											placeholder="Full Name"
											onChange={formik.handleChange}
											value={formik.values.name}
											error={formik.errors.name && formik.touched.name && (formik.errors.name)}
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
											inputStyle={{ width: "100%" }}
											disabled
											countryCodeEditable={false}
										/>
										{formik.errors.phone_number && formik.touched.phone_number && (
											<div className="text-danger small">
												{formik.errors.phone_number}
											</div>
										)}
									</div>

									<div className="form-group mb-3 col-12">
										{/* <label className="form-label">Gender<span className="text-danger">*</span></label> */}
										<select
											name="gender"
											className="form-select "
											onChange={formik.handleChange}
											value={formik.values.gender}
										>
											<option value="">Gender</option>
											<option value="male">Male</option>
											<option value="female">Female</option>
											<option value="other">Other</option>
										</select>
										{formik.errors.gender && formik.touched.gender && (
											<div className="invalid-feedback">{formik.errors.gender}</div>
										)}
									</div>
									<Button
										label='Update'
										type="submit"
										className='primary w-100 rounded-pill mt-3'
									/>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	);
}
