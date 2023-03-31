import styled from 'styled-components';

export const Container = styled.div`
	background: var(--white);
	padding: 1rem;

	@media(max-width: 720px) {
		padding: 2rem 1rem;
	}

	h2 {
		display: inline-flex;
		align-items: center;
		gap: .5rem;
		font-weight: 700;
		color: var(--font-bold);
	}
`

export const EmptyOrders = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 5rem;

	@media(max-width: 720px) {
		padding: 5rem 1rem;
	}

	strong {
		font-weight: 700;
		font-size: 1.5rem;
		color: var(--font-color-bold);
		margin-bottom: 2rem;

		text-align: center;
		gap: .5rem;
	}

	img {
		width: 220px;
	}

	span {
		font-size: 1rem;
		font-weight: 400;
		color: var(--font-color);
		text-align: center;
		margin-top: 3rem;
	}
`

export const NavigateTo = styled.a`
	border: none;
	outline: none;
	background: var(--cta-color);
	border-radius: .25rem;
	display: inline-flex;
	align-items: center;

	max-width: 100%;
	height: 65px;
	padding: 1rem;
	margin-top: 5rem;

	font-size: 1.2rem;
	font-weight: 700;
	color: var(--white);

	transition: filter .2s;


	&:hover {
		filter: brightness(.9);
	}

	svg {
		width: 48px;
	}
`

export const OrderCard = styled.div`
	background: var(--white-100);
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	border-radius: .25rem;
	margin-top: 5rem;

	padding: 1rem 2rem;

	img {
		max-height: 128px;

		@media(max-width: 720px) {
			margin-top: 2rem;
			max-height: 140px;
		}
	}

	display: flex;
	align-items: center;
	flex-direction: row;

	@media(max-width: 720px) {
		flex-direction: column;
	}
	gap: 2rem;

	position: relative;
`


export const ProductDetails = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media(max-width: 720px){
		max-width: 100%;
	}

	span {
		font-weight: 700;
		color: var(--font-color);
	}
	small {
		color: var(--dark-gray);
	}
`

export const OrderStatus = styled.div`
	display: flex;
	align-items: center;
	h2 {
		font-weight: 700;
		color: var(--font-bold);
	}
	span {
		line-height: 2.6rem;
		margin: 0;
		padding: 0;
		display: flex;
		align-items: center;

		color: var(--gray-soft);

		display: flex;
		&.done {
			color: var(--green);
		}


		svg {
			margin-left: .5rem;
		}
	}
`

export const OrderTrack = styled.button`
	position: absolute;
	right: 2rem;
	bottom: 1rem;

	background: transparent;
	outline: none;
	border: 2px solid var(--cta-color);
	color: var(--cta-color);
	height: 40px;
	width: 20%;
	border-radius: .25rem;

	font-size: 1rem;
	font-weight: 500;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: .5rem;
`