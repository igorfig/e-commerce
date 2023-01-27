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
	color: #fff;
	font-size: .8rem;
	@media(max-width: 1024px) {
		font-size: .7rem;
	}
	font-weight: 900;

	&:not(:last-child):not(:first-child) {
		border-right: 1px solid #fff;
	}

	&:first-child {
		background: ${darken(.2, '#ff8b2b')};
		position: relative;
	}
`

export const DropdownContent = styled.ul`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	background: #fff;
	border-right: 2px solid ${lighten(.175, '#C4C4C4')};
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
	width: 100%;
	background: #fff;
	color: ${darken(.3, '#C4C4C4')};
	transition: filter .2s;
	&:hover {
		filter: brightness(.9);
	}

	img {
		position: absolute;
		right: 5px;
	}
`

export const Sidebar = styled.ul`
	position: absolute;
	width: 100%;
	left: 100%;
	top: 100%;
	background: #fff;

	a {
		color: ${darken(.3, '#C4C4C4')};
	}
`