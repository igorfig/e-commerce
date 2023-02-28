import styled from 'styled-components';

export const Container = styled.div`
	background: var(--white-100);
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 5rem;
`

export const Header = styled.header`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`

export const CurrentPath = styled.div`
	display: flex;
	align-items: center;
	gap: .5rem;

	span {
		color: var(--font-color);
		font-weight: 500;
	}

	a {
		font-weight: 500;
		font-size: .8rem;
		@media(max-width: 640px) {
			font-size: .5rem;
		}
		color: var(--font-color);
	}
`

export const Banner = styled.div`
	img {
		max-width: 100%;
	}
`

export const Title = styled.div`
	max-width: 100%;
	text-align: center;
	background: var(--secondary-color);
	padding: 1rem 0;
	h2 {
		color: var(--white);
		font-weight: 700;
		font-size: 2rem;
	}
`

export const ProductsSection = styled.div`
	max-width: 100%;
	display: flex;

	flex-direction: column;
	gap: 2rem;
`

export const Product = styled.div`
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	background: var(--white);
	padding: 2rem 1rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	position: relative;

	@media(max-width: 640px) {
		flex-direction: column;
	}

	img {
		width: 128px;
		@media(max-width: 640px) {
			width: 100%;
		}
		padding: .5rem;
	}

	button {
		background: none;
		outline: none;
		border: none;
		position: absolute;
		bottom: 1.5rem;
		right: 1.5rem;
		img {
			width: 48px;
		}
	}
`

export const Info = styled.div`
	max-width: 60%;
	display: flex;
	flex-direction: column;

	@media(max-width: 640px) {
		max-width: 100%;
		text-align: justify;
		line-height: 1.35rem;
	}

	span {
		font-weight: 700;
		font-size: 1rem;
		color: var(--font-color);
		margin-bottom: 1rem;
	}

	small {
		text-decoration: line-through;
		color: var(--gray-soft);
	}

	strong {
		font-weight: 700;
		font-size: 1.4rem;
		color: var(--secondary-color);
	}
`
