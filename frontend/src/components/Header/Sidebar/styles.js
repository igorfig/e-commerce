import styled from 'styled-components';
import { transparentize } from 'polished';

export const SidebarOverlay = styled.div`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0,0,0,0.5);
	z-index: 999;
`

export const Container = styled.div`
	background: var(--primary-color);
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	max-width: 300px;
	height: 100vh;
	position: relative;

	animation: showMenu .3s ease-in;

	@keyframes showMenu {
		from {
			opacity: 0;
			width: 0;
		}

		to {
			opacity: 1;
			width: 300px;
		}
	}
`

export const SidebarHeader = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	padding-top: 1rem;	

	div:first-child {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin-bottom: 1rem;
	}

`

export const Logo = styled.span`
	margin-left: 1rem;

	span{
		font-size: 2.5rem;
		sup{
			font-size: 1.5rem;
		}
	}
`

export const Button = styled.button`
	padding: 1rem 1.8rem;
	background: transparent;
	border: none;
	outline: none;
`

export const ResultList = styled.ul`
	list-style: none;
	width: 100%;
	max-height: 350px;
	padding: 1rem;
	margin-top: 1rem;
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
`

export const Result = styled.li`
	border-radius: .25rem;
	display: flex;
	align-items: center;
	height: 60px;
	background: ${transparentize(.9, '#cccccc')};
	padding: 0 .4rem;
	color: var(--white);

	img {
		margin-right: 5%;
	}
`

export const ProductInfo = styled.div`
	width: 100%;
	display: flex;	
	flex-direction: column;
	
	a {
		text-decoration: none;
		color: var(--white);
		font-size: .7rem;
	}

	strong {
		font-weight: 700;
		font-size: .8rem;
		color: var(--secondary-color);
	}
`

export const Actions = styled.div`
	position: fixed;
	bottom: .5rem;
	display: inline-flex;
	align-items: center;
`