import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
	background: var(--white);
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	padding: 1rem;
	max-width: 250px;
	border-radius: .25rem;
	margin 1rem;
	flex: none;
`

export const ProductInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	div:first-child {
		max-width: 80px;
		text-align: center;
		font-size: .7rem;
		border: 1px solid var(--secondary-color);
		padding: .2rem;
		color: var(--secondary-color);
	}

`

export const ProductRate = styled.div`
	display: inline-flex;
	align-items: center;
	color: var(--secondary-color);
`

export const ProductSpecifications = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	
`

export const ProductImageContainer = styled.div`
	margin-top: 1rem;
	height: 164px;
	img {
		max-height: 164px;
		max-width: 100%;

	}
`

export const ProductDescription = styled.a`
	text-decoration: none;
	font-weight: 600;
	color: #000;
	user-select: none;
	line-height: 1.2;
	height: calc(1.2em * 3);
	margin-top: 1rem;

`

export const ProductPrice = styled.div`
	margin: .5rem 0 1rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	small {
		text-decoration: line-through;
		color: var(--gray-soft);
	}

	strong {
		font-weight: 700;
		font-size: 1.4rem;
		color: var(--secondary-color);
	}

	span {
		color: var(--gray-soft);
	}

	
`

export const CartButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	background: var(--cta-color);
	border: none;
	outline: none;
	color: var(--white);
	padding: .4rem;
	border-radius: .25rem;
	transtion: filter .2s ease-in;
	font-weight: bold;
	&:hover {
		filter: brightness(.9);
	}
`