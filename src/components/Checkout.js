import React from "react";
import "../App.css";
import CartCard from "./CartCard";

const Checkout = ({ cart, buyItems, removeItem }) => {
	

	return (
		<section className="cart-section ">
			<p className="cart__heading">Shopping Cart</p>
			{cart.map((item) => (
				<CartCard key={item.id} product={item} removeItem={removeItem} />
			))}
			<div className="complete-purchase">Buy</div>
		</section>
	);
};

export default Checkout;
