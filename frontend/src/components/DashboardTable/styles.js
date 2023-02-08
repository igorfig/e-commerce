import styled from 'styled-components';

export const Container = styled.table`
	width: 100%;
	border-collapse: collapse;

	th, td {
		&:first-child {
			text-align: center;
		}

		border: 1px solid black;
		padding: 8px;
		text-align: left;
	}

	th {
		background-color: var(--secondary-color);
		color: var(--white);
		font-weight: bold;
	}

	tr {
		background: var(--white);

		td {
			font-weight: 400;
			color: var(--font-color);
		}
	}
`