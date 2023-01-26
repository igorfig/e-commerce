import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	bottom: .5rem;
	right: 1rem;
	width: 150px;
	height: 60px;
	a {
		border-radius: .25rem;
		text-decoration: none;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 0 .5rem;
		color: #fff;
		height: 100%;
		width: 100%;
		background: var(--cta-color);
		transition: filter .2s ease-in;

		&:hover {
			filter: brightness(.9);
		}
	

		span {
			color: #fff;
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
				font-size: 1rem;
			}
		}
	}
`