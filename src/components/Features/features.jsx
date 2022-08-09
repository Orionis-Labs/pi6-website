import React from "react";
import featuresData from "../../data/sections/features.json";

const features = ({ serviceMB50 }) => {
	return (
		<section className="services box section-padding" id="features">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8 col-md-10">
						<div className="sec-head  text-center">
							<h6 className="wow fadeIn" data-wow-delay=".5s">
								Features
							</h6>
							<h3 className="wow color-font">
								What makes Pi6 Finance different
							</h3>
						</div>
					</div>
				</div>
				<div className="row">
					{featuresData.slice(0, 6).map((item, index) => (
						<div
							className="col-lg-4 wow fadeInLeft"
							data-wow-delay={
								index == 0 ? ".5s" : index == 1 ? ".7s" : ".9s"
							}
							key={item.id}
						>
							<div
								className={`item-box custom--feature-box no-curve ${
									serviceMB50 &&
									index + 1 != featuresData.length - 1
										? "mb-50"
										: ""
								}`}
							>
								<span
									className={`icon color-font ${item.icon}`}
								></span>
								<h6>{item.title}</h6>
								<p>{item.content}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default features;
