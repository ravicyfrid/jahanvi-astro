

import { Notification, SearchIcon } from "@/assets/images";
import { Button, InputField } from "@/components";
import SEOHead from "@/components/seo";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import * as Yup from "yup";

const Consultation = () => {


	return (
		<>
			<SEOHead title={'Consultation'} />
			<section className="horoscope-page-mobile bg-white">
				<div className="card-header border-bottom  bg-white p-3 sticky-sidebar">
					<h5 className="card-title text-black d-flex align-items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="23" height="20" x="0" y="0" viewBox="0 0 24 24" >
							<g><path d="M21 11H5.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L5.414 13H21a1 1 0 0 0 0-2z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg>
						Add Horoscope</h5>

						
				</div>

				<div className="container pt-4">
					<div className="row">
						<form action="">
							<div className="col-12">
								<InputField
									// label="Full Name"
									required={true}
									type="text"
									name="full_name"
									placeholder="Full Name"
								/>
							</div>
							<div className="form-group mb-3 col-12">
								{/* <label className="form-label">Gender<span className="text-danger">*</span></label> */}
								<select
									name="gender"
									className="form-select">
									<option value="">Gender</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="other">Other</option>
								</select>

							</div>

							<div className="col-12">
								<InputField
									// label="Time of Birth HH:MM)"
									required={true}
									type="time"
									name="tob"
									placeholder="Time of Birth"
								/>
							</div>

							<div className="col-12">
								<InputField
									// label="Date of Birth"
									required={true}
									type="date"
									name="dob"
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
										placeholder="Birth Place"
									// autoComplete="off"									
									/>
									<button type="button" className="border-0 p-0 search-button"><Image src={SearchIcon} alt="search icon" width={16} height={16} /> </button>
								</div>
							</div>
						

							<div>
								<Button
									label='Create Horoscope'
									className='primary w-100 rounded-pill mt-3'
								/>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>

	);
};

export default Consultation
