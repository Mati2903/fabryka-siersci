import Meta from "../components/Meta";
import { ImPhone } from "react-icons/im";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";

const Contact = ({ meta, contact }) => {
	return (
		<section className="contact">
			<Meta title={meta.data.attributes.metaContactTitle} />
			<h1 className="contact__title">Kontakt</h1>
			<address>
				<a
					href={`tel:${contact.data.attributes.telefon}`}
					className="contact__phone"
				>
					<ImPhone />
					&nbsp;
					{contact.data.attributes.telefon.slice(0, 3) +
						" " +
						contact.data.attributes.telefon.slice(3, 6) +
						" " +
						contact.data.attributes.telefon.slice(6, 9)}
				</a>
				<a
					href={`mailto:${contact.data.attributes.email}`}
					className="contact__email"
				>
					<MdOutlineAlternateEmail />
					&nbsp;{contact.data.attributes.email}
				</a>
				<p className="contact__adress">
					<BsBuilding />
					&nbsp;{contact.data.attributes.adres}
				</p>
			</address>

			<img
				src="../assets/dogcall-mobile.png"
				alt="dog calling with phone"
				className="contact__image"
			/>
		</section>
	);
};

export default Contact;

export async function getStaticProps() {
	const resMeta = await fetch(`${process.env.STRAPIURL}/meta`);
	const meta = await resMeta.json();

	const resContact = await fetch(`${process.env.STRAPIURL}/contact`);
	const contact = await resContact.json();

	return {
		props: { meta, contact },
		revalidate: 60,
	};
}
