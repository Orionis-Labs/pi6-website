import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Pi6 Finance</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Cursor />
			<LoadingScreen />
			<Component {...pageProps} />
			<ScrollToTop />
			<Script id="wow" src="/js/wow.min.js"></Script>
			<Script
				strategy="beforeInteractive"
				id="splitting"
				src="/js/splitting.min.js"
			></Script>
			<Script
				id="simpleParallax"
				src="/js/simpleParallax.min.js"
			></Script>
			<Script
				id="isotope"
				strategy="beforeInteractive"
				src="/js/isotope.pkgd.min.js"
			></Script>
			<Script
				id="wowInit"
				strategy="lazyOnload"
			>{`new WOW().init();`}</Script>
		</>
	);
}

export default MyApp;
