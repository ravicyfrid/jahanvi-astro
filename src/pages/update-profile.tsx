
import SEOHead from "@/components/seo";
import Image from "next/image";

import PhoneInput from "react-phone-input-2";
import { PensilIcon, UserProfile } from "@/assets/images";
import { Button, InputField } from "@/components";

export default function UpdateProfile() {


	return (
		<>
			<SEOHead title={'Update Profile'} />
			<section className="update-profile-mobile">
				<div className="card-header shadow-sm bg-white border-bottom p-3 sticky-sidebar">
					<h5 className="card-title text-black d-flex align-items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="23" height="20" x="0" y="0" viewBox="0 0 24 24" ><g><path d="M21 11H5.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L5.414 13H21a1 1 0 0 0 0-2z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg>
						Update Profile</h5>
				</div>
				<div className="container pt-5 mt-5">
					<div className="card text-center">
						<div className="row">
								<div className="update-user-icon">
									<Image src={UserProfile} alt="User Profile" width={70} height={70} className="mb-4 relative" />
									<button type="button" className="border-0 pensil-icon bg-primary"><Image src={PensilIcon} alt="User Profile" width={15} height={15} /></button>
								</div>
							<div className="col-12 py-2">
								<form className="login-form">
									<div className="col-12">
										<InputField
											// label="Full Name"
											required={true}
											type="text"
											name="full_name"
											placeholder="Full Name"
										/>
									</div>
									<div className='form-group mb-3'>
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

									<div className="form-group mb-3 col-12">
										{/* <label className="form-label">Gender<span className="text-danger">*</span></label> */}
										<select
											name="gender"
											className="form-select "

										>
											<option value="">Gender</option>
											<option value="male">Male</option>
											<option value="female">Female</option>
											<option value="other">Other</option>
										</select>

									</div>
									<Button
										label='Update'
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
