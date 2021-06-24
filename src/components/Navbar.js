import React from "react";
import "../App.css";

const Navbar = ({ cart }) => {
	let amount = 0;

	cart.forEach((item) => {
		amount = parseFloat(amount) + parseFloat(item.productPrice);
	});
	return (
		<nav className="navbar">
			<div className="navbar__branding">
				<p className="brand-name">LCO</p>
			</div>
			<ul className="navbar__items">
				<li className="navbar__item">Home</li>
				<li className="navbar__item">Shop</li>
				<li className="navbar__item">Contact</li>
			</ul>
			<span className="navbar__price">{`₹${amount}`}</span>
			<div className="shopping-cart" id="cart">
				<i className="fas fa-shopping-cart"></i>
				<div className="badge">
					<span>{cart.length}</span>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
