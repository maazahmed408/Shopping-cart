import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CartSection from "./components/CartSection";
import Checkout from "./components/Checkout";

const App = () => {
	const [cart, setCart] = useState([]);

	const addInCart = (item) => {
		const isAlreadyAdded = cart.findIndex(function (array) {
			return array.id === item.id;
		});

		if (isAlreadyAdded !== -1) {
			toast.error("already added");
		} else {
			setCart([...cart, item]);
			console.log(cart);
		}
	};

	const buyItems = () => {
		setCart([]);
		toast.success("Purchase Complete");
	};

	const removeItem = (item) => {
		const newCart = cart.filter((singleItem) => singleItem.id !== item.id);

		setCart(newCart);

		toast.info("item removed");
	};

	return (
		<div>
			<Navbar cart={cart} />
			<HeroSection />
			<CartSection addInCart={addInCart} />
			<Checkout cart={cart} buyItems={buyItems} removeItem={removeItem} />
		</div>
	);
};

export default App;
