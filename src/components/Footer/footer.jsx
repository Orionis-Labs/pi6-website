/* eslint-disable @next/next/no-img-element */
import React from "react";
import appData from "../../data/app.json";
import Link from "next/link";

const footer = ({ hideBGCOLOR }) => {
	return (
		<footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 item-group-1">
						<div className="item md-mb50">
							<div className="logo">
								<img src={appData.lightLogo} alt="logo" />
							</div>
							<ul>
								<li>An Orionis Labs Product.</li>
								<li>
									<div className="social">
										<a href="https://twitter.com/pi6finance">
											<i className="fab fa-twitter"></i>
										</a>
										<a href="https://instagram.com/pi6finance">
											<i className="fab fa-instagram"></i>
										</a>
									</div>
								</li>
								<li>
									<div className="copy-right">
										<p>© 2022, OrionisLabs</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-6 d-flex item-group-2">
						<div className="col-lg-6">
							<div className="item md-mb50">
								<div className="title">
									<h5>Help</h5>
								</div>
								<ul>
									<li>FAQ</li>

									<li>Privacy Policy</li>

									<li>Terms of Service</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="item md-mb50">
								<div className="title">
									<h5>Contact Us</h5>
								</div>
								<ul>
									<li>
										<span className="icon pe-7s-mail"></span>
										<div className="cont">
											<p style={{ color: "white" }}>
												contact@pi6fi.co
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default footer;
