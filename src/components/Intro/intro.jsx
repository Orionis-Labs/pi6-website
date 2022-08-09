/* eslint-disable @next/next/no-img-element */
import React from "react";

const intro = ({ sliderRef }) => {
	return (
		<header
			ref={sliderRef}
			className="slider-st valign position-re"
			id="home"
		>
			<div className="container hero-container">
				<div className="row">
					<div className="col-lg-6 valign">
						<div className="cont md-mb50">
							<h1 className="mb-10 fw-600">
								The Dashboard of the Interchain
							</h1>
							<p className="mb-5">
								Pi6 Finance is a platform where you can track
								all your assets within the IBC connected chains.
							</p>
							<div className="sub-title ">
								<h6
									className="d-flex align-items-center justify-content-center"
									style={{
										width: "fit-content",
									}}
								>
									COMING SOON
								</h6>
							</div>
						</div>
					</div>
					<div className="col-lg-6 mobile-container">
						<div className=" d-flex justify-content-center">
							<img
								src="/img/mockup.png"
								alt=""
								style={{
									width: "400px",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="line bottom left"></div>
		</header>
	);
};

export default intro;
