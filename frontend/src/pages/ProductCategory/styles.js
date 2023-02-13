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

	small {
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
	padding: 2rem;

	display: grid;

	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`