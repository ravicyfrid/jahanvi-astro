

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
			<section className="consultation-page-mobile pt-4 bg-white">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center pb-3">
							<h6>Consultation</h6>

						</div>
						<form action="">
							<p className="mb-1">Consultation & fees</p>

							<div className="col-12 mb-3">
								<div className="form-check form-check-inline">
									<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
									<label className="form-check-label" htmlFor="inlineRadio1">Guru Maa
										₹5100</label>
								</div>
								<div className="form-check form-check-inline">
									<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
									<label className="form-check-label" htmlFor="inlineRadio2">Student
										₹700</label>
								</div>
								<div className="form-check form-check-inline">
									<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
									<label className="form-check-label" htmlFor="inlineRadio3">
										Tapasvi D/O Guru Maa
										₹2100
									</label>
								</div>
							</div>

							<div className="col-12">
								<InputField
									// label="Full Name"
									required={true}
									type="text"
									name="full_name"
									placeholder="Full Name"
								/>
							</div>
							<div className="col-12">
								<InputField
									// label="Full Name"
									required={true}
									type="text"
									name="full_name"
									placeholder="Email"
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
							<div className="form-group mb-3 col-12">
									{/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
									<textarea className="form-control" placeholder="Message" id="exampleFormControlTextarea1" rows={3}></textarea>
							</div>

							<div>
								<Button
									label='Submit'
									className='primary w-100 rounded-pill mt-3'
								/>
							</div>
						</form>
					</div>
				</div>
			</section>
			<nav className="navbar py-2 border-top footer-menu-list justify-content-center shadow-lg ">
				<ul className="list-inline d-flex gap-4 mb-0">
					<li className="list-inline-item">
						<a href="#" className="active">
							<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="15" height="15" x="0" y="0" viewBox="0 0 476.912 476.912"><g><path d="M461.776 209.408 249.568 4.52c-6.182-6.026-16.042-6.026-22.224 0L15.144 209.4a15.998 15.998 0 0 0-4.888 11.512c0 8.837 7.164 16 16 16h28.2v224c0 8.837 7.163 16 16 16h112c8.837 0 16-7.163 16-16v-128h80v128c0 8.837 7.163 16 16 16h112c8.837 0 16-7.163 16-16v-224h28.2c4.338 0 8.489-1.761 11.504-4.88 6.141-6.354 5.969-16.483-.384-22.624zm-39.32 11.504c-8.837 0-16 7.163-16 16v224h-112v-128c0-8.837-7.163-16-16-16h-80c-8.837 0-16 7.163-16 16v128h-112v-224c0-8.837-7.163-16-16-16h-28.2l212.2-204.88 212.28 204.88h-28.28z" fill="#939393" opacity="1" data-original="#939393"></path></g></svg>
							<span className="d-block">Home</span>
						</a>
					</li>

					<li className="list-inline-item">
						<a href="#">
							<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="15" height="15" x="0" y="0" viewBox="0 0 512 512"><g><path d="m504.387 153.441-80.68-112.606c-1.153-1.617-3.744-3.482-7.041-3.18-196.159-.102-126.814-.083-322.03-.083h-.008c-2.514 0-5.043 1.436-6.344 3.256L7.604 153.357c-1.86 2.593-1.862 6.834.198 9.455L249.85 471.494c3.101 3.943 9.235 3.886 12.291 0l242.047-308.682c2.081-2.653 2.062-6.78.199-9.371zm-324.145 12.36H331.75l-75.754 271.792zm75.782-106.977 65.448 91.346-130.9-.061zm95.908 91.285 65.459-91.285 65.448 91.346zm50.17-96.845-65.452 91.281-65.45-91.35zm-161.367 0-65.445 91.28-65.458-91.349zm-146.107 5.52 65.483 91.385-130.967-.061zm69.409 107.017 73.916 265.206L29.991 165.801zm110.002 265.205L347.955 165.8H482z" fill="#939393" opacity="1" data-original="#939393" ></path></g></svg>
							<span className="d-block">Gems</span>
						</a>
					</li>

					<li className="list-inline-item me-0">
						<button className="btn btn-primary rounded-circle add-btn">
							<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="15" height="15" x="0" y="0" viewBox="0 0 512 512"><g><path d="M471.579 215.579H296.421V40.421C296.421 18.132 278.289 0 256 0s-40.421 18.132-40.421 40.421v175.158H40.421C18.132 215.579 0 233.711 0 256s18.132 40.421 40.421 40.421h175.158v175.158C215.579 493.868 233.711 512 256 512s40.421-18.132 40.421-40.421V296.421h175.158C493.868 296.421 512 278.289 512 256s-18.132-40.421-40.421-40.421z" fill="#ffffff" opacity="1" data-original="#939393"></path></g></svg>
						</button>
					</li>

					<li className="list-inline-item">
						<a href="#">
							<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="15" height="15" x="0" y="0" viewBox="0 0 32 32"><g><path d="M16.94 29.75H3.08c-1.56 0-2.83-1.27-2.83-2.83V5.08c0-1.56 1.27-2.83 2.83-2.83h23.84c1.56 0 2.83 1.27 2.83 2.83v11.86a.75.75 0 0 1-1.5 0V5.08c0-.733-.597-1.33-1.33-1.33H3.08c-.733 0-1.33.597-1.33 1.33v21.84c0 .733.597 1.33 1.33 1.33h13.86a.75.75 0 0 1 0 1.5z" fill="#939393" opacity="1" data-original="#939393" ></path><path d="M29 9.75H1a.75.75 0 0 1 0-1.5h28a.75.75 0 0 1 0 1.5zM15 5.75a.75.75 0 0 1-.75-.75V1a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75zM5 5.75A.75.75 0 0 1 4.25 5V1a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75zM25 5.75a.75.75 0 0 1-.75-.75V1a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75zM9 17.75H5a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75zm-3.25-1.5h2.5v-2.5h-2.5zM17 17.75h-4a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75zm-3.25-1.5h2.5v-2.5h-2.5zM9 25.75H5a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75zm-3.25-1.5h2.5v-2.5h-2.5zM25 31.75c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75 6.75 3.028 6.75 6.75-3.028 6.75-6.75 6.75zm0-12c-2.894 0-5.25 2.355-5.25 5.25s2.356 5.25 5.25 5.25 5.25-2.355 5.25-5.25-2.356-5.25-5.25-5.25z" fill="#939393" opacity="1" data-original="#939393" ></path><path d="M27 25.75h-2a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v2.25H27a.75.75 0 0 1 0 1.5z" fill="#939393" opacity="1" data-original="#939393" ></path></g></svg>
							<span className="d-block">My bookings</span>
						</a>
					</li>

					<li className="list-inline-item">
						<a href="#">
							<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="15" height="15" x="0" y="0" viewBox="0 0 189.524 189.524" ><g><path fill-rule="evenodd" d="M170.94 151.134c11.678-15.753 18.584-35.256 18.584-56.372C189.524 42.426 147.097 0 94.762 0 42.426 0 0 42.426 0 94.762c0 52.335 42.426 94.762 94.762 94.762 27.458 0 52.188-11.678 69.496-30.339a95.39 95.39 0 0 0 6.682-8.051zm-5.254-8.991c9.071-13.552 14.361-29.849 14.361-47.381 0-47.102-38.183-85.286-85.286-85.286-47.101 0-85.285 38.184-85.285 85.286 0 17.533 5.29 33.829 14.362 47.381 11.445-17.098 28.909-29.827 49.361-35.155-9.875-6.843-16.342-18.255-16.342-31.179 0-20.934 16.971-37.905 37.905-37.905s37.905 16.971 37.905 37.905c0 12.923-6.468 24.336-16.342 31.178 20.451 5.329 37.916 18.057 49.361 35.156zm-6.104 8.047c-13.299-21.869-37.353-36.476-64.819-36.476-27.467 0-51.522 14.607-64.821 36.477 15.642 18.275 38.878 29.857 64.82 29.857s49.178-11.583 64.82-29.858zm-64.82-45.952c15.701 0 28.429-12.727 28.429-28.429 0-15.701-12.727-28.429-28.429-28.429S66.333 60.109 66.333 75.81s12.728 28.428 28.429 28.428z" clip-rule="evenodd" fill="#939393" opacity="1" data-original="#939393" ></path></g></svg>
							<span className="d-block">Account</span>
						</a>
					</li>
				</ul>
			</nav>

		</>

	);
};

export default Consultation
