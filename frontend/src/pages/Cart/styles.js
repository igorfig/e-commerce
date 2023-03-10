import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
	background: var(--gray-100);
	padding: 2rem;

	@media(max-width: 640px) {
		padding: 0;
	}
`

export const EmptyCartContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 5rem;

	@media(max-width: 640px) {
		padding: 2rem 1rem;
	}

	strong {
		font-weight: 700;
		font-size: 1.5rem;
		color: var(--font-color-bold);
		margin-bottom: 2rem;
	}

	img {
		width: 220px;
	}
`

export const Button = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;

	height: 65px;
	max-width: 100%;
	padding: 1rem;
	margin-top: 5rem;

	border: none;
	outline: none;
	background: var(--cta-color);
	border-radius: .25rem;

	font-size: 1.2rem;
	font-weight: 700;
	color: var(--white);

	transition: filter .2s;

	&:hover {
		filter: brightness(.9);
	}

	img {
		width: 48px;
	}
`

export const CartContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;

	@media(max-width: 1024px) {
		flex-direction: column;
	}

	gap: 2rem;
`