import { Notification, PlaceHolder } from "@/assets/images";
import { Footer, Pagination } from "@/components";
import SEOHead from "@/components/seo";
import { ordersService } from "@/services";
import formatDateParts from "@/utils/custom-hooks";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const MyBooking = () => {
	const [orders, setOrders] = React.useState<any>({ items: [], pagination: {} });
	const [loading, setLoading] = useState(false)
	const router = useRouter()
	const [filters, setFilters] = React.useState<any>({
		page: 1,
		per_page: 20,
	})

	useEffect(() => {
		setLoading(true)
		ordersService.GetOrders(filters).then((res) => {
			setLoading(false)
			setOrders({ items: res.items, pagination: res.pagination })
		})

	}, [filters])

	const upcomingOrders = orders.items.filter((o: { status: string }) => o.status === "upcoming");
	const completedOrders = orders.items.filter((o: { status: string }) => o.status === "completed");
	const cancelledOrders = orders.items.filter((o: { status: string }) => o.status === "cancelled");

	return (
		<>
			<SEOHead title={'My Booking'} />

			<section className="my-booking-section-mobile">
				<div className="d-flex justify-content-between mb-3 card-header bg-white border-bottom p-3 sticky-sidebar">
					<h6 className="mb-0">My Bookings</h6>
					<button type="button" className="border-0 bg-white"> <Image src={Notification} className="icon me-1 img-fluid" height={20} width={20} alt="notification icon" /></button>
				</div>
				<div className="container">
					<div className="row justify-content-center pb-5">
						<div className="col-12 mb-4">
							<div className="card">

								<ul className="nav nav-pills nav-tabs mb-3" id="pills-tab" role="tablist">
									<li className="nav-item" role="presentation">
										<button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#upcoming" type="button" role="tab" aria-controls="upcoming" aria-selected="true">Upcoming</button>
									</li>
									<li className="nav-item" role="presentation">
										<button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#completed" type="button" role="tab" aria-controls="completed" aria-selected="false">Completed</button>
									</li>
									<li className="nav-item" role="presentation">
										<button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#cancelled" type="button" role="tab" aria-controls="cancelled" aria-selected="false">Cancelled</button>
									</li>
								</ul>

								<div className="tab-content" id="pills-tabContent">
									<div className="tab-pane fade show active" id="upcoming" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
										<div className="row gap-2">

											{upcomingOrders?.length > 0 && upcomingOrders?.map((item: any, i: number) => {
												return (
													<div className="col" key={i}>
														<div className="booking-card" >
															<div className="d-flex justify-content-between align-items-center">
																<span className="fw-semibold">ID-{item.order_number}</span>
																<div className="d-flex gap-2">
																	<button
																		type="button"
																		onClick={() => router.push('/my-booking/' + item.id)}
																		className="btn success-button border-0"
																	>Booking Details</button>
																</div>
																<div className="d-flex gap-2">
																	<button
																		type="button"
																		onClick={() => router.push(`/chat/${item.chat.id}/${item.order_number}`)}
																		className="btn success-button border-0"
																	>Chat</button>
																</div>
															</div>
															<hr />
															<div className="d-flex align-items-center mb-3">
																<div className="user-avatar">
																	<Image
																		src={PlaceHolder}
																		alt="Avatar"
																		width={30}
																		height={30}
																	/>

																</div>
																<div className="user-info">
																	<h6>{item.full_name}</h6>
																	<p >+{item.phone_number}</p>
																</div>
																<div className="ms-auto">
																	<div className="date-box">
																		<div className="text-muted">{formatDateParts(item.created_at).fullDate}</div>
																		<h6 className="day my-1">{formatDateParts(item.created_at).dayOnly}</h6>
																		<p className="mb-0">{formatDateParts(item.created_at).timeOnly}</p>
																	</div>
																</div>
															</div>
															<p className="booking-msg mb-0">
																Thank you for your booking! We’ll be in touch within 24 hours to confirm the details and chat with any questions.
															</p>
														</div>
													</div>
												)
											})
											}

											{orders?.pagination?.total_items == 0 && loading &&
												<div className="justify-content-center d-flex w-100 mt-2">
													<p>No message found</p>
												</div>
											}
											<div className="col-12">
												{loading &&
													// Array.from({ length: 3 }).map(() => (
													<MybookingSkeleton />
													// ))
												}
											</div>

										</div>
									</div>

									<div className="tab-pane fade" id="completed" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
										<div className="row gap-2">
											{completedOrders?.length > 0 ? completedOrders?.map((item: any, i: number) => {
												return (
													<div className="col" key={i}>
														<div className="booking-card" >
															<div className="d-flex justify-content-between align-items-center">
																<span className="fw-semibold">ID-{item.order_number}</span>
																{/* <div className="d-flex gap-2">
																	<button
																		type="button"
																		className="btn success-button border-0"
																		data-bs-toggle="offcanvas"
																		data-bs-target="#offcanvasRight"
																		aria-controls="offcanvasRight">Chat</button>
																</div> */}
															</div>
															<hr />
															<div className="d-flex align-items-center mb-3">
																<div className="user-avatar">
																	<Image
																		src={PlaceHolder}
																		alt="Avatar"
																		width={30}
																		height={30}
																	/>

																</div>
																<div className="user-info">
																	<h6>{item.full_name}</h6>
																	<p>+{item.phone_number}</p>
																</div>
																<div className="ms-auto">
																	<div className="date-box">
																		<div className="text-muted">{formatDateParts(item.created_at).fullDate}</div>
																		<h6 className="day my-1">{formatDateParts(item.created_at).dayOnly}</h6>
																		<p>{formatDateParts(item.created_at).timeOnly}</p>
																	</div>
																</div>
															</div>
															<p className="booking-msg mb-0">
																Thank you for your booking! We’ll be in touch within 24 hours to confirm the details and chat with any questions.
															</p>
														</div>
													</div>
												)
											})
												:
												<div className="justify-content-center d-flex w-100 mt-2">
													<p>No message found</p>
												</div>
											}
										</div>
									</div>

									<div className="tab-pane fade" id="cancelled" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={1}>
										<div className="row gap-2">
											{cancelledOrders?.length > 0 ? cancelledOrders?.map((item: any, i: number) => {
												return (
													<div className="col" key={i}>
														<div className="booking-card" >
															<div className="d-flex justify-content-between align-items-center">
																<span className="fw-semibold">ID-{item.order_number}</span>
															</div>
															<hr />
															<div className="d-flex align-items-center mb-3">
																<div className="user-avatar">
																	<Image
																		src={PlaceHolder}
																		alt="Avatar"
																		width={30}
																		height={30}
																	/>

																</div>
																<div className="user-info">
																	<h6>{item.full_name}</h6>
																	<p>+{item.phone_number}</p>
																</div>
																<div className="ms-auto">
																	<div className="date-box">
																		<div className="text-muted">{formatDateParts(item.created_at).fullDate}</div>
																		<h6 className="day my-1">{formatDateParts(item.created_at).dayOnly}</h6>
																		<p>{formatDateParts(item.created_at).timeOnly}</p>
																	</div>
																</div>
															</div>
															<p className="booking-msg mb-0">
																Thank you for your booking! We’ll be in touch within 24 hours to confirm the details and chat with any questions.
															</p>
														</div>
													</div>
												)
											})
												:
												<div className="justify-content-center d-flex w-100 mt-2">
													<p>No message found</p>
												</div>
											}
										</div>
									</div>
								</div>
							</div>
						</div>
						{orders?.pagination?.total_pages > 1 && (
							<div className="col-12">
								<Pagination
									pageCount={orders?.pagination?.total_pages}
									current_page={orders.pagination?.current_page}
									onPageChange={(e: any) => {
										setFilters({ ...filters, page: e.selected + 1 })
									}}
								/>
							</div>
						)
						}
					</div>
				</div>
			</section>
			<Footer />
		</>

	);
};

export default MyBooking

const MybookingSkeleton = () => {
	return (
		<>
			<div className="booking-card booking-card-placeholder">
				<div className="d-flex justify-content-between align-items-center mb-2">
					<p className="placeholder-glow">
						<span className="placeholder id-number"></span>
					</p>
					<div className="d-flex gap-2 placeholder-glow">
						<span className="placeholder placehoder-danger-button"></span>
					</div>
				</div>
				<hr />
				<div className="d-flex align-items-center justify-content-between placeholder-glow">
					<div className="d-flex align-items-center placeholder-glow">

						<span className="placeholder rounded-circle placehoder-avtar me-2"></span>
						<div>
							<p className="placeholder-glow">
								<span className="placeholder placehoder-avtar-h"></span>

								<span className="placeholder placehoder-avtar-p"></span>
							</p>
						</div>
					</div>
					<span className="placeholder placehoder-date-box d-block mb-2"></span>
				</div>
				<p className="placeholder-glow placehoder-booking-msg">
					<span className="placeholder col-12 mb-1"></span>
					<span className="placeholder col-12"></span>
				</p>
			</div >
		</>
	)
}



