import React, { useState, useEffect } from "react";
import "../App.css";
import Cards from "./Cards";
import Axios from "axios";
import { random, datatype, commerce } from "faker";

const apiKey = "563492ad6f91700001000001f96bf27dfc0c42fda0b4ac2560d86144";
const url =
	"https://api.pexels.com/v1/search?query=mac&orientation=landscape&per_page=6&page=1";

const CartSection = ({ addInCart }) => {
	const [product, setProduct] = useState([]);

	const fetchPhotos = async () => {
		const { data } = await Axios.get(url, {
			headers: {
				Authorization: apiKey,
			},
		});

		const { photos } = data;

		const allProducts = photos.map((photo) => ({
			smallPhoto: photo.src.medium,
			tinyPhoto: photo.src.tiny,
			productName: random.word(),
			productPrice: commerce.price(),
			id: datatype.uuid(),
		}));

		setProduct(allProducts);
	};

	useEffect(() => {
		fetchPhotos();
	}, []);
	return (
		<article className="shopping-item">
			{product.map((product) => (
				<Cards key={product.id} product={product} addInCart={addInCart} />
			))}
		</article>
	);
};

export default CartSection;
