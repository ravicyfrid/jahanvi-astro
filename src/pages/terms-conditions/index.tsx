import React from "react";
import { Footer, Header } from "@/components";
import SEOHead from "@/components/seo";

const TermsConditions = () => {
	return (
		<>
			<SEOHead title="Terms & Conditions" />
			<Header />
			<section className="terms-conditions-section">
				<div className="container">
					<div className="row">

						<h3>Terms and Conditions</h3>
					</div>
				</div>
			</section>
			<section className="terms-and-conditions pb-5">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<p>
								<strong>Introduction</strong>
								<br />Welcome to Jahanvi Astro. By accessing or using our website/app, you agree to be bound by these terms and conditions. Please read them carefully.
							</p>

							<p className="mb-1"><br /><strong>Definitions:</strong></p>

							<ul>
								<li>
									We, Us, our: Refers to Jahanvi Astro
								</li>
								<li>
									User, you: Refers to any individual or entity accessing or using our services.
								</li>
								<li>
									Services: Refers to all products, services, content, and features provided by us through our website/app.
								</li>
							</ul>

							<p className="mb-1"><strong>User Responsibilities:</strong></p>

							<ul>
								<li>
									You agree to use our services only for lawful purposes.
								</li>
								<li>
									You must provide accurate and complete information when creating an account and using our services.
								</li>
								<li>
									You are responsible for maintaining the confidentiality of your account and password.
								</li>
							</ul>

							<p className="mb-1"><strong>Content Ownership:</strong></p>

							<ul>
								<li>
									All content, including text, images, logos, and trademarks, on our website/app is owned by <b className="text-primary">Jahanvi Astro</b> unless otherwise stated.
								</li>
								<li>
									You are not allowed to reproduce, distribute, or create derivative works from our content without our explicit permission.
								</li>
							</ul>

							<p className="mb-1"><strong>Gemstones and Tarot:</strong></p>

							<ul>
								<li>
									We only list gemstones for enquiry purposes and do not sell them directly through our platform.
								</li>
								<li>
									Our services are limited to astrology-related consultations. We do not provide tarot card readings.
								</li>
							</ul>

							<p className="mb-1"><strong>Payments and Refunds:</strong>
							</p>

							<ul>
								<li>
									All payments made through our website/app will be processed online using the <a href="https://www.cashfree.com" rel="noopener" title="Cashfree" target="_blank">Cashfree</a> payment gateway.
								</li>
								<li>
									We do not offer refunds for payments made. However, if you face any issues, we will work to resolve them and may adjust by providing a different service.
								</li>
							</ul>

							<p className="mb-1"><strong>Termination:</strong></p>

							<ul>
								<li>
									We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without notice, for conduct that we believe violates these terms and conditions or is harmful to other users.
								</li>
							</ul>

							<p className="mb-1"><strong>Disclaimer & Limitation of Liability:</strong></p>

							<ul>
								<li>
									Our services are provided “as it is” and without warranties of any kind.
								</li>
								<li>
									We are not liable for any indirect, incidental, or consequential damages arising out of it from the usage of our services.
								</li>
								<li>
									We do not guarantee uninterrupted access to our services and reserves the right to modify or discontinue any aspect of our website/app.
								</li>
							</ul>

							<p className="mb-1"><strong>Change to terms:</strong></p>

							<ul>
								<li>
									We may update these Terms of Use from time to time. Continued use of our services after updates renders your lawful acceptance to our revised terms and conditions.
								</li>
							</ul>

							<p className="mb-1"><strong>Contact Information:</strong></p>

							<ul>
								<li>
									Should you have any questions or doubts regarding our privacy policy, feel free to contact us at <a href="mailto:hello@jahanviastro.com">hello@jahanviastro.com</a>.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<Footer />

		</>
	)
}
export default TermsConditions
