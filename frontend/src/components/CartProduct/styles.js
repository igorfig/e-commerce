import styled from 'styled-components';

export const Container = styled.div`
	background: var(--white);
	max-width: 900px;
	margin-top: 2rem;

	padding: 1rem;
`

export const ProductHeader = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	row-gap: 3rem;
	justify-content: space-between;
	border-bottom: 1px solid #eee;
	padding: 1rem;

	@media(max-width: 640px) {
		display: flex;
		flex-direction: column;
		row-gap: 1rem
	}

	
	h2 {
		color: var(--font-bold);
		font-weight: 700;
		margin-bottom: 2rem;
		display: flex;
		align-items: center;

		img {
			margin-right: .35rem;
		}
	}
	

	button {
		max-width: 300px;
		height: 40px;
		background: transparent;
		border: 1px solid var(--red);
		color: var(--red);
		border-radius: .25rem;
		font-weight: bold;

		display: flex;
		align-items: center;
		justify-content: center;
		gap: .25rem;

		@media(max-width: 640px) {
			font-size: .8rem;
			width: 100%;
		} 
	}

	span {
		color: var(--dark-gray);
		font-weight: 400;
		background: var(--gray-100);
		max-width: 300px;
		padding: 0 1rem;
		strong {
			color: var(--dark-gray);
			font-weight: bold;
		}
	}
`

export const ProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;	
`