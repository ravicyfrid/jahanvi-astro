
import { InputField } from "@/components/form-inputs";
import SEOHead from "@/components/seo";
import Image from "next/image";
import { Button } from '@/components/form-inputs';

import PhoneInput from "react-phone-input-2";
import { ContactusIcon, GemstonsIcon, Logout, Notification, PensilIcon, PlaceHolder, PrivcyPolicy, UserProfile } from "@/assets/images";

export default function UpdateProfile() {


	return (
		<>
			<SEOHead title={'Update Profile'} />
			<section className="user-profile-mobile">

				<div className="card-header shadow-sm bg-white border-bottom p-3 sticky-sidebar d-flex justify-content-between">

					<h5 className="card-title text-black d-flex align-items-center gap-2">
						User Profile
					</h5>
					<button type="button" className="border-0 bg-white"> <Image src={Notification} className="icon me-1 img-fluid" height={20} width={20} alt="Category icon" /></button>
				</div>
				<div className="container pt-4">
					<div className="col-12">

						<div className="card rounded-2  shadow-lg bg-white px-3 py-4 mb-2">
							<div className="d-flex align-items-center">
								<div className="user-avatar pe-3">
									<Image
										src={UserProfile}
										alt="Avatar"
										width={30}
										height={30}
									/>

								</div>
								<div className="user-info">
									<h5 className="mb-1">User
									</h5>
									<p className="mb-0">+919926405826</p>
								</div>
								<div className="ms-auto">
									<div className="date-box">
										<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 381.534 381"><g><path d="M370.59 230.965c-5.524 0-10 4.476-10 10v88.793c-.02 16.558-13.438 29.98-30 30H50c-16.563-.02-29.98-13.442-30-30V69.168c.02-16.563 13.438-29.98 30-30h88.79c5.523 0 10-4.477 10-10s-4.477-10-10-10H50c-27.602.031-49.969 22.398-50 50v260.59c.031 27.601 22.398 49.969 50 50h280.59c27.601-.031 49.969-22.399 50-50v-88.79c0-5.523-4.477-10.003-10-10.003zm0 0" fill="#328fe0" opacity="1" data-original="#000000" ></path><path d="M156.367 178.344 302.38 32.328l47.09 47.09-146.012 146.016zM132.543 249.258l52.039-14.414-37.625-37.625zM362.488 7.578c-9.77-9.746-25.586-9.746-35.355 0l-10.606 10.606 47.09 47.09 10.606-10.606c9.75-9.77 9.75-25.586 0-35.355zm0 0" fill="#328fe0" opacity="1" data-original="#000000" ></path></g></svg>
									</div>
								</div>
							</div>
						</div>

						<div className="card rounded-2 shadow-lg bg-white px-3 py-4 mb-2 gemstones-enquiries-card">

							<a href="/gemstones-enquiries" className="d-flex align-items-center gap-3">
								<div className="menu-icon">
									<Image
										src={GemstonsIcon}
										alt="Contact Icon"
										width={20}
										height={20}
									/>
								</div>
								<span>Gemstones Enquiries</span>
							</a>
						</div>
						{/* <div className="d-flex align-items-center">
								<div className="menu-icon">
									<Image
										src={GemstonsIcon}
										alt="Gemstons Icon"
										width={20}
										height={20}
									/>
								</div>
								<div className="user-infos">
									<h6 className="mb-1">
										<a href="/gemstones-enquiries" className="d-flex align-items-center">Gemstones Enquiries</a>
									</h6>
								</div>

							</div>
						</div> */}

						<div className="card text-center card rounded-2 shadow-lg bg-white px-3 py-4 mb-2 user-profile-list">
							<ul className="list-unstyled menu-list mb-0">

								<li>
									<a href="/contact" className="d-flex align-items-center gap-3">
										<div className="menu-icon">
											<Image
												src={ContactusIcon}
												alt="Contact Icon"
												width={20}
												height={20}
											/>
										</div>
										<span>Contact</span>
									</a>
								</li>
								<li>
									<a href="/privacy-policy" className="d-flex align-items-center  gap-3">
										<div className="menu-icon">
											<div className="menu-icon">
												<Image
													src={PrivcyPolicy}
													alt="Privcy Policy"
													width={20}
													height={20}
												/>
											</div>
										</div>
										<span>Privacy Policy</span>
									</a>
								</li>
								<li>
									<a href="/terms-conditions" className="d-flex align-items-center  gap-3">
										<div className="menu-icon">
											<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="16" x="0" y="0" viewBox="0 0 440.965 440.965"><g><path d="M341.508 36.207A220.151 220.151 0 0 0 220.587.154C98.892.271.235 98.832 0 220.527a215.892 215.892 0 0 0 36.48 120.32L.853 426.18c-2.189 5.469.47 11.677 5.939 13.867a10.672 10.672 0 0 0 7.928 0l85.333-35.627c101.679 66.676 238.158 38.3 304.834-63.379s38.3-238.158-63.379-304.834zm-120.707 383.36h-.213v.213h-.001a200.961 200.961 0 0 1-113.28-36.053 10.673 10.673 0 0 0-5.973-1.92 10.47 10.47 0 0 0-4.053 0l-66.774 28.587 27.947-66.56a10.666 10.666 0 0 0-1.067-10.24 194.766 194.766 0 0 1-36.053-113.067c-.118-110.045 88.995-199.349 199.04-199.467 110.044-.118 199.349 88.995 199.467 199.04.118 110.045-88.995 199.349-199.04 199.467z" fill="#328fe0" opacity="1" data-original="#000000"></path><path d="M288.514 162.764c-4.633-33.756-33.865-58.657-67.927-57.864-36.795-.118-66.752 29.552-66.987 66.347 0 5.891 4.776 10.667 10.667 10.667s10.667-4.776 10.667-10.667c.471-25.209 21.289-45.263 46.499-44.792 25.21.471 45.263 21.289 44.792 46.499-.465 24.874-20.759 44.796-45.637 44.8-5.891 0-10.667 4.776-10.667 10.667v47.787c0 5.891 4.776 10.667 10.667 10.667s10.667-4.776 10.667-10.667v-37.973c36.652-5.029 62.288-38.819 57.259-75.471z" fill="#328fe0" opacity="1" data-original="#000000"></path><circle cx="219.697" cy="325.147" r="11.675" fill="#328fe0" opacity="1" data-original="#000000"></circle></g></svg>
										</div>
										<span>Terms &amp; Conditions</span>
									</a>
								</li>
								<li>
									<a href="/logout" className="d-flex align-items-center  gap-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
										<div className="menu-icon">
											<Image
												src={Logout}
												alt="Logout"
												width={20}
												height={20}
											/>
										</div>
										<span>Logout</span>
									</a>
								</li>
							</ul>

						</div>
					</div>
				</div>
			</section>

			<nav className="navbar fixed-bottom bg-white align-items-center py-2 footer-menu-list justify-content-center shadow-lg">
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


			{/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

			<div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-sm">
					<div className="modal-content logout-modal">

						<div className="modal-body text-center p-4">
							<h4 className="mb-3">
								Log Out
							</h4>
							<p>Are You Sure you want to log out?</p>
							<div className="d-flex justify-content-between ">
								<button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancle</button>
								<button type="button" className="btn btn-primary">Log Out</button>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	);
}
