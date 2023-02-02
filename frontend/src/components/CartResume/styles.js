import styled from 'styled-components';

export const Container = styled.div`
	background: var(--white);
	flex: 1;
	padding: 2rem;

	max-height: 500px;

	h2 {
		color: var(--font-bold);
		font-weight: 700;

		display: flex;
		align-items: center;
		gap: .5rem;
		margin-bottom: 3rem;
	}

	
`

export const PriceDetails = styled.div`
	div {
		display: flex;
		align-items: center;
		justify-content: space-between;

		&:first-child {
			border-bottom: 1px solid var(--gray-soft);
			padding: 1rem 0;
			margin-bottom: 1rem;
		}

		span {
			color: var(--dark-gray);
			font-size: .8rem;
		}

		strong {
			font-weight: bold;
			color: var(--font-bold);
		}
	}
`

export const TotalPrice = styled.div`	
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	

	div {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		span {
			color: var(--dark-gray);
		}
	}

	small {
		width: 100%;
		text-align: center;
		margin-top: 1rem;
		background: var(--gray-100);
		padding: .5rem;
		font-weight: 300;
	}
`

export const Button = styled.button`
	width: 100%;
	height: 50px;
	margin-top: 2rem;

	color: var(--white);
	background: var(--cta-color);
	border-radius: .25rem;

	font-size: 1.2rem;
	font-weight: bold;

	border: none;
	outline: none;

	transition: filter .2s;

	&:hover {
		filter: brightness(.9);
	}
`

