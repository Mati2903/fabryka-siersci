import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import navStyles from "../styles/Nav.module.scss";

const Nav = () => {
	const router = useRouter();
	const [open, setOpen] = useState(false); //stan hamburgera

	// obsługa zmiany koloru navbara z transparent na dany kolor poprzez dodanie lub usunięcie klasy
	// useEffect(() => {
	// 	window.addEventListener("scroll", () => {
	// 		if (window.pageYOffset > 70) {
	// 			document.querySelector(".nav").classList.add("scroll");
	// 		} else {
	// 			document.querySelector(".nav").classList.remove("scroll");
	// 		}
	// 	});
	// });

	//funkcja do obsługi klika w menu hamburger zmieniająca stan (a przez to klasę) dla urządzeń mobilnych
	const handleMenuClick = () => {
		if (window.innerWidth < 768) {
			!open ? setOpen(true) : setOpen(false);
		}
	};

	//usuwanie klas open (zamykanie menu) po kliknięciu na stronie poza navbarem
	useEffect(() => {
		if (open) {
			document.querySelector("main").addEventListener("click", () => {
				setOpen(false);
			});
		}
	}, [open]);

	return (
		<nav className="nav">
			<p>LOGO</p>
			<ul onClick={handleMenuClick} className={`navbar ${open ? "open" : ""}`}>
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
				className={`hamburger ${open ? "open" : ""}`}
				onClick={handleMenuClick}
			>
				<div className="hamburger__icon"></div>
			</div>
		</nav>
	);
};

export default Nav;
