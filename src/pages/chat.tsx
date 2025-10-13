
const Chat = (props: any) => {

	return (
		<>
			{/* {props?.chats?.items?.length > 0 && (
				<div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel"> */}
			<div className="card-header d-flex p-3 justify-content-between bg-light sticky-sidebar">
				<div className="d-flex align-items-center">
					<button type="button" className="btn-close mt-2 p-0 me-3" data-bs-dismiss="offcanvas" aria-label="Close">

					</button>
					<div>
						<p className="mb-0"><strong className="text-primary">Booking-ID <span className="text-success">●</span></strong>
							<small className="d-block">31792</small></p>
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
										<div className="text-center text-muted small mb-4">
											<span className="chat-time">1 Oct, 2025</span>
										</div>

										<div className="msg msg-right">
											<span className="d-block ">hello </span>
											<small className="text-white">11:57 AM</small>
										</div>

										<div>
											<p className="text-black code-sandbox mb-1">code sandbox</p>
											<div className="msg msg-left">
												<span className="d-block">
													Hey..
												</span>
												<small className="text-muted">12:44 PM</small>
											</div>
										</div>
										<div className="msg msg-left">Hello how are you?<br /><small className="text-muted">12:46 PM</small></div>
										<div className="msg msg-right">I am fine mam<br /><small className="text-white">12:46 PM</small></div>
										<div className="msg msg-left">What is your name<br /><small className="text-muted">12:46 PM</small></div>
										<div className="msg msg-right">Ram<br /><small className="text-white">12:47 PM</small></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="messages-chat">
							<div className="message">
								<div className="d-flex align-items-start">
									<div className="flex-shrink-0">
										<Image src={UserIcon} alt="User" width={25} height={25} />
									</div>

									<div className="flex-grow-1 ms-2">
										<p className="text">Hi, how are you ? <span className="time">14h58</span></p>
									</div>
								</div>
							</div>

							<div className="message text-only justify-content-end">
								<div className="d-flex align-items-start">
									<div className="flex-grow-1">
										<div className="response">
											<p className="text">When can we meet ?
												<span className="time text-start">14h58</span>
											</p>
										</div>
									</div>

									<div className="flex-shrink-0 ms-2">
										<Image src={UserIcon} alt="User" width={25} height={25} />
									</div>
								</div>
							</div>


						</div> */}



				</section>
			</div>
			<div className="offcanvas-footer ">

				<form action="" className=" w-100">
					<div className="chat-footer border-top">
						<input type="text" placeholder="Type a message..." />
						<button type="button" className="bg-primary">➤</button>
					</div>
				</form>
			</div>
			{/* </div>
			)} */}
		</>

	);
};

export default Chat
