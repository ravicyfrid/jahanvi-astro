
import SEOHead from "@/components/seo";
import Image from "next/image";
import { ContactusIcon, GemstonsIcon, Logout, Notification, PensilIcon, PlaceHolder, PrivcyPolicy, UserProfile } from "@/assets/images";

export default function UpdateProfile() {


	return (
		<>
			<SEOHead title={'Update Profile'} />
			<section className="user-profile-mobile">

				<div className="card-header shadow-sm bg-white border-bottom p-3 sticky-sidebar d-flex justify-content-between">

					<h5 className="card-title text-black d-flex align-items-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="23" height="20" x="0" y="0" viewBox="0 0 24 24" >
							<g><path d="M21 11H5.414l5.293-5.293a1 1 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L5.414 13H21a1 1 0 0 0 0-2z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg>
						Horoscope
					</h5>
					<button type="button" className="border-1 border-primary rounded-5 bg-white  text-primary px-3 py-1"> Add +</button>
				</div>
				<div className="container pt-4">
					<div className="col-12">

						<div className="card rounded-2  shadow-lg bg-white px-3 py-4 mb-2">
							<div className="d-flex align-items-center">
								<div className="user-info">
									<h6 className="mb-1">bkkddd
									</h6>
									<p className="mb-0"><small className="d-block fw-semibold">Gender:female</small> <small className="d-block fw-semibold"> DOB:2025-10-05</small></p>
								</div>
								<div className="ms-auto">
											<button type="button" className="border-1 border-primary rounded-5 bg-white  text-primary px-3 py-1">View</button>
								</div>
							</div>
						</div>
						<div className="card rounded-2  shadow-lg bg-white px-3 py-4 mb-2">
							<div className="d-flex align-items-center">
								<div className="user-info">
									<h6 className="mb-1">bkkddd
									</h6>
									<p className="mb-0"><small className="d-block fw-semibold">Gender:female</small> <small className="d-block fw-semibold"> DOB:2025-10-05</small></p>
								</div>
								<div className="ms-auto">
											<button type="button" className="border-1 border-primary rounded-5 bg-white  text-primary px-3 py-1">View</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		


		

		</>
	);
}
