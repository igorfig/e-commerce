import styled from 'styled-components';
import { transparentize, darken } from 'polished';

export const Container = styled.div`
	display: flex;
	align-items: center;
	background: #fff;
	border-radius: .25rem;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	position: relative;
	padding: .5rem;
	input {
		color: ${darken(.4, '#C4C4C4')};
		margin-left: 1%;
		padding: 0 .5rem;
		width: 100%;
		background: transparent;
		border: none;
		outline: none;
		font-size: 1rem;
		&::placeholder {
			color:#C4C4C4;
			font-size: 1rem;
		}
	}
`

export const ResultList = styled.ul`
	width: 100%;
	right: 0;
	background: #fff;
	position: absolute;
	top: 100%;
	z-index: 999;

	@media(max-width: 640px) {
		top: calc(100% + .5rem);
		width: 100vw;
		right: -1.6rem;
	}
`

export const Result = styled.li`
	padding: .5rem 1rem;
	display: flex;
	align-items: center;
	background: #fff;
	transition: filter .2s;
	cursor: pointer;
	display: flex;
	
	&:not(:last-child) {
		border-bottom: 1px solid ${transparentize(0.5, "#C4C4C4")};
	}

	&:hover {
		filter: brightness(.9);
	}

	img {
		width: 64px;
		height: 64px;
	}
`

export const ProductInfo = styled.span`
	display: flex;
	flex-direction: column;

	span {
		font-size: .8rem;
		color:${darken(0.2, "#C4C4C4")}
	}

	strong {
		font-size: 1rem
	}
`