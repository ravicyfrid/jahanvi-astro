import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Logo } from '@/assets/images';
import { useFormik } from 'formik';
import { Button, OtpInput, SEOHead } from '@/components';
import Link from 'next/link';
import store from 'store';
import { authService } from '@/services';
import { setAuthToken } from '@/redux/slices/session.slice';
import { useDispatch } from 'react-redux';

const OtpVerify = () => {
	const mobileNumber = store.get('mobileNumber')
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(false);

	const [resendEnabled, setResendEnabled] = useState(false);
	const [timer, setTimer] = useState(20); // start with initial 20 seconds

	const formik = useFormik({
		initialValues: {
			otp: '',
			user_id: store.get('user_id'),
		},
		onSubmit: values => {
			authService.VerifyOtpForLogin(values).then((results: any) => {
				if (results?.error === false && results?.access_token) {
					dispatch(setAuthToken(results?.access_token))
				}
			})
		},
		// validate: values => {
		// 	const errors: any = {}
		// 	if (!values.otp) errors.otp = "OTP is required"
		// 	else if (values.otp.length < 6) errors.otp = "OTP must be 6 digits"
		// 	return errors
		// }
	})

	// ✅ Timer logic
	useEffect(() => {
		if (timer <= 0) {
			setResendEnabled(true);
			return; // stop interval
		}

		const interval = setInterval(() => {
			setTimer(prev => prev - 1);
		}, 1000);

		return () => clearInterval(interval); // cleanup
	}, [timer]);

	const handleResendOtp = async () => {
		try {
			setLoading(true);
			const results: any = await authService.ResendOtp({ user_id: store.get('user_id') });

			if (results?.error === false) {
				// Reset timer and disable resend button
				setTimer(60);
				setResendEnabled(false);
				formik.setFieldValue("user_id", results?.user_id); // update reqid
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<SEOHead title={'Login'} />

			<section className="">
				<div className="card-header bg-white border-bottom p-3">
					<Link href={'/'}>
						<h5 className="card-title text-black d-flex align-items-center gap-2">
							<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="23" height="20" x="0" y="0" viewBox="0 0 24 24"><g><path d="M21 11H5.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L5.414 13H21a1 1 0 0 0 0-2z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg>
							Account Verification</h5>
					</Link>
				</div>
				<div className="container">
					<div className="card">
						<div className="row">
							<div className="col-12 flex-column justify-content-center align-items-center otp-auth-mobile login-form-page align-center d-flex justify-content-center py-2">
								<div className='login-form-cotnent'>
									<div className="text-center mb-3">
										<Image src={Logo} alt="Jahanvi Astro Logo mb-4" width={120} height={120} />
										<p className="mb-4">
											Please enter the OTP to verify your account. We have sent a 6-digit OTP to your <strong>+{mobileNumber}</strong>
										</p>
									</div>

									<form className="login-form" onSubmit={formik.handleSubmit}>
										<div className='form-group'>
											<div className="otp-field">
												<OtpInput
													formik={formik}
													name="otp"
													length={6}
													onComplete={() => formik.submitForm()}
												/>
												<div className="text-center mt-2">
													{resendEnabled ? (
														<button
															type="button"
															className="btn text-primary"
															onClick={handleResendOtp}
															disabled={loading}
														>
															Resend OTP
														</button>
													) : (
														<p className="" style={{ fontSize: "14px" }}>
															Request another OTP over SMS in {timer}S
														</p>
													)}
												</div>
												{formik.touched.otp && formik.errors.otp && (
													<div className="text-danger text-center mt-1">
														{formik.errors.otp}
													</div>
												)}
											</div>
										</div>

										<Button
											label='Submit'
											className='primary w-100 rounded-pill mt-3'
											disabled={true}

										// disabled={loading || (
										// 	(!formik.isValid || !formik.dirty)
										// ) ||  formik.values.otp.length !== 6}
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

export default OtpVerify;
