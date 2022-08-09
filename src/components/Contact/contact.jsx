import React from "react";
import { Formik, Form, Field } from "formik";

const Contact = () => {
	const messageRef = React.useRef(null);
	function validateEmail(value) {
		let error;
		if (!value) {
			error = "Required";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			error = "Invalid email address";
		}
		return error;
	}
	const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
	return (
		<section className="contact section-padding" id="contact">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8 col-md-10">
						<div className="sec-head  text-center">
							<h6 className="wow fadeIn" data-wow-delay=".5s">
								contact us
							</h6>
							<h3 className="wow color-font">Get in Touch</h3>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 d-flex align-items-center justify-content-center">
						<div className="form md-mb50 col-lg-8">
							<Formik
								initialValues={{
									name: "",
									email: "",
									message: "",
								}}
								onSubmit={async (values) => {
									await sendMessage(500);
									// alert(JSON.stringify(values, null, 2));
									messageRef.current.innerText =
										"Your Message has been successfully sent. We will contact you soon.";
									values.name = "";
									values.email = "";
									values.message = "";
									setTimeout(() => {
										messageRef.current.innerText = "";
									}, 2000);
								}}
							>
								{({ errors, touched }) => (
									<Form id="contact-form">
										<div
											className="messages"
											ref={messageRef}
										></div>
										<div className="controls">
											<div className="form-group">
												<Field
													id="form_name"
													type="text"
													name="name"
													placeholder="Name"
													required="required"
												/>
											</div>
											<div className="form-group">
												<Field
													validate={validateEmail}
													id="form_email"
													type="email"
													name="email"
													placeholder="Email"
												/>
												{errors.email &&
													touched.email && (
														<div>
															{errors.email}
														</div>
													)}
											</div>
										</div>
										<div className="form-group">
											<Field
												as="textarea"
												id="form_message"
												name="message"
												placeholder="Message"
												rows="4"
												required="required"
											/>
										</div>

										<button
											type="submit"
											className="butn bord custom--btn"
										>
											<span>Send Message</span>
										</button>
									</Form>
								)}
							</Formik>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
