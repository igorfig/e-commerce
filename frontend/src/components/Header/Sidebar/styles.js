import styled from 'styled-components';
import { transparentize } from 'polished';

export const Overlay = styled.div`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0,0,0,0.5);
	z-index: 999;
	

	div.sidebar-container {
		background: var(--primary-color);
		box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
		max-width: 300px;
		height: 100vh;
		position: relative;

		animation: showMenu .3s ease-in;

		@keyframes showMenu {
			from {
				opacity: 0;
				width: 0;
			}

			to {
				opacity: 1;
				width: 300px;
			}
		}

		div.header {
			display: flex;
			align-items: center;
			width: 100%;
			padding-top: 1rem;	
			span.title {
				margin-left: 1rem;
				span.logo {
					font-size: 2.5rem;
					sup.logo-sup{
						font-size: 2rem;
					}
				}
			}
		
			button {
				position: absolute;
				display: block;
				padding: 1rem 1.8rem;
				right: 0;
			}
			
		}


		div.search-engine-container {
			width: 100%;
			margin-top: 1rem;
			
			div {
				width: 80%;
			}
		}
	

		ul {
			list-style: none;
			width: 100%;
			max-height: 350px;
			padding: 1rem;
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
			
			li {
				border-radius: .25rem;
				display: flex;
				align-items: center;
				height: 60px;
				
				background: ${transparentize(.9, '#cccccc')};
				padding: 0 .4rem;
				color: #fff;

				img {
					margin-right: 5%;
				}

				span {
					width: 100%;
					a {
						text-decoration: none;
						color: #fff;
						font-size: .7rem;
					}
					display: flex;
					flex-direction: column;

					strong {
						font-weight: 700;
						font-size: .8rem;
						color: var(--secondary-color);
					}
				}
			}
		}

		div.actions {
			position: fixed;
			bottom: .5rem;
			display: inline-flex;
			align-items: center;
		}
	}

`