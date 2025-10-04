import { UserIcon } from "@/assets/images";
import { Footer, Header } from "@/components";
import { Button } from "@/components/form-inputs";
import { setLoggedInUser } from "@/redux/slices/session.slice";
import { AppDispatch } from "@/redux/store";
import { authService } from "@/services/auth.service";
import { useFormik } from "formik";
import Image from "next/image";
import React, { useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const UpdateProfile = () => {
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


	console.log('loggedInUser', loggedInUser);

	const formik = useFormik({
		initialValues: {
			name: loggedInUser?.name || '',
			phone_number: loggedInUser?.phone_number || '',
			gender: loggedInUser.gender || ''
		},
		// validationSchema: Yup.object().shape({
		// 	name: Yup.string().label('Name').required(),
		// 	gender: Yup.string().label('Gender').required()
		// }),
		enableReinitialize: true,
		onSubmit: async (values) => {
			console.log('values', values);
			
			setLoading(true)
			try {
				const res = await authService.updateProfile(values)
				setLoading(false)
				console.log('res', res)
			} catch (err) {
				console.error('err', err)
			}
		}

	})


	return (
		<>
			<Header />
			<section className="update-profile-section py-3 align-center d-flex justify-content-center">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-5 col-md-8 col-12">
							<h5 className="mb-3">Update Profile</h5>
							<div className="card">
								<div className="profile-container">
									<div className="profile-pic-wrapper">
										<div className="profile-pic text-center">
											<Image src={UserIcon} alt="UserIcon" height="40" width="40" />
										</div>
										<div className="edit-icon">
											<i className="bi bi-pencil"></i>
										</div>
									</div>

									<form onSubmit={formik.handleSubmit}>
										<div className="form-group mb-3 text-start">
											<label htmlFor="name" className="form-label">Name<span className="text-danger">*</span></label>
											<input
												type="text"
												className="form-control"
												id="name"
												name="name"
												value={formik.values.name}
												onChange={formik.handleChange}
												required />
										</div>

										<div className="form-group mb-3 text-start">
											<PhoneInput
												country={"in"}
												value={formik.values.phone_number}
												onChange={(phone) => formik.setFieldValue("phone_number", phone)}
												inputStyle={{ width: "100%" }}
												disabled
											/>
										</div>

										<div className="form-group mb-3 text-start">
											<label htmlFor="gender" className="form-label">Gender<span className="text-danger">*</span></label>
											<select
												className="form-select form-control"
												id="gender"
												onChange={formik.handleChange}
												required
												value={formik.values.gender}>
												{/* <option value="" disabled selected>Select Gender</option> */}
												<option value="male">Male</option>
												<option value="female">Female</option>
												<option value="other">Other</option>
											</select>
										</div>
										<Button
											type="submit"
											label="Submit"
											className={`btn btn-primary py-2 ${loading && 'loading'} `}
											disabled={loading}
										/>
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
};

export default UpdateProfile
