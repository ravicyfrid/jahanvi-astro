import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { io } from "socket.io-client";
import { chatsService } from "@/services";
import formatDateParts from "@/utils/custom-hooks";
import { SEOHead } from "@/components";

export type Message = {
	id: string;
	senderId: string;
	receiverId: string;
	text: string;
	createdAt: string; // ISO
};

export type SendMessageInput = {
	senderId: string;
	receiverId: string;
	text: string;
	tempId?: string; // for optimistic UI if you want
};

export type ChatMessage = {
	id: string;
	message: string;
	user_id: string;
	chat_id: string;
	created_at: string;
	updated_at: string;
	user?: { id: string; role: string; name: string } | null;
};
const Chat = () => {
	const router = useRouter()
	const { id, orderNumber }: any = router.query
	const [chats, setChats] = React.useState<any>({});
	const [chatLoading, setchatLoading] = useState(false);

	const socket = io("https://jahanvi-astro-apis-43rn.onrender.com", {
		path: "/socket.io",
		transports: ["websocket"],
		autoConnect: true,
	});

	socket.on("connect", () => {
		console.log("✅ connected, socket id:", socket.id);
	});
	socket.on("connect_error", (err) => {
		console.error("connect_error:", err);
	});
	socket.on("disconnect", (reason) => {
		console.warn("disconnected:", reason);
	});

	function joinRoom(chatId: string) {
		socket.emit("joinRoom", chatId);
	}

	function onNewMessage(handler: (msg: ChatMessage) => void) {
		socket.on("newMessage", handler);
		return () => socket.off("newMessage", handler);
	}

	useEffect(() => {
		joinRoom(id);

		const off = onNewMessage((msg) => {
			if (msg.chat_id === id) {
				setChats((prev: any) => ({ ...prev, items: [...prev.items, msg] }));
			}
		});

		return () => off();
	}, [id]);

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
		<SEOHead title="Chats" />
			<div className="card-header d-flex p-3 justify-content-between bg-light sticky-sidebar">
				<div className="d-flex align-items-center">

					<div>
						<p className="mb-0"><strong className="text-primary">Booking-ID <span className="text-success">●</span></strong>
							<small className="d-block">{orderNumber}</small></p>
					</div>
				</div>
				<div>
					<p className="mb-0">
						<strong className="text-black">Consultant</strong>
						<small className="d-block"> Guruma </small>
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
											chats?.items?.length >0 && [...chats?.items]?.reverse()?.length > 0 ? [...chats.items].reverse()?.map((item: any, i: number) => {
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
												<p className="text-center">No Message Found</p>
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
						<input type="text" placeholder="Type a message" name="message" onChange={formik.handleChange} value={formik.values.message} />
						<button type="submit" className={`bg-primary ${chatLoading ? 'loading' : ''}`}>➤</button>
					</div>
				</form>
			</div>

		</>

	);
};

export default Chat
