import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import navStyles from "../styles/Nav.module.scss";

const Nav = () => {
	const router = useRouter();
	const [open, setOpen] = useState(false); //stan hamburgera

	//funkcja do obsługi klika w menu hamburger zmieniająca stan (a przez to klasę)
	const handleMenuClick = () => {
		!open ? setOpen(true) : setOpen(false);
	};

	return (
		<nav className="nav">
			<p>LOGO</p>
			<ul
				onClick={handleMenuClick}
				className={open ? "nav__open" : "nav__close"}
			>
				<li className={router.pathname == "/" ? "active" : ""}>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li className={router.pathname == "/o-nas" ? "active" : ""}>
					<Link href="/o-nas">
						<a>O nas</a>
					</Link>
				</li>
				<li className={router.pathname == "/cennik" ? "active" : ""}>
					<Link href="/cennik">
						<a>Cennik</a>
					</Link>
				</li>
				<li className={router.pathname == "/realizacje" ? "active" : ""}>
					<Link href="/realizacje">
						<a>Realizacje</a>
					</Link>
				</li>
				<li className={router.pathname == "/kontakt" ? "active" : ""}>
					<Link href="/kontakt">
						<a>Kontakt</a>
					</Link>
				</li>
				<li className={router.pathname == "/regulamin" ? "active" : ""}>
					<Link href="/regulamin">
						<a>Regulamin</a>
					</Link>
				</li>
			</ul>
			<div
				className={open ? "hamburger__open" : "hamburger__close"}
				onClick={handleMenuClick}
			>
				<div className="hamburger__icon"></div>
			</div>
		</nav>
	);
};

export default Nav;
