import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	background: #fff;
	display: flex;
	align-items: center;
	padding: 5rem 0;
	flex-direction: column;

	h2 {
		color: var(--secondary-color);
		font-weight: bold;
		font-size: 2rem;
	}
`

export const Form = styled.form`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 3rem;

	
`

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	width: 350px;
	@media(max-width: 480px) {
		width: 250px;
	}

	height: 100%;
	height: 45px;
	outline: none;
	border-radius: .25rem;
	position: relative;
	background: #fff;

	margin-bottom: 2rem;


	input {
		width: 100%;
		height: 45px;
		outline: none;
		background: transparent;
		border: 1px solid #c4c4c4;
		padding: 0 1rem;
		&:focus {
			border: 1px solid var(--secondary-color);
		}
	}

	label {
		position: absolute;
		left: 5px;
		pointer-events: none;
		opacity: .5;
		padding: 0 1rem;

		transition: transform .5s;
	}

	& input:focus ~ label {
		transform: translateY(-25px);
		background: #fff;
		color: var(--secondary-color);
		font-size: 1rem;
		opacity: 1;
		padding: 0;
		margin-left: 1rem;	
	}
`

export const SubmitLogin = styled.button`
	width: 100%;
	height: 45px;
	background: var(--cta-color);
	border-radius: .25rem;
	color: #fff;
	font-size: 1.2rem;
	font-weight: bold;
	outline: none;
	border: none;

	display: inline-flex;
	align-items: center;
	justify-content: center;

	img {
		margin-right: .6rem;
	}
`