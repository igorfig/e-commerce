import styled from 'styled-components';

import { transparentize } from 'polished';

export const Container = styled.div`
	background: var(--white-100);
	box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
	margin: 0 2rem 2rem;
	padding-bottom: 1rem;
	opacity: ${({ applyOpacity }) => applyOpacity ? .6 : 1};

	@media(max-width: 480px) {
		margin: 0;		
	}

	border-radius: .5rem;
	position: relative;	
`

export const SectionsSeparator = styled.div`
	width: 100%;
	background: var(--secondary-color);
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;

	strong  {
		color: var(--white);
		font-weight: 700
	}
`

export const BannersContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	margin-bottom: 5rem;
	img {
		border-radius: .5rem;
		background-size: cover;
		width: 100%;
		max-height: 250px;

		@media(max-width: 480px) {
			width: 100%;
		}
	}
`

export const GamerStation = styled.section`
	border: 3px solid var(--secondary-color);
	margin: 0 2rem;
	padding: 1rem;
	border-radius: .5rem;

	@media(max-width: 480px) {
		border: none;
		padding: 0;
	}
	
`

export const GamerStationHeader = styled.div`
	display: flex;
	align-items: center;
	justify-items: center;
	flex-direction: column;
	width: 100%;
	img {
		width: 200px;
		margin-bottom: 3rem;
	}

	h2 {
		text-align: center;
		color: var(--secondary-color);
		font-weight: 700;
		font-size: 3.6rem;

		@media(max-width: 480px) {
			font-size: 2rem;
		}
		
	}
`