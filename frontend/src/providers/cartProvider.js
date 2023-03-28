import { useState, useEffect, createContext } from 'react';
import Storage from '../utils/storage';
import { api } from '../services/api';
import { useProducts } from '../hooks/useProducts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext([]);

export function CartProvider({ children }) {
	const [cartProducts, setCartProducts] = useState(Storage.get('@cart') || []);	
	const [cartProductsAmount, setCartProductsAmount]= useState(0);
	const products = useProducts();

	useEffect(() => Storage.set('@cart', cartProducts), [cartProducts]);
	useEffect(() => {
		const cartAmount = cartProducts.reduce((accumulator, current) => accumulator += current.amount, 0);
		setCartProductsAmount(cartAmount);
	}, [cartProducts]);


	const handleAddToCart = async (newProduct, activeToast = true) => {
		const productIndex = cartProducts.findIndex(product => product.id === newProduct.id);

		const response = await api.get(`/products/${newProduct.id}`);
		const stock = response.data

		if(stock.amount > 0) {
			if (productIndex === -1) {
				const updatedProduct = {
					...newProduct,
					amount: 1
			};

			setCartProducts(prevState => [...prevState, updatedProduct]);
			} else {
				const updatedCartProducts = [...cartProducts];
				updatedCartProducts[productIndex].amount += 1;

				setCartProducts(updatedCartProducts);
			}

			await api.patch(`/products/${newProduct.id}?cartAmount=${1}&userCartAction=add`)
			activeToast && toast.success('Produto adicionado ao carrinho!', {
				position: "bottom-center",
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
		} else {
			toast.error('Produto sem estoque!', {
				position: "bottom-center",
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
		};
	};

	const handleRestoreStock = async (id) => {
		const productIndex = cartProducts.findIndex(product => product.id === id);

		if (productIndex !== -1) {	
			const updatedCartProducts = [...cartProducts];
			updatedCartProducts[productIndex].amount -= 1;

			if (updatedCartProducts[productIndex].amount === 0) {
			  updatedCartProducts.splice(productIndex, 1);
			}

			setCartProducts(updatedCartProducts);
			await api.patch(`/products/${id}?cartAmount=${1}&userCartAction=restore`);
		}
	};

	const handleRemoveAllProducts = async () => {
		cartProducts.forEach(product => {
			 api.patch(`/products/${product.id}?cartAmount=${product.amount}&userCartAction=restore`);
		})

		setCartProducts([]);
	}

	const handleRemoveFromCart = async (id) => {
		const productsNotDeleted = cartProducts.filter(product => product.id !== id);
		const { amount } = cartProducts.find(product => product.id === id);
		setCartProducts(productsNotDeleted);
		await api.patch(`/products/${id}?cartAmount=${amount}&userCartAction=restore`)
	}

	const submitUserOrder = () => setCartProducts([]);

	return (
		<CartContext.Provider value={{cartProducts, cartProductsAmount, handleAddToCart, handleRestoreStock, handleRemoveFromCart, handleRemoveAllProducts, submitUserOrder}}>
			<>
				{children}
				<ToastContainer
					position="bottom-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="colored"
				/>
			</>
		</CartContext.Provider>
	)
}