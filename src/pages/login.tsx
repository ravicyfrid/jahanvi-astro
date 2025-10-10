import React from 'react'
import SEOHead from '@/components/seo';
import Image from 'next/image';
import { Logo } from '@/assets/images';
import PhoneInput from 'react-phone-input-2';
import { Button } from '@/components/form-inputs';
const UserLogin = () => {


	return (
		<>
			<SEOHead title={'Login'} />
			<section className="login-auth-mobile login-form-page align-center d-flex justify-content-center py-2 bg-white">
				<div className="container">
					<div className="card">
						<div className="row">

							<div className="col-12 d-flex flex-column justify-content-center align-items-center">
								<div className='login-form-cotnent'>
									<div className="text-center mb-3">
										<Image src={Logo} alt="Jahanvi Astro Logo mb-4" width={120} height={120} />
										<h5 className="mb-2 text-center text-primary">Welcome to Jahanvi Astro</h5>
										<p className="text-center text-muted mb-4">
											Your trusted guide for personalized astrology insights and gemstone consultations. Our expert astrologers and gemstone consultants are here to provide you with tailored advice to help navigate life's challenges and understand your future.
										</p>
									</div>

									<form className="login-form">
										<div className='form-group'>
											{/* <label className="form-label">Mobile Number</label> */}
											<PhoneInput
												country={"in"}
												value=''
												inputStyle={{ width: "100%" }}
											/>
											{/* <p style={{ textAlign: 'right', marginTop: '5px', fontSize: '12px' }}>
												{phoneLength} / {maxLength}
											</p> */}
										</div>

										<Button
											label='Login'
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
