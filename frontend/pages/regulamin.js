import Meta from "../components/Meta";
import MarkdownIt from "markdown-it";

const Statute = ({ statute }) => {
	const md = new MarkdownIt();
	const htmlContent = md.render(statute.data.attributes.regulamin);
	return (
		<section className="statute">
			<Meta title={statute.data.attributes.naglowek} />
			<h1 className="statute__title">{statute.data.attributes.naglowek}</h1>
			<div
				dangerouslySetInnerHTML={{ __html: htmlContent }}
				className="statute__list"
			></div>
		</section>
	);
};

export default Statute;

export async function getStaticProps() {
	const resStatute = await fetch("http://localhost:1337/api/statute");
	const statute = await resStatute.json();

	return {
		props: { statute },
		revalidate: 60,
	};
}
