import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background: var(--primary-color);
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	h3 {
		font-weight: bold;
		color: #fff;
		font-size: 1.2rem;
		margin-bottom: 1rem;
	}

	a {
		color: #fff;
		img {
			width: 48px;
			height: 48px;
		}

		& + a {
			margin-left: .5rem;
		}
	}

	p {
		text-align: justify;
		strong {
			color: var(--secondary-color);
			font-size: 1rem;
		}
		max-width: 50%;
		margin-top: 1rem;
		color: #fff;
		font-size: 1rem;
		font-weight: 300;
	}

	span {
		font-size: 1.2rem;
		margin-top: 1.5rem;
		color: #fff;
		font-weight: 400;
		strong {
			color: var(--secondary-color);
			font-weight: 700;
		}
	}
`