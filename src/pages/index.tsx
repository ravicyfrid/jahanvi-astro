import React, { useState } from 'react'

import { useFormik } from 'formik';

import PhoneInput from 'react-phone-input-2';

import { Button, SEOHead } from '@/components';

import Image from 'next/image';
import { Logo } from '@/assets/images';
import { authService } from '@/services';
import store from 'store';
import Router from 'next/router';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { setMobileNumber } from '@/redux/slices/session.slice';

const UserLogin = () => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch()
	const formik: any = useFormik({
		initialValues: {
			username: "",
			username_type: "", // 'phone_number'
		},
		validationSchema: Yup.object({
			username: Yup.string()
				.label('Phone Number')
				.required()
				.min(10, 'Phone number must be at least 10 digits')
		}),
		enableReinitialize: true,

		onSubmit: async (values: any) => {
			console.log('values', values);
			const phoneNumber = `+${values.username}`
			dispatch(setMobileNumber(values.username))
			setLoading(true);
			const results: any = await authService.RequestOtpForLogin({ username: phoneNumber, username_type: 'phone_number' });
			console.log('results', results);

			if (results?.error === false) {
				console.log('');
				store.set('user_id', results?.user_id)
				Router.push('/verify')
			}
			setLoading(false);

		}
	})

	return (
		<>
			<SEOHead title={'Login'} />
			<section className="">
				<div className="d-flex justify-content-between card-header bg-white border-bottom p-3 sticky-sidebar">
					<h6 className="mb-0">Login/Signup</h6>
				</div>
				<div className='login-auth-mobile login-form-page align-center d-flex justify-content-center py-2 bg-white'>
					<div className="container">
						<div className="card">
							<div className="row">

								<div className="col-12 d-flex flex-column justify-content-center align-items-center">
									<div className='login-form-cotnent'>
										<div className="text-center mb-3">
											<Image src={Logo} alt="Jahanvi Astro Logo mb-4" width={120} height={120} />
											<h5 className="mb-2 text-center text-primary">Welcome to Jahanvi Astro</h5>
											<p className="text-center text-muted mb-4">
												Your trusted guide for personalized astrology insights and gemstone consultations. Our expert astrologers and gemstone consultants are here to provide you with tailored advice to help navigate lifes challenges and understand your future.
											</p>
										</div>

										<form className="login-form" onSubmit={formik.handleSubmit}>
											<div className='form-group'>
												<PhoneInput
													country={"in"}
													value={formik.values.username}
													onChange={(value) => formik.setFieldValue('username', value)}
													inputStyle={{ width: "100%" }}
													countryCodeEditable={false}
													enableAreaCodes={true}
													disabled={loading}
													inputProps={{
														minLength: 10
													}}
													inputClass={`form-control ${formik.errors.username && formik.touched.username ? 'is-invalid' : ''}`}
												/>
												<div className='d-flex justify-content-between mt-1'>
													{formik.touched.username && formik.errors.username ? (
														<p className="text-danger mb-0" style={{ fontSize: "12px" }}>
															{formik.errors.username}
														</p>
													) : <p className="text-danger mb-0" style={{ fontSize: "12px" }}>
													</p>}
													<p className='mb-0' style={{ textAlign: 'right', fontSize: '12px' }}>
														0 / 10
													</p>
												</div>
											</div>

											<Button
												label='Login/Signup'
												className='primary w-100 rounded-pill mt-3'
												type='submit'
												loading={loading}
												disabled={loading || (
													(!formik.isValid || !formik.dirty)
												)}
											/>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default UserLogin
