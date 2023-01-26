import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const ListContainer = styled.ul`
	background: var(--secondary-color);
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 1;
	& > li {
		cursor: pointer;
		height: 100%;
		display: flex;
		align-items: center;
		padding: 0 2rem;
		position: relative;
		&:not(:last-child):not(:first-child) {
			border-right: 1px solid #fff;
		}

		&:first-child {
			background: ${darken(.2, '#ff8b2b')};
			position: relative;
			ul.dropdown {
				position: absolute;
				top: 100%;
				left: 0;
				width: 100%;
				background: #fff;
				border-right: 2px solid ${lighten(.175, '#C4C4C4')};
				li {
					width: 100%;
					cursor: pointer;
					display: flex;
					position: relative;

					span {
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
					}
				}
			}
		}
		a {
			color: #fff;
			font-size: .8rem;
			@media(max-width: 1024px) {
				font-size: .7rem;
			}
			font-weight: 900;
		}

		
	}


	ul.sidebar {
		position: absolute;
		width: 100%;
		left: 100%;
		top: 100%;
		background: #fff;
		li {
			padding: .3rem 1rem;
			background: #fff;
			transition: filter .2s;
			&:hover {
				filter: brightness(.9);
			}
			a {
				color: ${darken(.3, '#C4C4C4')};
				font-weight: 400;
				font-size: 1rem;
			}
		}
	}
`