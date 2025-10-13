
import SEOHead from "@/components/seo";
import Image from "next/image";

import { ContactusIcon, GemstonsIcon, Logout, Notification, PensilIcon, PlaceHolder, PrivcyPolicy, UserProfile } from "@/assets/images";
import { Footer } from "@/components";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { destroyAuthSession, setLoggedInUser } from "@/redux/slices/session.slice";

export default function UpdateProfile() {
	const dispatch = useDispatch<AppDispatch>();
	const { isUserLoggedIn, loggedInUser } = useSelector(
		(state: any) => state.session
	);
	useEffect(() => {
		if (isUserLoggedIn) {
			dispatch(setLoggedInUser());
		}
	}, [isUserLoggedIn, dispatch]);


	console.log('loggedInUser', loggedInUser, isUserLoggedIn);

	return (
		<>
			<SEOHead title={'Update Profile'} />
			<section className="user-profile-mobile">

				<div className="card-header bg-white border-bottom p-3 sticky-sidebar d-flex justify-content-between">

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
									<p className="mb-0">+{loggedInUser?.phone_number}</p>
								</div>
								<div className="ms-auto">
									<div className="date-box">
										<Link href={'/update-profile'}>
											<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 381.534 381"><g>
												<path d="M370.59 230.965c-5.524 0-10 4.476-10 10v88.793c-.02 16.558-13.438 29.98-30 30H50c-16.563-.02-29.98-13.442-30-30V69.168c.02-16.563 13.438-29.98 30-30h88.79c5.523 0 10-4.477 10-10s-4.477-10-10-10H50c-27.602.031-49.969 22.398-50 50v260.59c.031 27.601 22.398 49.969 50 50h280.59c27.601-.031 49.969-22.399 50-50v-88.79c0-5.523-4.477-10.003-10-10.003zm0 0" fill="#328fe0" opacity="1" data-original="#000000" ></path><path d="M156.367 178.344 302.38 32.328l47.09 47.09-146.012 146.016zM132.543 249.258l52.039-14.414-37.625-37.625zM362.488 7.578c-9.77-9.746-25.586-9.746-35.355 0l-10.606 10.606 47.09 47.09 10.606-10.606c9.75-9.77 9.75-25.586 0-35.355zm0 0" fill="#328fe0" opacity="1" data-original="#000000" >
												</path>
											</g>
											</svg>
										</Link>
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
								<Link href='/gemstones-enquiries'>
									<span>Gemstones Enquiries</span>
								</Link>
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
									<a href="https://mediumaquamarine-oryx-625809.hostingersite.com" className="d-flex align-items-center gap-3">
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
									<a href="https://mediumaquamarine-oryx-625809.hostingersite.com/privacy-policy" className="d-flex align-items-center  gap-3">
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
									<a href="http://mediumaquamarine-oryx-625809.hostingersite.com/terms-and-conditions" className="d-flex align-items-center  gap-3">
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
			</section >

			<Footer />


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
								<button type="button" className="btn btn-primary" onClick={() => dispatch(destroyAuthSession())} >Log Out</button>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	);
}
