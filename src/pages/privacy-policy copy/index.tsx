import React from "react";
import { Footer, Header, } from "@/components";
import SEOHead from "@/components/seo";

const PrivacyPolicy = () => {
	return (
		<>
			<SEOHead title="Privacy - Policy" />
			<Header />

			<section className="terms-conditions-section">
				<div className="container">
					<div className="row">
						<h3>Privacy Policy</h3>
					</div>
				</div>
			</section>
			<section className="terms-and-conditions pb-5">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<p>
								<strong>Introduction</strong><br />
								Jahanvi Astro respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data when you use our website/app.
							</p>

							<p>
								<br /><strong>Information We Collect:</strong><br />
								We may collect the following types of information:
							</p>

							<ul>
								<li>
									Personal Information: When you register or use our services, we may collect personal information such as your name, email address, phone number, payment details, etc.
								</li>
								<li>
									Usage Data: We may also collect information about how you access and use our services, including your IP address, browser type, device information, and browsing activity.
								</li>
								<li>
									Cookies: Our website/app uses cookies to enhance your experience. Cookies are small files stored on your device that allow us to remember your preferences and provide personalized services.
								</li>
							</ul>

							<p><strong>How We Use Your Information:</strong><br /></p>

							<ul>
								<li>
									To Provide and Maintain Services: We use your information to deliver, maintain, and improve our services.
								</li>
								<li>
									To Process Payments: We may use your financial information to process payments for services you purchase.
								</li>
								<li>
									To Communicate with You: We may send you emails, notifications, or other communications related to your account, services, or promotions.
								</li>
								<li>
									To Improve User Experience: We analyze usage data to understand how users interact with our services and to enhance the functionality and user experience.
								</li>
								<li>
									To Comply with Legal Obligations: We may use your information to comply with applicable laws, regulations, or legal processes.
								</li>
							</ul>

							<p>
								<strong>Data Sharing and Disclosure:</strong><br />
								We do not sell or rent your personal information. However, we may share it with:
							</p>

							<ul>
								<li>
									Third-Party Service Providers: We may share your information with third-party service providers who assist us in operating our website/app, processing payments, or providing other services.
								</li>
								<li>
									Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
								<li>
									Business Transfers: In the event of a merger, acquisition, or sale of our business, your information may be transferred as part of the transaction.
								</li>
							</ul>

							<p><strong>Data Security:</strong><br /></p>

							<ul>
								<li>
									We implement security measures to protect your data, but no method is 100% secure. You are responsible for safeguarding your account credentials.
								</li>
							</ul>

							<p><strong>Payment Information:</strong><br /></p>

							<ul>
								<li>
									All payments are processed securely through the Cashfree payment gateway.
								</li>
								<li>
									We do not store your payment details.
								</li>
							</ul>

							<p>
								<strong>User Rights and Responsibilities:</strong><br />You have the right to:
							</p>

							<ul>
								<li>
									Access, update, or delete your personal information.
								</li>
								<li>
									Opt out of marketing communications.
								</li>
								<li>
									Disable cookies in your browser settings.
								</li>
							</ul>

							You have the right to:
							<ul>
								<li>
									Provide accurate and complete information when using our services.
								</li>
								<li>
									Maintain the confidentiality of your account credentials.
								</li>
							</ul>

							<p><strong>Third-Party Links:</strong><br /></p>

							<ul>
								<li>
									Our website/app may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
								</li>
							</ul>

							<p><strong>Changes to This Policy</strong></p>

							<ul>
								<li>
									We may update these Terms of Use from time to time. Continued use of our services after updates means you accept the revised terms.
								</li>
							</ul>

							<p><strong>Contact Us:</strong><br /></p>

							<ul>
								<li>
									If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:hello@jahanviastro.com">hello@jahanviastro.com</a>
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
export default PrivacyPolicy