import { Container } from './styles.js';

import githubImg from '../../assets/github-mark.svg'
import linkedinImg from '../../assets/linkedin-mark.svg'
import instagramImg from '../../assets/instagram-mark.svg'

export function Footer() {
	return (
		<Container>
			<h3>ME SIGA NAS REDES SOCIAIS</h3>
			<div>
				<a href="https://github.com/igorfig" target="_blank">
					<img src={githubImg} alt="Github"/>
				</a>

				<a href="https://www.linkedin.com/in/igorfig/" target="_blank">
					<img src={linkedinImg} alt="linkedIn"/>
				</a>

				<a href="https://www.instagram.com/igufs123/" target="_blank">
					<img src={instagramImg} alt="Instagram"/>
				</a>
			</div>

			<p>
				<strong>Link Start | Commerce</strong> é um projeto web que simula um e-commerce.
				É inspirado em grandes lojas do mercado que tem como venda principal produtos relacionados a computadores. 
				Este projeto foi feito no intuito de servir como portfólio e comprovar experiência em determinadas tecnologias do mercado.
			</p>

			<span>Projeto inteiramente desenvolvido por <strong>Igor Figueiredo ❤️</strong></span>
		</Container>
	)
}