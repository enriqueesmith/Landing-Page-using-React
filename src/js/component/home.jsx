import React from "react";
import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Cards } from "./cards.jsx";
import { Footer } from "./footer.jsx";

//create your HTML layout
export const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Cards />
			</div>
			<Footer />
		</div>
	);
};
