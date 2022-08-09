import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Intro from "../../components/Intro/intro";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import Faq from "../../components/Faq/faq";
import Features from "../../components/Features/features";
import Contact from "../../components/Contact/contact";

const Homepage = () => {
	const navbarRef = React.useRef(null);
	const logoRef = React.useRef(null);

	React.useEffect(() => {
		var navbar = navbarRef.current;
		if (window.pageYOffset > 300) {
			navbar.classList.add("nav-scroll");
		} else {
			navbar.classList.remove("nav-scroll");
		}
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 300) {
				navbar.classList.add("nav-scroll");
			} else {
				navbar.classList.remove("nav-scroll");
			}
		});
	}, [navbarRef]);
	return (
		<DarkTheme>
			<Navbar nr={navbarRef} lr={logoRef} />
			<Intro />
			<Features serviceMB50 />
			<Faq />
			<Contact />
			<Footer />
		</DarkTheme>
	);
};

export default Homepage;
