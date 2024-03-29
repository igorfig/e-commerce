import styled from 'styled-components';
import { transparentize, darken } from 'polished';

export const Container = styled.header`
	background: var(--primary-color);
	display: flex;
	align-items: center;

	padding: 1.25rem 0 3rem;
	@media(max-width: 480px) {
		padding: .75rem 0 .5rem;
	}
	width: 100%;
	position: relative;
	top: 0;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	z-index: 999;
	@media(max-width: 640px) {
		img.menu-on {
			max-width: 24px;
		}
	}

	button {
		background: transparent;
		outline: none;
		border: none;
		margin-left: 1.6rem;

		img.menu-on {
			transform: rotate(180deg);
		}
	}
`

export const LogoLink = styled.a`
	margin: 0 1.75rem 0 2.75rem;
	@media(max-width: 480px) {
		margin: 0 1.75rem;
	}
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 1rem;
		color: var(--white);
		font-weight: 300;
		font-style: italic;
		align-self: flex-end;
	}
	span {
		flex: 1;
		font-size: 2rem;
		span {
			font-size: 2rem;
			sup {
				font-size: 1rem;
    		}
		}
	}
`

export const HeaderActions = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	gap: 2rem;
	@media(min-width: 1023px) {
		right: ${({ isLoginPage }) => isLoginPage ? '10rem' : '5rem'};
	}

	@media(max-width: 800px) {
		right: ${({ isLoginPage }) => isLoginPage ? '3rem' : '1rem'};
	}
`

export const DashboardLink = styled.a`
	display: flex;
	align-items: center;
	height: 50px;
	padding: 0 .5rem;
	border: 2px solid var(--white);
	border-radius: .25rem;
	color: var(--white);
	font-weight: 400;
	font-size: 1.2rem;
	img {
		margin-right: .5rem;
	}
`

export const SearchContainer = styled.div`
	width: 50%;
	margin-right: 1.6rem;
	@media(max-width: 480px) {
		width: 50%;
	}
`

export const CartLink = styled.a`
	${({ isCartEmpty }) => !isCartEmpty &&  `&::before { 
		content: attr(data-count);
		background: var(--secondary-color);
		font-size: .6rem;
		color: var(--white);
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 1rem;
		min-height: .75rem;
		position: absolute;
		top: 0;
		right: 0;
		border-radius: 50%;
	};
	`
	}
`