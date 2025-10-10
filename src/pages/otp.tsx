import React from 'react'
import SEOHead from '@/components/seo';
import Image from 'next/image';
import { Logo } from '@/assets/images';
import PhoneInput from 'react-phone-input-2';
import { Button } from '@/components/form-inputs';
import OtpInput from '@/components/form-inputs/otp';
import { useFormik } from 'formik';
const UserLogin = () => {

	const formik = useFormik({
		initialValues: {
			otp: ''
		},
		onSubmit: values => {
			console.log(values)
		},
		validate: values => {
			const errors: any = {}
			if (!values.otp) {
				errors.otp = "OTP is required"
			} else if (values.otp.length < 6) {
				errors.otp = "OTP must be 6 digits"
			}
			return errors
		}
	})
	return (
		<>
			<SEOHead title={'Login'} />

			<section className="">
				<div className="card-header shadow-sm bg-white border-bottom p-3">
					<h5 className="card-title text-black d-flex align-items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="23" height="20" x="0" y="0" viewBox="0 0 24 24" ><g><path d="M21 11H5.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L5.414 13H21a1 1 0 0 0 0-2z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg>
						Account Verification</h5>
				</div>
				<div className="container">
					<div className="card">
						<div className="row">

							<div className="col-12  flex-column justify-content-center align-items-center otp-auth-mobile login-form-page align-center d-flex justify-content-center py-2">
								<div className='login-form-cotnent'>
									<div className="text-center mb-3">
										<Image src={Logo} alt="Jahanvi Astro Logo mb-4" width={120} height={120} />
										{/* <h5 className="mb-2 text-center text-primary">Welcome to Jahanvi Astro</h5> */}
										<p className="text-muted mb-4">
											Please enter the OTP to verify your account. We have sent a 6-digit OTP to your <strong>+917089988279</strong>
										</p>
									</div>

									<form className="login-form">
										<div className='form-group'>
											<div className="otp-field">
												{/* <label className="form-label mb-0 mt-3">Enter OTP</label> */}
												<OtpInput
													formik={formik}
													name="otp"
													length={6}
													onComplete={() => formik.submitForm()}
												/>
												<p className='text-center'>Request another OTP over SMS in 00:48</p>
												{formik.touched.otp && formik.errors.otp && (
													<div className="text-danger text-center">
														{formik.errors.otp}
													</div>
												)}
											</div>
										</div>

										<Button
											label='Submit'
											className='primary w-100 rounded-pill mt-3'
										/>
									</form>
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
