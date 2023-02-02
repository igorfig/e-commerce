import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	@media(max-width: 640px) {
		grid-template-columns: 1fr;
	}

	gap: 2rem;

	position: relative;

	& + div {
		border-top: 1px solid var(--gray-soft);
		padding-top: 1rem;
	}
`

export const ProductDetailsContainer = styled.div`
	display: flex;
	flex-direction: row;

	gap: 2rem;

	@media(max-width: 640px) {
		flex-direction: column;
	}
`


export const ProductDescription = styled.div`
	display: flex;
	align-items: center;
	flex-basis: 70%;
	gap: 1rem;

	div {
		display: flex;
		flex-direction: column;
		gap: .5rem;

		span {
			font-weight: 700;
			color: var(--font-color);

			@media(max-width: 640px) {
				font-size: .8rem;
			}
		}

		small {
			font-weight: 300;
			color: var(--dark-gray);
		}
	}

	img {
		width: 96px;
		height: 96px;

		@media(max-width: 640px) {
			width: 64px;
			height: 64px;
		}
	}
	
`


export const ProductPrice = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	flex-basis: 30%;
	margin-bottom: 1rem;
	gap: .5rem;

	@media(max-width: 640px) {
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: row;
		flex-basis: 100%;
	}
	span {
		font-weight: 400;
		color: var(--font-color);
	}

	strong {
		font-weight: bold;
		color: var(--font-bold);
	}
`


export const CartAmountHandler = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;

	@media(max-width: 640px) {
		flex-direction: column;
	}

	justify-content: space-between;
	gap: 2rem;

	span {
		color: var(--dark-gray);
		font-weight: bold;
	}
`

export const CartAmountButtons = styled.div`
	gap: 1rem;
	display: flex;
	align-items: center;

	button {
		background: transparent;
		border: none;

		&[disabled] {
			svg path {
				fill: var(--gray-soft);
			}
		}
		svg path {
			fill: var(--cta-color);
		}
	}

	strong {
		font-size: 1.2rem;
	}
`


export const TrashButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: .5rem 1rem;
	background: transparent;
	border: 1px solid var(--red);
	border-radius: .25rem;
	gap: .2rem;

	color: var(--red);


	transition: background .3s;

	&:hover {
		background: var(--red);

		color: var(--white);

		svg path {
			fill: var(--white);
		}
	}

`

