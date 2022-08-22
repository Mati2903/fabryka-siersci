import Meta from "../components/Meta";
import MarkdownIt from "markdown-it";

export default function Home({ meta, home }) {
	const md = new MarkdownIt();
	const htmlContent = md.render(home.data.attributes.aktualnosci);
	return (
		<section className="home">
			<Meta
				title={meta.data.attributes.metaHomeTitle}
				keywords={meta.data.attributes.metaKeywords}
				description={meta.data.attributes.metaDescription}
			/>
			<h1 className="home__header-title">{home.data.attributes.tytul}</h1>
			<h2 className="home__header-description">
				{home.data.attributes.podtytul}
			</h2>
			<p className="home__paragraph">{home.data.attributes.opis}</p>
			<div
				dangerouslySetInnerHTML={{ __html: htmlContent }}
				className="home__news"
			></div>
			<img
				src="../assets/doghaircut2.png"
				alt="dog and hand with scissors"
				className="home__image"
			/>
		</section>
	);
}
export async function getStaticProps() {
	const resMeta = await fetch("http://localhost:1337/api/meta");
	const meta = await resMeta.json();

	const resHome = await fetch("http:localhost:1337/api/homepage");
	const home = await resHome.json();

	return {
		props: { meta, home },
		revalidate: 60, //revalidate static site every 60 sec or on request
	};
}
