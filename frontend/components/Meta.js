import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
	return (
		<Head>
			<meta name="vievport" content="width=device-width, initial-scale=1" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<title>{title}</title>
		</Head>
	);
};

Meta.defaultProps = {
	title: "Fabryka Sierści - usługi groomerskie",
	keywords: "usługi groomerskie, groomer, Włodawa, strzyżenie psów",
	description:
		"Fabryka Sierści zajmuje się kompleksowymi usługami groomerskimi dla psów na terenie Włodawy",
};

export default Meta;
