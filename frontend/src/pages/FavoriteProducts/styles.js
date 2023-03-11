import styled from 'styled-components';

export const Container = styled.div`
	background: var(--white);
	padding: 2rem;

	@media(max-width: 720px) {
		padding: 1rem 0;
	}
	h2 {
		display: inline-flex;
		align-items: center;
		gap: .5rem;
		font-weight: 700;
		color: var(--font-bold);
	}
`

export const EmptyFavorites = styled.div`
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

export const ProductCard = styled.div`
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
	max-width: 50%;

	@media(max-width: 720px){
		max-width: 100%;
	}
`

export const ProductPrice = styled.div`
	margin-top: 1rem;
	display: flex;
	flex-direction: column;

	small {
		text-decoration: line-through;
		color: var(--gray-soft);
		font-weight: 700;
	}

	strong {
		font-size: 1rem;
		font-weight: 700;
		color: var(--secondary-color);
	}
`

export const Actions = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	gap: 1rem;
	top: 1rem;
	right: 1rem;

	button {
		background: none;
		outline: none;
		border: none;
	}
`