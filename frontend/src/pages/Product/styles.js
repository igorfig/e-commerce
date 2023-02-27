import styled from 'styled-components';

export const Container = styled.div`
	background: var(--white-100);
	padding: 2rem;
	h2 {

		color: var(--font-bold);
		font-weight: 700;

		@media(max-width: 640px) {
			font-size: 1rem;
		}
	}
`

export const CurrentPath = styled.div`
	margin-top: 1rem;
	
	display: flex;
	align-items: center;
	gap: .5rem;

	span {
		color: var(--font-color);
		font-weight: 500;
	}

	small {
		font-weight: 500;
		font-size: .8rem;
		@media(max-width: 640px) {
			font-size: .5rem;
		}
		color: var(--font-color);
	}
`

export const ProductContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;

	@media(max-width: 640px) {
		flex-direction: column;
	}

`

export const ProductInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 2rem;
	width: 100%;
	align-self: flex-start;
	margin-right: 2rem;
	padding: 2rem 0; 
`

export const ProductSpecSheet = styled.div`
	align-self: flex-start;
	width: 100%;
	background: var(--gray-100);
	padding: 2rem;
	margin-bottom: 1rem;

	display: flex;
	flex-direction: column;
	gap: 2rem;

	h2 {
		display: inline-flex;
		align-items: center;
		gap: .5rem;
		padding: 0;
		margin-bottom: 2rem;

		color: var(--font-bold);
		font-weight: 700;
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		h3 {
			margin-bottom: 1rem;
			font-weight: 700;
			color: var(--font-color);
		}


		span {
			color: var(--dark-gray);

			@media(max-width: 640px) {
				display: flex;
				flex-direction: column;
			}

			strong {
				color: var(--font-bold);
				font-weight: bold;
			}
		}
	}
`

export const ProductImage = styled.img`
	max-width: 450px;
	max-height: 450px;
	@media(max-width: 640px) {
		max-width: 300px;
		max-height: 300px;
	}
`

export const PaymentCardInfo = styled.div`
	background: var(--gray-100);

	width: 50%;
	@media(max-width: 640px) {
		width: 100%;
		margin: 1rem 0;
	} 

	align-self: flex-start;
	padding: 1rem;

	display: flex;
	flex-direction: column;
	gap: 2rem;
`

export const ProductDetails = styled.div`
	display: flex;
	flex-direction: column;

	small {
		font-size: .8rem;
		color: var(--font);
		strong {
			color: var(--font-bold);
		}
	}

	strong {
		font-weight: bold;
		color: var(--green);
	}
`

export const ProductPrice = styled.div`
	display: flex;
	flex-direction: column;

	small {
		text-decoration: line-through;
		color: var(--gray-soft);
		font-weight: 700;
	}

	strong {
		font-size: 2rem;
		font-weight: bold;
		color: var(--secondary-color);
	}

	span {
		font-size: 1rem;
		color: var(--font-color);
		font-weight: 300;

		strong {
			font-size: 1rem;
			color: var(--dark-gray);
		}
	}

	h3 {
		margin: 2rem 0 1rem 0;
		display: inline-flex;
		align-items: center;
		gap: .5rem;
		font-weight: 700;
		color: var(--font-bold);
	}
`

export const InstallmentTable = styled.div`
	background: var(--white-100);
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: .5rem;

	span {
		padding: .25rem;
		&:nth-child(even) { background: var(--gray-100) }
	}

	div {
		margin-top: 1rem;
		display: flex;
		flex-direction: row;
		gap: 1rem;
		img {
			width: 32px;
		}
	}
`

export const BuyButton = styled.button`
	width: 100%;
	background: var(--cta-color);

	border: none;

	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;

	font-size: 1.2rem;
	color: var(--white);
	border-radius: .25rem;

	transition: filter .2s;

	&:hover {
		filter: brightness(.9);
	}
`
