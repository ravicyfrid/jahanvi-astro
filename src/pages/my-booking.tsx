
import { Footer, Header } from "@/components";
import React, { useEffect, useState } from "react";
import { ordersService } from '@/services/orders.service';
import { chatsService } from '@/services/chat.service';
import formatDateParts from '@/utils/custom-hooks';
import Pagination from "@/components/pagination";
import { useFormik } from "formik";
import Image from "next/image";
import { PlaceHolder } from "@/assets/images";
import SEOHead from "@/components/seo";

const MyBooking = () => {
	const [orders, setOrders] = React.useState<any>({ items: [], pagination: {} });
	const [loading, setLoading] = useState(false)
	const [chatsId, setChatId] = React.useState<any>({});
	const [filters, setFilters] = React.useState<any>({
		page: 1,
		per_page: 9,
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

	const chatid = (id: string, orderID: string) => {
		setChatId({ id: id, orderID: orderID })
	}
	console.log('orders', orders);

	return (
		<>
			<SEOHead title={'My Booking'} />
			<Header />

			<section className="my-booking-section">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-12 col-md-12 mb-4">
							<h3 className="mb-3">My Booking</h3>
							<div className="card">

								<ul className="nav nav-pills nav-tabs mb-3 pb-2" id="pills-tab" role="tablist">
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
										<div className="row row-cols-1 row-cols-md-2 row-cols-lg-2  row-cols-xl-3 g-4">
											{upcomingOrders?.length > 0 ? upcomingOrders?.map((item: any, i: number) => {
												return (
													<div className="col" key={i}>
														<div className="booking-card">
															<div className="d-flex justify-content-between align-items-center">
																<span className="fw-semibold">ID-{item.order_number}</span>
																<div className="d-flex gap-2">
																	<button type="button" onClick={() => chatid(item.chat.id, item.order_number)} className="btn success-button border-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Chat</button>
																	{/* <button type="button" className="order-failed border-0">{item.status}</button> */}
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
															<p className="booking-msg">
																Thank you for your booking! We’ll be in touch within 24 hours to confirm the details and chat with any questions.
															</p>
														</div>
													</div>
												)
											})
												:
												<div className="justify-content-center d-flex w-100">
													<p>No record found</p>
												</div>
											}
											{loading && Array.from({ length: 3 }).map((_, i) => (
												<Skeleton key={i} />
											))}
										</div>
									</div>

									<div className="tab-pane fade" id="completed" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
										<div className="row row-cols-1 row-cols-md-2 row-cols-lg-2  row-cols-xl-3 g-4">
											{completedOrders?.length > 0 ? completedOrders?.map((item: any, i: number) => {
												return (
													<div className="col" key={i}>
														<div className="booking-card">
															<div className="d-flex justify-content-between align-items-center">
																<span className="fw-semibold">ID-{item.order_number}</span>
																{/* <div className="d-flex gap-2">
																	<button type="button" onClick={() => chatid(item.chat.id, item.order_number)} className="btn success-button border-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Chat</button>
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
															<p className="booking-msg">
																Thank you for your booking! We’ll be in touch within 24 hours to confirm the details and chat with any questions.
															</p>
														</div>
													</div>
												)
											})

												:

												<div className="justify-content-center d-flex w-100">
													<p>No record found</p>
												</div>
											}
											{loading && <Skeleton />}

										</div>
									</div>

									<div className="tab-pane fade" id="cancelled" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
										<div className="row row-cols-1 row-cols-md-2 row-cols-lg-2  row-cols-xl-3 g-4">
											{cancelledOrders?.length > 0 ? cancelledOrders?.map((item: any, i: number) => {
												return (
													<div className="col" key={i}>
														<div className="booking-card">
															<div className="d-flex justify-content-between align-items-center">
																<span className="fw-semibold">ID-{item.order_number}</span>

																<div className="d-flex gap-2">
																	{/* <button type="button" onClick={() => chatid(item.chat.id, item.order_number)} className="btn success-button border-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Chat</button> */}
																	{/* <button type="button" className="order-cancelled border-0">{item.status}</button> */}
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
															<p className="booking-msg">
																Thank you for your booking! We’ll be in touch within 24 hours to confirm the details and chat with any questions.
															</p>
														</div>
													</div>
												)
											})

												:

												<div className="justify-content-center d-flex w-100">
													<p>No record found</p>
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
			<Chat chatid={chatsId} />
		</>

	);
};

export default MyBooking

const Chat = (props: any) => {
	const [chats, setChats] = React.useState<any>({});
	const [chatLoading, setchatLoading] = useState(false);

	const convertaiton = () => {
		chatsService.getChatConvertations(props.chatid.id).then((res) => {
			setChats(res)
		})
	}
	useEffect(() => {
		if (!props?.chatid?.id) return;
		convertaiton()
	}, [props.chatid])

	const formik = useFormik({
		initialValues: {
			message: "",
		},
		enableReinitialize: true,
		onSubmit: (values) => {
			setchatLoading(true)
			console.log(values);
			chatsService.startChat(props.chatid.id, values).then((results: any) => {
				if (results.error === false) {
					convertaiton()
				}
			})
			setchatLoading(false)
			formik.resetForm()
		},
	});

	let previousDate = ""

	return (
		<>

			<div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
				<div className="offcanvas-header justify-content-between bg-light">
					<div className="d-flex align-items-center">
						<button type="button" className="btn-close m-0 p-0 me-3" data-bs-dismiss="offcanvas" aria-label="Close">

						</button>
						<div>
							<p><strong className="text-primary">Booking-ID <span className="text-success">●</span></strong>
								<small className="d-block">{props.chatid.orderID}</small></p>
						</div>
					</div>
					<div>
						<p>
							<strong className="text-black">Guruma</strong>
							<small className="d-block">Consultant</small>
						</p>
					</div>
				</div>
				<div className="offcanvas-body border-top">
					<section className="chat">
						<div className="chat-container">
							<div className="chat-body">

								{
									chats?.items?.length > 0 && [...chats.items].reverse()?.map((item: any, i: number) => {
										const currentDate = formatDateParts(item.created_at).longDate;
										const showDate = currentDate !== previousDate;
										previousDate = currentDate
										return (
											<div key={i}>
												{showDate && (
													<div className="text-center text-muted small mb-4">
														<span className="chat-time">{currentDate}</span>
													</div>
												)}
												{item?.user?.role !== "customer" &&
													<div className="msg msg-right">
														<span className="d-block ">{item.message}</span>
														<small className="text-white">{formatDateParts(item.created_at).timeOnly}</small>
													</div>
												}
												{item?.user?.role === "customer" &&
													<div>
														<p className="text-black code-sandbox">{item.name}</p>
														<div className="msg msg-left">
															<span className="d-block">
																{item.message}
															</span>
															<small className="text-muted">{formatDateParts(item.created_at).timeOnly}</small>
														</div>
													</div>
												}
												{/* 
										<div className="msg msg-left">Hello how are you?<br /><small className="text-muted">12:46 PM</small></div>

										<div className="msg msg-right">I am fine mam<br /><small className="text-white">12:46 PM</small></div>

										<div className="msg msg-left">What is your name<br /><small className="text-muted">12:46 PM</small></div>

										<div className="msg msg-right">Ram<br /><small className="text-white">12:47 PM</small></div> */}
											</div>
										)
									})}
							</div>
							{chatLoading && <ChatSkeleton />}
						</div>
					</section>
				</div>
				<div className="offcanvas-footer border-top">

					<form action="" className=" w-100" onSubmit={formik.handleSubmit}>
						<div className="chat-footer">
							<input type="text" placeholder="Type a message..." name="message" onChange={formik.handleChange} value={formik.values.message} />
							<button type="submit" className={`btn btn-primary ${chatLoading ? 'loading' : ''} `}>➤</button>

						</div>
					</form>
				</div>
			</div>

		</>

	);
};

const Skeleton = () => {
	return (
		<div className="col">
			<div className="booking-card booking-card-placeholder">
				<div className="d-flex justify-content-between align-items-center mb-2">
					<p className="placeholder-glow">
						<span className="placeholder id-number"></span>
					</p>
					<div className="d-flex gap-2 placeholder-glow">
						<span className="placeholder placehoder-primary-button me-2"></span>
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
			</div>
		</div>
	)
}


const ChatSkeleton = () => {
	return (
		<>
			<div className="text-center placeholder-glow mb-4">
				<span className="placeholder col-4 py-3 rounded-pill"></span>
			</div>

			<div className="placeholder-glow mb-2">
				<small className="placeholder msg-left-placeholder"></small>
			</div>

			<div className="placeholder-glow mb-2 justify-content-end d-flex">
				<small className="placeholder msg-left-placeholder"></small>
			</div>
		</>
	)
}