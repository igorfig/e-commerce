import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
	background: #fff;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	padding: 1rem;
	max-width: 250px;
	border-radius: .25rem;
	margin 1rem;


	flex: none;

	div.product-info {
		display: flex;
		align-items: center;
		justify-content: space-between;
		div.unit {
			max-width: 60px;
			text-align: center;
			font-size: .7rem;
			border: 1px solid var(--secondary-color);
			padding: .2rem;
			color: var(--secondary-color);
		}

		div.rate {
			display: inline-flex;
			align-items: center;
			small {
				color: var(--secondary-color);
			}
		}
	}

	div.product {
		display: flex;
		flex-direction: column;
		align-items: center;
		img {
			width: 164px;
			height: 164px;
		}

		a {
			text-decoration: none;
			font-weight: 600;
			color: #000;
			user-select: none;
		}
	}

	div.product-price {
		margin: 1rem 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		s {
			color: #c4c4c4;
		}

		strong {
			font-weight: 700;
			font-size: 1.4rem;
			color: var(--secondary-color);
		}

		span {
			color: #c4c4c4;
		}
	}

	button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		background: var(--cta-color);
		border: none;
		outline: none;
		color: #fff;
		padding: .4rem;
		border-radius: .25rem;
		transtion: filter .2s ease-in;
		font-weight: bold;

		&:hover {
			filter: brightness(.9);
		}
	}
`