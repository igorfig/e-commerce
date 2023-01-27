import styled from 'styled-components';

export const Link = styled.a`
	padding: 0 .6rem;
	text-decoration: none;
	display: inline-flex;
	align-items: center;
`

export const ButtonContent = styled.span`
	margin-left: 5%;
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	small {
		font-size: .7rem;
		width: 100px;
	}

	strong {
		font-weight: 700;
		font-size: .9rem;
	}
`