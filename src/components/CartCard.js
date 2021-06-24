import React from "react";
import "../App.css";

const CartCard = ({ product, removeItem }) => {
	return (
		<div className="cart__card">
			<div className="cart__card-header">
				<div className="cart__image-container">
					<img src={product.tinyPhoto} alt="" />
				</div>
				<div className="cart__card-body">
					<p className="cart__title">{product.productName}</p>
					<p className="cart__price">{product.productPrice}</p>
				</div>
			</div>
			<div className="delete-btn" onClick={() => removeItem(product)}>
				<i className="fas fa-times"></i>
			</div>
		</div>
	);
};

export default CartCard;
