import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
		};
	}

	render() {
		return (
			<Html lang="en" style={{ scrollBehavior: "smooth" }}>
				<Head>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="keywords"
						content="pi6-finance pi6 finance wallet ibc dashboard cosmos-dashboard cosmos non-custodial-wallet governance airdrop-tracker"
					/>
					<meta
						name="description"
						content="The Dashboard of the Interchain."
					/>
					<meta name="author" content="OrionisLabs" />
					<link rel="shortcut icon" href="/img/favicon.ico" />
					<link
						href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap"
						rel="stylesheet"
					/>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
