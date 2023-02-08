import styled from 'styled-components';



export const Container = styled.div`
	background: var(--gray-100);

	padding: 2rem;

	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 5rem;

	h2 {
		align-self: flex-start;
		color: var(--font-bold);
		font-weight: 700;
		margin-bottom: 5rem;
		font-size: 1.8rem;

		@media(max-width: 480px) {
			font-size: 1.2rem;
		}

		display: flex;
		align-items: center;
		gap: 1rem;
	}

`

export const DashboardTableContainer = styled.div`
	overflow-x: scroll;
	width: 100%;
`


export const ProductSectionSubtitle = styled.h3`
	font-size: 1.35rem;
	@media(max-width: 480px) {
		font-size: 1rem;
	}
	font-weight: 700;
	color: var(--font-bold);
	margin-bottom: 2rem;

	display: flex;
	align-items: center;
	gap: 1rem;
`


export const ProductsLog = styled.div`
	width: 100%;

	input {
		width: 100px;
		padding: .5rem;
		text-align: center;
		border-radius: .25rem;
		height: 50px;
		border: none;
		outline: none;
	}
`

export const SelectProduct = styled.select`
    width: 100%;
    font-size: 1rem;
    color: var(--font-color);
    padding: 1rem;
    border-radius: .25rem;
    border: 2px solid var(--secondary-color);
    margin-right: 1rem;

 	option {
 		max-width: 100%;
 	}
`

export const ProductControlContainer = styled.div`
	margin-top: 3rem;
	display: flex;
	flex-direction: column;

	justify-content: center;
	gap: 1rem;

	label {
		display: flex;
		align-items: center;
		color: var(--font-bold);
		font-weight: bold;
		font-size: 1rem;
		border: 1px solid var(--dark-gray);
		padding: 1rem;

		@media(max-width: 640px) {
			padding: .5rem;
		}

		span {
			margin-left: 1rem;
		}
		input {
			background: transparent;
			text-decoration: underline;
			font-size: 1rem;
			color: var(--secondary-color);
			border-radius: 0;
			pading: 0;
			text-align: left;
		}
	}
`

export const Button = styled.button`
	align-self: flex-end;

	@media(max-width: 640px) {
		width: 100%;
		text-align: center;
	}

	padding: 1rem;
	background: var(--green);
	color: var(--white);
	font-weight: 400;
	font-size: 1rem;
	border: none;
	border-radius: .25rem;

	transition: filter .2s;

	&:hover {
		filter: brightness(.9);
	}
`