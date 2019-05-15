import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand ml-1 mr-auto" href="#">
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler ml-auto float-right"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<div className="navbar-nav ml-auto">
						<a className="nav-item nav-link active" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
						<a className="nav-item nav-link" href="#">
							About
						</a>
						<a className="nav-item nav-link" href="#">
							Services
						</a>
						<a className="nav-item nav-link" href="#">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
