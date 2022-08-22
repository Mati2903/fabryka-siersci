import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className="footer">
			<p className="footer__copyright">Copyright © {year} Fabryka Sierści</p>
			<div className="footer__socials">
				<a
					href="https://www.facebook.com/FabrykaSiersci"
					target="_blank"
					className="footer__facebook"
				>
					<BsFacebook />
				</a>

				<a
					href="https://instagram.com/fabrykasiersci"
					target="_blank"
					className="footer__instagram"
				>
					<BsInstagram />
				</a>
			</div>
		</div>
	);
};

export default Footer;
