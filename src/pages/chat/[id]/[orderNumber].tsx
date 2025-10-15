import { chatsService } from "@/services";
import formatDateParts from "@/utils/custom-hooks";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Chat = () => {
	const router = useRouter()
	const { id, orderNumber } = router.query
	const [chats, setChats] = React.useState<any>({});
	const [chatLoading, setchatLoading] = useState(false);

	const convertaiton = () => {
		chatsService.getChatConvertations(id).then((res) => {
			setChats(res)
		})
	}
	useEffect(() => {
		if (!id) return;
		convertaiton()
	}, [id])

	const formik = useFormik({
		initialValues: {
			message: "",
		},
		enableReinitialize: true,
		onSubmit: (values) => {
			setchatLoading(true)
			console.log(values);
			chatsService.startChat(id, values).then((results: any) => {
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

			<div className="card-header d-flex p-3 justify-content-between bg-light sticky-sidebar">
				<div className="d-flex align-items-center">

					<div>
						<p className="mb-0"><strong className="text-primary">Booking-ID <span className="text-success">●</span></strong>
							<small className="d-block">{orderNumber}</small></p>
					</div>
				</div>
				<div>
					<p className="mb-0">
						<strong className="text-black">Guruma</strong>
						<small className="d-block">Consultant</small>
					</p>
				</div>
			</div>
			<div className="offcanvas-body border-top">
				<section className="chat">
					<div className="container pt-4 pb-5 mb-2">
						<div className="row gap-4">
							<div className="col-12">
								<div className="chat-container">

									<div className="chat-body">
										{
											chats?.items?.length > 0 ? [...chats.items].reverse()?.map((item: any, i: number) => {
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
														{item?.user?.role == "customer" &&
															<div className="msg msg-right">
																<span className="d-block ">{item.message} </span>
																<small className="text-white">{formatDateParts(item.created_at).timeOnly}</small>
															</div>
														}
														{item?.user?.role !== "customer" &&
															<div>
																<p className="text-black code-sandbox mb-1">{item.name}</p>
																<div className="msg msg-left">
																	<span className="d-block">
																		{item.message}
																	</span>
																	<small className="text-muted">{formatDateParts(item.created_at).timeOnly}</small>
																</div>
															</div>
														}
													</div>
												)
											})
												:
												<p className="text-center">No Record Found</p>
										}
									</div>
								</div>
							</div>
						</div>
					</div>

				</section>
			</div>
			<div className="offcanvas-footer ">

				<form className=" w-100" onSubmit={formik.handleSubmit}>
					<div className="chat-footer border-top">
						<input type="text" placeholder="Type a message..." name="message" onChange={formik.handleChange} value={formik.values.message} />
						<button type="submit" className={`bg-primary ${chatLoading ? 'loading' : ''}`}>➤</button>
					</div>
				</form>
			</div>

		</>

	);
};

export default Chat
