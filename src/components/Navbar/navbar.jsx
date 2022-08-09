/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleMobileDropdown, test } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
	// useEffect(() => {
	// 	window.addEventListener("click", () => {
	// 		if (
	// 			document
	// 				.getElementById("navbarSupportedContent")
	// 				.classList.contains("show-with-trans")
	// 		) {
	// 			console.log("hello");
	// 			// e.stopPropagation();
	// 			document.body.addEventListener("click", handleMobileDropdown);

	// 			return () =>
	// 				document.body.removeEventListener(
	// 					"click",
	// 					handleMobileDropdown
	// 				);
	// 		}
	// 	});
	// }, []);

	// test();

	// useEffect(() => {
	// 	if (
	// 		document
	// 			.getElementById("navbarSupportedContent")
	// 			.classList.contains("show-with-trans")
	// 	) {
	// 		console.log("nav visible");
	// 		// document.body.addEventListener("click", handleMobileDropdown);
	// 		// return () =>
	// 		// 	document.body.removeEventListener(
	// 		// 		"click",
	// 		// 		handleMobileDropdown
	// 		// 	);
	// 	}
	// }, []);

	return (
		<nav
			ref={nr}
			className={`navbar navbar-expand-lg change ${
				theme === "themeL" ? "light" : ""
			}`}
		>
			<div className="container">
				<Link href="/">
					<a
						className="logo"
						href="/"
						style={{ width: "fit-content" }}
					>
						{theme ? (
							theme === "themeL" ? (
								<img
									ref={lr}
									src={appData.darkLogo}
									alt="logo"
								/>
							) : (
								<img
									ref={lr}
									src={appData.lightLogo}
									alt="logo"
								/>
							)
						) : (
							<img ref={lr} src={appData.lightLogo} alt="logo" />
						)}
					</a>
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					onClick={handleMobileDropdown}
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="icon-bar">
						<i className="fas fa-bars"></i>
					</span>
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav ml-auto">
						<Link href="#home">
							<li
								className="nav-item"
								onClick={handleMobileDropdown}
							>
								<a className="nav-link">Home</a>
							</li>
						</Link>
						<Link href="#features">
							<li
								className="nav-item"
								onClick={handleMobileDropdown}
							>
								<a className="nav-link">Features</a>
							</li>
						</Link>
						<Link href="#faqs">
							<li
								className="nav-item"
								onClick={handleMobileDropdown}
							>
								<a className="nav-link">FAQs</a>
							</li>
						</Link>
						<Link href="#contact">
							<li
								className="nav-item"
								onClick={handleMobileDropdown}
							>
								<a className="nav-link">Contact Us</a>
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
