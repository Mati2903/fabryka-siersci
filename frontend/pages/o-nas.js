import Meta from "../components/Meta";
import MarkdownIt from "markdown-it";

const About = ({ meta, about }) => {
	const md = new MarkdownIt();
	const htmlContent = md.render(about.data.attributes.opis);
	return (
		<section className="about">
			<Meta title={meta.data.attributes.metaAboutTitle} />
			<h1 className="about__title">O nas</h1>
			<div
				dangerouslySetInnerHTML={{ __html: htmlContent }}
				className="about__description"
			></div>
			<img
				src="../assets/dog-mobile.png"
				alt="dog looking from behind footer"
				className="about__image"
			/>
		</section>
	);
};

export default About;

export async function getStaticProps() {
	const resMeta = await fetch("http://localhost:1337/api/meta");
	const meta = await resMeta.json();

	const resAbout = await fetch("http://localhost:1337/api/about");
	const about = await resAbout.json();

	return {
		props: { meta, about },
		revalidate: 60,
	};
}
