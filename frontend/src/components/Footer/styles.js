import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	background: var(--primary-color);
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
`

export const Title = styled.h3`
	font-weight: bold;
	color: #fff;
	font-size: 1.2rem;
	margin-bottom: 1rem;
`

export const Link = styled.a`
	color: #fff;

	& + a {
		margin-left: .5rem;
	}

	img {
		width: 48px;
		height: 48px;
	}
`


export const Description = styled.p`
	text-align: justify;
	max-width: 80%;
	margin-top: 1rem;
	color: #fff;
	font-size: 1rem;
	font-weight: 300;
`

export const Emphasis = styled.strong`
	color: var(--secondary-color);
	font-size: 1.2rem;
	font-weight: 700;
`

export const Author = styled.span`
	font-size: 1.2rem;
	margin-top: 1.5rem;
	color: #fff;
	font-weight: 400;
`