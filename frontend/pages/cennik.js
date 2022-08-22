import Meta from "../components/Meta";
import MarkdownIt from "markdown-it";

const Pricing = ({ prices, desc, meta }) => {
	const md = new MarkdownIt();
	const htmlContent = md.render(desc.data.attributes.opis);

	return (
		<section className="prices">
			<Meta title={meta.data.attributes.metaPricesTitle} />
			<h1 className="prices__title">Cennik</h1>
			<div className="prices__list">
				{/* loop over prices if any is available */}
				{prices &&
					prices.data.map((price) => {
						return (
							<ul
								key={price.id}
								style={{ listStyle: "none", padding: "0", margin: "0" }}
								className={`prices-${price.attributes.kolor}`}
							>
								<li className="prices__list-item">
									<p className="prices__name">{price.attributes.nazwa}</p>
									<p className={`prices__${price.attributes.promocja}`}>
										PROMOCJA
									</p>
									<span className="prices__price">
										{price.attributes.cena}&nbsp;{price.attributes.waluta}
									</span>
								</li>
							</ul>
						);
					})}
			</div>
			<div
				dangerouslySetInnerHTML={{ __html: htmlContent }}
				className="prices__description"
			></div>
		</section>
	);
};

export default Pricing;

export async function getStaticProps() {
	const resPrice = await fetch(`${process.env.STRAPIURL}/prices`);
	const prices = await resPrice.json();

	const resDesc = await fetch(`${process.env.STRAPIURL}/desc`);
	const desc = await resDesc.json();

	const resMeta = await fetch(`${process.env.STRAPIURL}/meta`);
	const meta = await resMeta.json();

	return {
		props: { prices, desc, meta },
		revalidate: 60,
	};
}
