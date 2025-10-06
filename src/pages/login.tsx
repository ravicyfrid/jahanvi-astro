import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux';

import PhoneInput from 'react-phone-input-2';

import { useFormik } from 'formik';

import { AppDispatch } from '@/redux/store';
import Image from 'next/image';

import store from 'store';

import { authService } from '@/services/auth.service';
import { toast } from 'react-toastify';
import { setAuthToken } from '@/redux/slices/session.slice';
import SEOHead from '@/components/seo';
import Logo from '../assets/images/logo.png';
import { Button } from '@/components/form-inputs';
import OtpInput from '@/components/form-inputs/otp';
import Link from 'next/link';

const UserLogin = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [loading, setLoading] = useState(false);
	const [otpRequested, setOtpRequested] = useState(false);
	const [resendEnabled, setResendEnabled] = useState(false);
	const [timer, setTimer] = useState(0);
	const mobileNumber = store.get('mobileNumber')

	const formik: any = useFormik({
		initialValues: {
			username: "",
			username_type: "", // 'phone_number'
			otp: "",
			user_id: "",
			phoneNumber: mobileNumber || ''
		},
		enableReinitialize: true,

		onSubmit: async (values: any) => {
			setLoading(true);

			try {
				if (!otpRequested) {
					// Step 1: Request OTP
					store.remove(process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY || "");
					const results: any = await authService.RequestOtpForLogin({ username: values.phoneNumber, username_type: 'phone_number' });
					if (results?.error === false) {
						toast.success(results.message)
						setOtpRequested(true);
						formik.setFieldValue("user_id", results?.user_id);
						setResendEnabled(false);
						setTimer(20);
						// enable resend after 20 seconds
						setTimeout(() => {
							setResendEnabled(true);
						}, 20000);
					} else {
						toast.error(results?.message || "Failed to send OTP");
					}
				} else {
					// Step 2: Verify OTP
					const verifyResult: any = await authService.VerifyOtpForLogin({
						otp: values.otp,
						user_id: values.user_id,
					});

					if (verifyResult?.error === false && verifyResult?.access_token) {
						toast.success(verifyResult?.message || 'User logged in successfully', { autoClose: 3000 });
						dispatch(setAuthToken(verifyResult?.access_token));

					} else {
						toast.error(
							verifyResult?.message
						);
					}
				}
			} catch (error) {
				console.error(error);
				toast.error("Something went wrong!");
			} finally {
				setLoading(false);
			}
		},
	});

	useEffect(() => {
		let interval: any;

		if (timer > 0) {
			interval = setInterval(() => {
				setTimer((prev) => prev - 1);
			}, 1000);
		} else {
			clearInterval(interval);
			setResendEnabled(true);
		}

		return () => clearInterval(interval);
	}, [timer]);

	const handleResendOtp = async () => {
		try {
			setLoading(true);
			const results: any = await authService.ResendOtp({ user_id: formik.values.user_id });

			if (results?.error === false) {
				toast.success(results?.message || "OTP resent successfully");
				setTimer(20);
				formik.setFieldValue("user_id", results?.user_id); // update reqid
			} else {
				toast.error(results?.message || "Failed to resend OTP");
			}
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong while resending OTP!");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<SEOHead title={'Login'} />
			<section className="login-auth login-form-page align-center d-flex justify-content-center py-2">
				<div className="container">
					<div className="card">
						<div className="row">

							<div className="col-md-6 col-lg-6 col-12">
								<div className="left-panel">
									<h2>Your Cosmic Path Awaits</h2>
									<p className="mt-3 text-white"><strong>“Find Your Path with Jahanvi Astro”</strong></p>
									<p className='text-white'>
										Dive deep into astrology, numerology, and birth chart analysis.
										Uncover the patterns shaping your destiny and make informed life choices.
										Let the stars illuminate your way toward happiness and success.</p>
								</div>
							</div>
							<div className="col-md-6 col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center">
								<div className='login-form-cotnent'>
									<div className="text-center mb-3">
										<Image src={Logo} alt="Jahanvi Astro Logo" width={120} height={120} />
										<h5 className="mb-2 text-center">Welcome to Jahanvi Astro</h5>
										<p className="text-center text-muted mb-4">
											Enter mobile number to access your account.
										</p>
									</div>

									<form onSubmit={formik.handleSubmit} className="login-form">
										<div className='form-group'>
											<label className="form-label">Mobile Number</label>
											<PhoneInput
												country={"in"}
												value={formik.values.phoneNumber}
												onChange={(phone) => formik.setFieldValue("phoneNumber", phone)}
												inputStyle={{ width: "100%" }}
												disabled={otpRequested}

											/>
										</div>
										{formik.touched.phoneNumber && formik.errors.phoneNumber ? (
											<div className="text-danger" style={{ fontSize: "12px" }}>{formik.errors.phoneNumber}</div>
										) : null}

										{/* OTP Field (visible only after OTP requested) */}
										{otpRequested && (
											<div className="otp-field">
												<label className="form-label mb-0 mt-3">Enter OTP</label>
												<OtpInput
													formik={formik}
													name="otp"
													length={6}
													onComplete={() => formik.submitForm()}
												/>
												{formik.touched.otp && formik.errors.otp && (
													<div className="text-danger text-center">
														{formik.errors.otp}
													</div>
												)}
											</div>
										)}

										<div className="login-with-google mt-3 text-center">
											<Button
												type="submit"
												label={otpRequested ? "Login" : "Request OTP"}
												className={`btn btn-primary py-2 ${loading && 'loading'} `}
												disabled={loading || (
													!mobileNumber &&
													(!formik.isValid || !formik.dirty)
												) || (otpRequested && formik.values.otp.length !== 6)}
											/>
										</div>
										{otpRequested && (
											<div className="text-center mt-3">
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
													<p className="text-danger" style={{ fontSize: "14px" }}>
														Resend OTP in {timer}s
													</p>
												)}
											</div>
										)}
									</form>
									{!otpRequested && (
										<p className="text-center mt-3">
											<Link href="/register" className="text-danger">
												Register Here
											</Link>
										</p>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section >
		</>
	);
};

export default UserLogin
