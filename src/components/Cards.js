import React from "react";
import "../App.css";

const Cards = ({ product, addInCart }) => {
	return (
		<div className="card">
			<div className="card__header">
				<div className="expand-icon">
					<i className="icon fas fa-expand-arrows-alt"></i>
				</div>
				<button className="cart-icon" onClick={() => addInCart(product)}>
					<i className="icon fas fa-shopping-cart"></i>
				</button>
			</div>
			<div className="card__image-container">
				<img src={product.smallPhoto} alt="" />
			</div>
			<h3 className="card__title">{product.productName}</h3>
			<p className="card__price">{`₹${product.productPrice}`}</p>
		</div>
	);
};

export default Cards;
