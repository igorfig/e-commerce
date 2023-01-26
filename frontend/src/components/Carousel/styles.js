import styled from 'styled-components';

export const Container = styled.div`
	max-width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: ${({ applyOpacity }) => applyOpacity ? .6 : 1};

	img {
		width: 100%;
		height: 100%;
	}

	button {
		position: absolute;
		background: none;
		border: none;
		outline: none;
		opacity: 0;

		transition: opacity .3s;
	}

	&:hover {
		button {
			opacity: 1;
		}
	}

	button.l-arrow {
		left: 0;
	}

	button.r-arrow {
		right: 0;
	}

`