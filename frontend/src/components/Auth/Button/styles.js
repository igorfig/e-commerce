import styled from 'styled-components';

export const Container = styled.div`
	padding: 0 .6rem;
	a { 
		text-decoration: none;
		display: inline-flex;
		align-items: center;

		span {
			margin-left: 5%;
			color: #fff;
			display: flex;
			flex-direction: column;
			align-items: flex-start;

			small {
				font-size: .7rem;
				width: 100px;
			}

			span {
				font-weight: 700;
				font-size: .9rem;
			}
		}
	}
	
`