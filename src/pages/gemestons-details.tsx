import { genestroImg, Logo } from "@/assets/images";
import { Footer, Header } from "@/components";
import Image from "next/image";

const GemestonsDetails = () => {



	return (
		<>
			<Header />
			<section className="gemestons-details py-5">
				<div className="container">

					<div className="row mb-4">

						<div className="col-lg-6 col-md-6 col-12 mb-3">
							<Image src={genestroImg} alt="Gemestons" className="img-fluid gemestons-img-box" />
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<h4 className="mb-2 text-primary">Gemstone Details </h4>
							<div className="item-container mb-2">
								<h6>Natural Opal</h6>
								<p>Size: 8 Carat to 10 Cerat</p>
							</div>

							<div className="item-container mb-2">
								<h6>Benefits of Gemstone</h6>
								<p>Price Range: 8000 to 1500D Z per corat</p>
							</div>

							<div className="item-container">
								<h6>How to Use</h6>
								<p>Available for rings and pendant


									orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
								</p>
							</div>

							<div className="form-section mt-4">
								<div className="card">
									<form className="row">
									<h6 className="mb-3">Connect with our team</h6>
										<div className="mb-3 form-group col-lg-6 col-md-6 col-12">
											<label htmlFor="name" className="form-label">Full Name</label>
											<input type="text" className="form-control" id="name" placeholder="Enter your name" />
										</div>
										<div className="mb-3 form-group col-lg-6 col-md-6 col-12">
											<label htmlFor="email" className="form-label">Email</label>
											<input type="email" className="form-control" id="email" placeholder="Enter your email" />
										</div>
										<div className="mb-3 form-group col-lg-12 col-md-12 col-12">
											<label htmlFor="message" className="form-label">Message</label>
											<textarea className="form-control" id="message" rows={4} placeholder="Your message"></textarea>
										</div>
										<div className="mt-3 text-center mx-auto">
											<button type="submit" className="btn btn-primary w-100">Submit</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>

				</div>
			</section>

			<Footer />


		</>

	);
};

export default GemestonsDetails
