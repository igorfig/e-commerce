import styled from 'styled-components';

export const Container = styled.div`
	background: var(--white);
	padding: 2rem;
	display: flex;
	max-width: 900px;
	@media(max-width: 480px) {
		width: 100%;
	}
	flex-direction: column;
	align-items: flex-start;

	h2 {
		color: var(--font-bold);
		font-weight: 700;
		margin-bottom: 2rem;
		display: flex;
		align-items: center;

		@media(max-width: 480px) {
			font-size: 1rem;
		}

		img {
			margin-right: .35rem;
		}
	}

`

export const SearchAddressContainer = styled.div`
	display: inline-flex;
	align-items: center;
	@media(max-width: 640px) {
		align-items: flex-start;
		flex-direction: column;
		gap: 1rem;
	}

	div {
		display: flex;
		align-items: center;
		input {
			max-width: 100%;
			height: 50px;
			margin-right: 1rem;
			padding: 0 1rem;
			border-radius: .25rem;
			border: 1px solid var(--gray-soft);
		}

		button {
			height: 50px;
			width: 80px;
			background: var(--cta-color);
			color: var(--white);
			font-weight: 700;
			font-size: 1.2rem;
			border: none;
			outline: none;
			border-radius: .25rem;
			margin-right: 1rem;
		}
	}

	a {
		color: var(--cta-color);
		font-size: 1.125rem;
		font-weight: bold;
	}
`

export const UserAddressResult = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;

	strong {
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--font-bold);
		display: block;
		margin-bottom: .5rem;
	}

	span {
		color: var(--font-color);
		font-weight: 400;
		font-size: 1rem;
		line-height: 1.8rem;
	}
`