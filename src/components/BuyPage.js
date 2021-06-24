import React, { useState, useEffect } from "react";
import Axios from "axios";
import { random, datatype, commerce } from "faker";

const apiKey = "563492ad6f91700001000001f96bf27dfc0c42fda0b4ac2560d86144";
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";

const BuyPage = ({ addInCart }) => {
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

	return <div>{console.log(product)}</div>;
};

export default BuyPage;
