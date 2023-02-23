import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.nav`
	background: var(--secondary-color);
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 1;
`

export const Link = styled.a`
	cursor: pointer;
	height: 100%;
	display: flex;
	align-items: center;
	padding: 0 2rem;
	position: relative;
	color: var(--white);
	font-size: .8rem;
	@media(max-width: 1024px) {
		font-size: .7rem;
	}
	font-weight: 900;
`


export const DropdownToggle = styled(Link)`
	&:not(:last-child):not(:first-child) {
		border-right: 1px solid var(--white);
	}

	&:first-child {
		background: ${darken(.2, '#ff8b2b')};
		position: relative;
	}
`

export const DropdownContainer = styled.div`
	display: flex;
`
	
export const DropdownContent = styled.ul`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	height: calc(100% * 5 + .5rem);
	background: var(--white);
`


export const Sidebar = styled.ul`
	border-left: 2px solid ${lighten(.175, '#C4C4C4')};
	position: absolute;
	top: 100%;
	left: 100%;
	width: 100%;
	height: calc(100% * 5 + .5rem);
	background: #fff;
`

export const ListItem = styled.li`
	width: 100%;
	cursor: pointer;
	display: flex;
	position: relative;
	display: flex;
	align-items: center;
	padding: .3rem 1rem;
	font-size: 1rem;
	font-weight: 400;
	background: var(--white);
	color: ${darken(.3, '#C4C4C4')};
	transition: filter .2s;

	a {
		color: ${darken(.3, '#C4C4C4')}
	}

	&:hover {
		filter: brightness(.9);
	}

	img {
		position: absolute;
		right: 5px;
	}
`