import styled from 'styled-components';

export const Link = styled.a`
	position: relative;
	bottom: .5rem;
	right: 1rem;
	width: 130px;
	height: 60px;
	border-radius: .25rem;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 .5rem;
	color: var(--white);
	background: var(--cta-color);
	transition: filter .2s ease-in;

	&:hover {
		filter: brightness(.9);
	}
`

export const CartButtonContent = styled.div`
	color: var(--white);
	margin-left: 5%;
	padding: 0;
	display: flex;
	flex-direction: column;

	small {
		font-weight: 300;
		font-size: .8rem;
	}

	strong {
		font-weight: 700;
		font-size: .8rem;
	}
`
