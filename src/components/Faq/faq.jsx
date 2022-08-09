/* eslint-disable @next/next/no-img-element */
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import faqData from "../../data/sections/faq.json";

const faq = () => {
	return (
		<section className="team section-padding" id="faqs">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8 col-md-10">
						<div className="sec-head text-center">
							<h6 className="wow fadeIn" data-wow-delay=".5s">
								Frequently Asked Questions
							</h6>
							<h3 className="wow color-font">
								Have any Questions on mind?
							</h3>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8 col-md-10 mx-auto custom--accordion">
						<Accordion defaultActiveKey="0" flush>
							{faqData.map((item) => (
								<Accordion.Item
									eventKey={item.id}
									key={item.id}
								>
									<Accordion.Header>
										<h6>{item.question}</h6>
										<div className="plus-icon">+</div>
									</Accordion.Header>
									<Accordion.Body>
										<div className="custom--border-top" />
										<p className="px-2">{item.answer}</p>
									</Accordion.Body>
								</Accordion.Item>
							))}
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
};

export default faq;
